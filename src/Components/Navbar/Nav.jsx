import React, { useContext } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { authContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const { user, logOut } = useContext(authContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className=" lg:px-16 py-2 bg-[#F3F3F3]">
      <Navbar fluid rounded className="bg-[#F3F3F3]">
        <Navbar.Brand href="https://flowbite-react.com">
          <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="" />

          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            <img className="w-[130px] lg:w-[180px]" src="https://demo.creativemox.com/beclean/wp-content/uploads/sites/2/2023/09/Logo_BeClean_1.png" alt="" />
          </span>
        </Navbar.Brand>

        <div className="flex gap-4 md:order-2">
          {user && (
            <Dropdown className="bg-[#2E856E] " label="Dashboard" dismissOnClick={false}>
              <Dropdown.Item>
                <Link to='/myService'><button>My Service</button></Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to='/addService'><button>Add Service</button></Link>
              </Dropdown.Item>
              <Dropdown.Item>My Schedules</Dropdown.Item>
            </Dropdown>
          )}

          {user?.email ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={<Avatar alt="User settings" img={user?.photoURL} rounded />}
            >
              <Dropdown.Header>
                <span className="block text-sm">{user?.displayName}</span>
                <span className="block truncate text-sm font-medium">
                  {user?.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item>
                <button onClick={handleLogOut}>Sign out</button>
              </Dropdown.Item>
            </Dropdown>
          ) : (
            <Link to="/login">
              <button onClick={handleLogOut} className="bg-[#2E856E] text-white py-2 px-3 lg:px-5 font-semibold rounded-md ">
                Login
              </button>
            </Link>
          )}

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link 
           >
          <NavLink className={({isActive}) => isActive? 'text-[#2E856E] underline block lg:inline px-3 py-2 rounded-md font-semibold' : ''} to='/'><button className="font-bold text-[17px]">Home</button></NavLink>
          </Navbar.Link>
          
          <Navbar.Link href="#"><NavLink className={({isActive}) => isActive? 'bg-red-200 block lg:inline px-3 py-2 rounded-md font-semibold' : ''} to='/services'><button className="font-bold text-[17px]">Services</button></NavLink></Navbar.Link>
          <Navbar.Link href="#"><NavLink className={({isActive}) => isActive? 'bg-red-200 block lg:inline px-3 py-2 rounded-md font-semibold' : ''} to='/about'><button className="font-bold text-[17px]">About</button></NavLink></Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
