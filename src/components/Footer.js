import { Container,Row, Col, NavLink } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import {Bio} from "../data/Bio"

export const Footer = () => {
    return (
        <footer className="footerContainer">
            <Row>
                <div className="social-icon">
                  <a href="#"><img src={navIcon1} alt="Icon" /></a>
                  <a href="#"><img src={navIcon2} alt="Icon" /></a>
                  <a href="#"><img src={navIcon3} alt="Icon" /></a>
                </div>
                <p>Copyright 2022. All Rights Reserved</p>
            </Row>
        </footer>
    )
}