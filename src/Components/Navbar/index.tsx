import { Avatar, Dropdown, Navbar } from "flowbite-react";
import WongLog from "../../assets/images/wong_logo.jpg";
import Navbarthemen from "./theme";

function NavbarWong() {
  return (
    <Navbar fluid rounded theme={Navbarthemen}>
      <Navbar.Brand href="/">
        <img src={WongLog} className="mr-3 h-10" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}

export default NavbarWong;
