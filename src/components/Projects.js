import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import libraryProject from "../assets/img/libraryproject.JPG";
import pharmacieproject from "../assets/img/pharmacieproject.JPG";
import adherentproject from "../assets/img/adherentproject.JPG";
import clinicproject from "../assets/img/clinicproject.JPG";
import chatgbtproject from "../assets/img/chatgbtproject.JPG";
import tripproject from "../assets/img/tripproject.JPG";
import gestabsproject from "../assets/img/gestabsproject.jpeg";



import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "management of a library",
      description: "Our Library Manager app enhances book discovery and borrowing for users and offers librarians efficient inventory and user management tools.",
      imgUrl: libraryProject,
    },
    {
      title: " pharmacy management",
      description: "Design and development of a desktop application for pharmacy management, including features for sales management, supplier management, and inventory control. Technologies used include Java, JavaFX, NetBeans, and SQL.",
      imgUrl: pharmacieproject,
    },
    {
      title: "member management",
      description: "Association Management Application is a powerful web application designed to efficiently manage association members, offering comprehensive administrative features for streamlined operations.",
      imgUrl: adherentproject,
    },
    {
      title: "Medical Clinic Management",
      description: "The Medical Clinic Management System is a project designed to facilitate the management of patients, administrators, doctors, and assistants. It utilizes React for the frontend, Laravel for the backend, and Tailwind CSS for responsive and user-friendly interface design.",
      imgUrl: clinicproject,
    },
    {
      title: "Chatbot",
      description: "The Chatbot API Integration Project leverages the GPT chatbot API to provide responsive answers to user queries. It incorporates HTML, CSS, and JavaScript for seamless integration and user interaction.",
      imgUrl: chatgbtproject,
    },
    {
      title: "Travel Management System Backend",
      description: "The Travel Management System Backend Project with Spring Boot enables administrators to manage trips for specific vehicles and suitable drivers. It provides functionalities for efficient scheduling, tracking, and coordination, ensuring optimal management of travel logistics.",
      imgUrl: tripproject,

    },
    {
        title: "student attendance management",
        description: "An Android project for student attendance management using Java and SQLite within Android Studio, facilitating efficient tracking and recording of student absences.",
        imgUrl: gestabsproject,
  
      },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Developed a web application for library management using UML, HTML, CSS, JavaScript, PHP, and SQL. Created a desktop application for pharmacy management with Java, JavaFX, NetBeans, and SQL. Built a remote-controlled and line-following robot with Arduino and C. Also developed applications for member management in a company and medical clinic management using React and Laravel.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>other projets...</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>other projets...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}