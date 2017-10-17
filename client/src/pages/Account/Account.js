import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import "./Account.css";
import Profile from "../../components/ProfileForm";
import Saved from "../../components/Saved";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="master">
        <Nav tabs className="tab">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }} 
            >
              <p className="tab-txt">Profile</p>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
							<p className="tab-txt">Saved Pets</p>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} className="tab-cont">
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <Profile />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
                <Col sm="12">
                <Saved />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}