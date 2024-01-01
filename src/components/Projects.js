import { Container, Row, Col, Tab, Nav, NavItem, NavLink } from "react-bootstrap";
import { ProjectCard } from "./ProjectsCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ]

    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                       <h2>Projects</h2>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                       <Tab.Container id="projects-tabs" defaultActiveKey="first">
                       <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                         <NavItem>
                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                         </NavItem>
                         <NavItem>
                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                         </NavItem>
                         <NavItem>
                            <Nav.Link eventKey="third">Tab 3</Nav.Link>
                         </NavItem>
                       </Nav>
                       <Tab.Content>
                          <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((projects, index) => {
                                        return (
                                            <ProjectCard 
                                              key={index}
                                              {...projects}/>
                                        )
                                    })
                                }
                            </Row>
                          </Tab.Pane>
                          <Tab.Pane eventKey="second">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                          </Tab.Pane>
                          <Tab.Pane eventKey="third">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                          </Tab.Pane>
                       </Tab.Content>
                       </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}