import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">Finding Fido</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>

            <Nav className="ml-auto" navbar>
                
              <NavItem>
                <NavLink href="/components/">Dogs</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/components/">Cats</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/components/">Saved</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Login</NavLink>
              </NavItem>

            </Nav>

          </Collapse>
        </Navbar>
      </div>
    );
  }
}