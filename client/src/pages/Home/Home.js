import React from "react";
import { Container, Row, Col } from 'reactstrap';
import "./Home.css";
import bkgImg from "../../cat-and-dog.jpg";
import logo from "../../finding-fido-logo.svg";
import dogIcon from "../../dog-icon.png";
import catIcon from "../../cat-icon.png";

const Home = () =>   
  <Container className="bord-box background">
		<div className="logo-btn_Cont">
			<Row>
				<Col><img src={logo} className="logo" alt="Finding Fido" /></Col>
			</Row>
			<Row>
				<Col>
					<p className="text-pet">Which pet are you looking for?</p>
				</Col>
			</Row>
			<Row>
				<Col></Col>
				<Col>
					<div className="bord-rad-2 disp-inlineblock marg-10">
						<a href="/"><img src={dogIcon} className="icon" alt="Dog Icon" /></a>
					</div>
				</Col>
				<Col>
					<div className="bord-rad-2 disp-inlineblock marg-10">
						<a href="/"><img src={catIcon} className="icon" alt="Cat Icon" /></a>
					</div>
					</Col>
				<Col></Col>
			</Row>
		</div>
	</Container>

	export default Home;