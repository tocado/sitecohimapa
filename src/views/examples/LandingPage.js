import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function LandingPage() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">¿Quienes Somos?</h2>
                <h5 className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec leo nulla. Duis pellentesque risus vel ex consectetur porta. Nulla at ante et neque mollis ornare in eget metus. Nunc sed felis ut nulla consectetur luctus id nec libero. Aliquam odio urna, consectetur quis tristique quis, dictum sodales sapien. Vestibulum malesuada purus sed tempus egestas. Aenean laoreet ipsum lobortis odio egestas, id tincidunt ligula tempus. Aliquam ornare volutpat accumsan. Donec rhoncus venenatis risus mattis faucibus. Proin id quam et urna hendrerit vehicula at non quam. Mauris rutrum justo ac justo convallis, id tincidunt orci imperdiet. Sed at neque vel nibh fermentum posuere vitae ut magna. Aliquam sed nisi arcu. Quisque justo libero, efficitur laoreet faucibus gravida, mattis eget mi. Nunc ut lorem erat. Integer eu ultricies magna, sed tincidunt nunc.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/login.jpg") + ")"
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec leo nulla. Duis pellentesque risus vel ex consectetur porta. Nulla at ante et neque mollis" <br></br>
                      <br></br>
                      <small>-NOAA</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg3.jpg") + ")"
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg1.jpg") + ")"
                    }}
                  ></div>
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec leo nulla. Duis pellentesque risus vel ex
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac ipsum in erat luctus eleifend. Sed luctus at metus eget scelerisque. Phasellus bibendum risus quam, non porttitor nibh tempor ac. Curabitur id odio blandit, dignissim quam sit amet, dapibus mauris. Vestibulum suscipit ligula metus, eget efficitur lectus egestas id. Fusce venenatis velit eu euismod facilisis. Fusce in consectetur orci, in mollis mauris. Phasellus rhoncus turpis nibh, quis malesuada metus pulvinar.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac ipsum in erat luctus eleifend. Sed luctus at metus eget scelerisque.
                    Phasellus bibendum risus quam, non porttitor nibh tempor ac. Curabitur id odio blandit, dignissim quam sit amet, dapibus mauris. Vestibulum
                    suscipit ligula metus, eget efficitur lectus egestas id. Fusce venenatis velit eu euismod facilisis. Fusce in consectetur orci, in mollis
                    mauris. Phasellus rhoncus turpis nibh, quis malesuada metus pulvinar.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac ipsum in erat luctus eleifend. Sed luctus at metus eget scelerisque. Phasellus bibendum risus quam, non porttitor nibh tempor ac. Curabitur id odio blandit, dignissim quam sit amet, dapibus mauris. Vestibulum suscipit ligula metus, eget efficitur lectus egestas id. Fusce venenatis velit eu euismod facilisis. Fusce in consectetur orci, in mollis mauris. Phasellus rhoncus turpis nibh, quis malesuada metus pulvinar.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Nuestros Funcionarios</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/kato.jpg")}
                    ></img>
                    <h4 className="title">Guillermo Jelinski</h4>
                    <p className="category text-info">Representante Titular</p>
                    <p className="description">
                      Subsecretario de Recursos Hídricos, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac ipsum in erat luctus eleifend.
                      <br /><a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Mas Info
                      </a>
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/ryan.jpg")}
                    ></img>
                    <h4 className="title">Sebastián Alvarez Hayes</h4>
                    <p className="category text-info">Representante Alterno</p>
                    <p className="description">
                      ligula metus, eget efficitur lectus egestas id. Fusce venenatis velit eu euismod facilisis. Fusce in consectetur orci, in mollis
                      <br /><a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Mas Info
                      </a>
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/eva.jpg")}
                    ></img>
                    <h4 className="title">Florencia Zarauz</h4>
                    <p className="category text-info">Secretaria del Agua</p>
                    <p className="description">
                      erat luctus eleifend. Sed luctus at metus eget scelerisque.
                      Phasellus bibendum risus quam
                      <br /><a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Mas Info
                      </a>
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-youtube"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
