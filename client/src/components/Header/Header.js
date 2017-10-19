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
    };

    this.loginToggle = this.loginToggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  loginToggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md" className="nav">
          <NavbarBrand href="/"><img src={logo} alt="Finding Fido" className="nav-logo"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>

            <Nav className="ml-auto" navbar>
                
              <NavItem>
                <NavLink href="/Dogform" className="nav-link">DOGS</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/Catform" className="nav-link">CATS</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/account" className="nav-link">ACCOUNT</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/registration" className="nav-link">REGISTER</NavLink>
              </NavItem>

              <NavDropdown className="nav" isOpen={this.state.dropdownOpen} toggle={this.loginToggle}>
                <DropdownToggle nav caret className="nav-link">
                LOGIN
                </DropdownToggle>
                <DropdownMenu className="drop-menu dropdown-menu-right">
                  <Form>
                    <FormGroup row>
                      <Label className="login-text" for="email" sm={2}>Email</Label>
                      <Col sm={10}>
                        <Input className="login-text" type="email" name="email" id="exampleEmail" placeholder="email" />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label className="login-text" for="password" sm={2}>Password</Label>
                      <Col sm={10}>
                        <Input type="password" name="password" id="examplePassword" placeholder="password" />
                      </Col>
                    </FormGroup>
                    <div className="register">
                    <a href="/registration">Register</a>
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