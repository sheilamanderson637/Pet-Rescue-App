import React from 'react';
import { Collapse, Col, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavDropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import "./Header.css";
import logo from "../../finding-fido-logo-horizontal.svg";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      dropdownOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    return (
      <div>
<<<<<<< HEAD
        <Navbar color="faded" light expand="md">
=======
        <Navbar color="faded" light expand="md" className="nav">
>>>>>>> master
          <NavbarBrand href="/"><img src={logo} alt="Finding Fido" className="nav-logo"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>

            <Nav className="ml-auto" navbar>
                
              <NavItem>
<<<<<<< HEAD
                <NavLink href="../pages/DogQuestionnaire" className="nav">DOGS</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="../pages/CatQuestionnaire" className="nav">CATS</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="../pages/Saved" className="nav">SAVED</NavLink>
              </NavItem>

              <NavDropdown className="nav" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle nav caret className="nav">
=======
                <NavLink href="../pages/DogQuestionnaire" className="nav-link">DOGS</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="../pages/CatQuestionnaire" className="nav-link">CATS</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="../pages/Saved" className="nav-link">SAVED</NavLink>
              </NavItem>

              <NavDropdown className="nav" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle nav caret className="nav-link">
>>>>>>> master
                LOGIN
              </DropdownToggle>
              <DropdownMenu className="drop-menu">
                <Form>
                  <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Email</Label>
                    <Col sm={10}>
                      <Input type="email" name="email" id="exampleEmail" placeholder="email" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="examplePassword" sm={2}>Password</Label>
                    <Col sm={10}>
                      <Input type="password" name="password" id="examplePassword" placeholder="password" />
                    </Col>
                  </FormGroup>
                  <div className="register">
                    Register
                  </div>
                  <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                      <Button color="warning" href="/">Submit</Button>
                    </Col>
                  </FormGroup>
                </Form>
              </DropdownMenu>
            </NavDropdown>

            </Nav>

          </Collapse>
        </Navbar>
      </div>
    );
  }
}