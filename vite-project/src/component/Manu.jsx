import { NavLink } from "react-router-dom";

const Manu = () => {
    return (
        <div>
<NavLink to ={"/"}>Product List</NavLink>
<NavLink to ={"/Create"}>Product Create</NavLink>
        </div>
    )
};


export default Manu;