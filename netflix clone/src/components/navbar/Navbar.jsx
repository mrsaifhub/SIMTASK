import { ArrowDropDown, Search ,Notifications} from "@material-ui/icons";
import { useState } from "react";
import "./navbar.scss"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset == 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className="Navbar">
      <div className="container">
        <div className="left">
          <img src="https://wallpaperaccess.com/full/6075689.png" 
          alt="" 
          />
          <span>Home Page</span>
          <span> Series</span>
          <span> Movies </span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon"/>
          <span>KID</span>
          <Notifications className="icon"/>
        {/* <img 
          src="data:image/jpeg;base64,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" 
          alt="" 
        /> */}
        <img 
        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTZEtd3b8wtkx0ked3QeYveZlBDYc9TUG9Sdr9MpxnxLvAQEg8h" 
        alt="" 
        />
        <div className="profile">
        <ArrowDropDown className="icon"/>
        <div className="options">
          <span>settings</span>
          <span></span>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar;