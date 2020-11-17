import React, {useEffect, useState } from 'react';
import axios from 'axios';

// Components
import Header from './Header';
import MainContent from './MainContent';

// Style
import './WardComponent.scss';
import { set } from 'lodash';

const apiPoint = 'https://e86gqbslqe.execute-api.ap-southeast-2.amazonaws.com/fake_api_stage1/hospital';

const WardComponent = () => {
  const [entities, setEntities] = useState([]);
  const [activeFloors, setActiveFloors] = useState([]);
  const [activeList, setActiveList] = useState([]);
  const [roomList, setRoomList] = useState([]);
  const [equipmentList, setEquipmentList] = useState([]);
  const [roomFloors, setRoomFloors] = useState([]);
  const [equipmentFloors, setEquipmentFloors] = useState([]);
  const [sensorGroup, setSensorGroup] = useState([]);


// Fetch data from API when first rendering
  useEffect(() => {
    // Fetch rooms/equipment
    async function fetchData() {
      try {
        const res = await axios({
          url: apiPoint,
          method: 'get',
          headers: {
            'Access-Control-Allow-Origin': '*',
            "Content-Type": "application/json",
          },
          params: {
            id: 1,
            category: 'hospital'
          }
        })
        const temp = res.data.body.entities;

        let roomFloors = [];
        let equipmentFloors = [];

        const roomList = temp.filter((e) => e.type === "Room");
        const equipmentList = temp.filter((e) => e.type === "Device");

        roomList.forEach(room => {
          if (!roomFloors.includes(room.address.floorNumber)) {
            roomFloors.push(room.address.floorNumber);
          }
        });

        equipmentList.forEach(equipment => {
          if (!equipmentFloors.includes(equipment.address.floorNumber)) {
            equipmentFloors.push(equipment.address.floorNumber);
          }
        });

        setRoomList(roomList);
        setEquipmentList(equipmentList);
        setRoomFloors(roomFloors);
        setEquipmentFloors(equipmentFloors);

        setActiveFloors(roomFloors);
        setActiveList(roomList);

      } catch (error) {
        console.log(error);
      }
    };
    // Fetch sensorGroup data
    async function fetchSensorData() {
      try {
        const res = await axios({
          url: apiPoint,
          method: 'get',
          headers: {
            'Access-Control-Allow-Origin': '*',
            "Content-Type": "application/json",
          },
          params: {
            id: 1,
            category: 'sensorGroup'
          }
        })
        let sensorGroupData = [];
        sensorGroupData.push(res.data.body);
        if (sensorGroupData) {
          setSensorGroup(sensorGroupData);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
    fetchSensorData();

  }, []);

  // Header of tab
  const tabList = [
    "Room",
    "Equipment"
  ];

  const [tab, setTab] = useState("Room");
  const [roomDisplay, setRoomDisplay] = useState();
  const [equipmentDisplay, setEquipmentDisplay] = useState();

  const setTabDisplay = (tab) => {
    if (tab) setTab(tab);
  }

  // Set corresponding data when clicking different tab button
  useEffect(() => {
    if (tab === "Room") {
      setRoomDisplay(true);
      setEquipmentDisplay(false);
      setActiveFloors(roomFloors);
      setActiveList(roomList);
    } else if (tab === "Equipment") {
      setEquipmentDisplay(true);
      setRoomDisplay(false);
      setActiveFloors(equipmentFloors);
      setActiveList(equipmentList);
    }
  }, [tab])

  return (
    <div className="ward">
      <div className="ward-container">
        <div className="header">
          <Header tabList={tabList} setTabDisplay={setTabDisplay} selectedTab={tab}/>
        </div>
        <div className="content-inner">
          <MainContent
            type={tab}
            floors={entities}
            activeFloors={activeFloors}
            activeList={activeList}
            sensorGroup={sensorGroup}
          />
        </div>
      </div>
    </div>
  )
}

export default WardComponent;