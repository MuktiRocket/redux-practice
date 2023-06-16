const PrivateRoute = ({ children }) => {
  const token = sessionStorage.getItem('token');
  return token ? children : 'Unauthenticated';
};

export default PrivateRoute;
