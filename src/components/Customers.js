import React from 'react'
import { useNavigate } from 'react-router-dom';
const Customers = () => {
  const navigate = useNavigate();
  
  const handleRoutes = (path) => {
    navigate(path);
  };

  return (
    <button className="btn box bg-primary text-light"  onClick={() => handleRoutes('/allusers')}>
      <h6>CUSTOMERS</h6>
    </button>
  )
}

export default Customers;
