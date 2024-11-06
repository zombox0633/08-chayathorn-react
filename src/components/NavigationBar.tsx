
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <nav className=" fixed w-full bg-black flex justify-end py-5 px-6">
      <div className="flex gap-x-8 text-white text-xl font-bold">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/owner'}>Owner</NavLink>
      </div>
    </nav>
  );
}

export default NavigationBar;
