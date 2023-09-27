import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="flex-1">
    
  <div className="flex items-center">
  <img src="https://i.ibb.co/sPpmn46/Logo.png" alt="Logo" className="w-18 h-12 mr-2" />

</div>


  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
     
      <li><NavLink to="/Home">Home</NavLink></li>
      <li><NavLink to="/abc">Donation</NavLink></li>
      <li><NavLink to="/Statistics">Statistics</NavLink></li>
      
      
    </ul>
  </div>
</div>
    );
};

export default NavBar;