import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Count from "../count";

const Home: React.FC =()=>{
  const navigate = useNavigate();

  const click = () => {
    navigate("/about");
  }
  return <div>home
    <Link to="/about">about</Link>
    <a onClick={click}>useNactive</a>
    <Count />
  </div>
}
export default Home