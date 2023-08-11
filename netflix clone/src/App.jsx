import { useState } from "react";
import "./app.scss"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";

// export default App;
const App = () => {
    // return <Home/>;

    const [isregister,setIsRegister] = useState("Login");



    if(isregister==="Login") return <Login handler={setIsRegister}/>;
    if(isregister==="Register") return <Register handler={setIsRegister}/>;
    if(isregister==="Home") return <Home handler={setIsRegister}/>;
    if(isregister==="Watch") return <Watch handler={setIsRegister}/>;
    

};
export default App
