import React from 'react'
import { useNavigate } from 'react-router-dom';

const Leads = () => {
  const navigate = useNavigate();
  
  const handleRoutes = (path) => {
    navigate(path);
  };
  return (
     <button className="btn box dark-blue text-light"  onClick={() => handleRoutes('/allleads')}>
     <h6>LEADS</h6>
   </button>
  )
}

export default Leads
