import { Avatar, Dropdown, Navbar } from "flowbite-react";
import WongLog from "../../assets/images/wong_logo.jpg";
import Navbarthemen from "./theme";
import { URL_MY_PROFILE } from "@Constants/url";

function NavbarWong() {
  return (
    <Navbar fluid rounded theme={Navbarthemen}>
      <Navbar.Brand href="/">
        <img
          src={WongLog}
          className="mr-3 h-10 md:h-16"
          alt="Flowbite React Logo"
        />
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
            <span className="block text-sm">Juan Cabrera</span>
            <span className="block truncate text-sm font-medium">
              juan@ortopediawong.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item as="a" href={URL_MY_PROFILE}>
            Mi perfil
          </Dropdown.Item>

          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#">Home</Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarWong;
