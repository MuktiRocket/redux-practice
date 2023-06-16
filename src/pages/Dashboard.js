import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCity } from '../redux/actions/loginAction';

const Dashboard = () => {
  const user = localStorage.getItem('user');
  const userData = JSON.parse(user);
  const dispatch = useDispatch();
  const city = useSelector((state) => state.getCityData);
  useEffect(() => {
    getCity(userData.id, dispatch);
  }, []);
  return (
    <div>
      <div>
        id: <b>{userData.id}</b>
      </div>
      <div>
        name: <b>{userData.name}</b>
      </div>
      <div>
        age: <b>{userData.age}</b>
      </div>
      {/* <div>{mydata?mydata.map((data) => data): null}</div> */}
    </div>
  );
};

export default Dashboard;
