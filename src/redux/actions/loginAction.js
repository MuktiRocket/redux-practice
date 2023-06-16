const url = 'http://localhost:5000/api/user/login';

export const LoginApi = (data, dispatch) => {
  try {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Additional headers if required
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('user', JSON.stringify(data));
        sessionStorage.setItem('token', data.token);
        dispatch(login(data));
      })
      .catch((error) => {
        console.log(error.message);
      });
  } catch (error) {
    console.log(error.message);
  }
};
export const getCity = (data, dispatch) => {
  try {
    const accessToken = sessionStorage.getItem('token');
    const param = data;
    fetch(`http://localhost:5000/api/user/get-city/${param}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(city(data));
      })
      .catch((error) => {
        console.log(error.message);
      });
  } catch (error) {
    console.log(error.message);
  }
};

export const login = (data) => {
  return {
    type: 'LOGIN',
    payload: data,
  };
};

export const city = (data) => {
  return {
    type: 'CITY',
    payload: data,
  };
};
