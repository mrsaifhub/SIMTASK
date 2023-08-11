// import { AcUnit } from "@material-ui/icons"
import "./home.scss"
import Navbar from "../../components/navbar/Navbar"
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";

function Home(props) {
  return (
    <div className='home'>
        {/* <AcUnit/> */}
        <Navbar/>
        <Featured handler={props.handler}/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
    </div>
  );
};

export default Home;
