/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href="https://www.creative-tim.com?ref=nukr-default-footer"
                  target="_blank"
                >
                  mi Argentina
                </a>
              </li>
              <li>
                <a
                  href="http://presentation.creative-tim.com?ref=nukr-default-footer"
                  target="_blank"
                >
                  Sitio Oficial
                </a>
              </li>
              <li>
                <a
                  href="http://blog.creative-tim.com?ref=nukr-default-footer"
                  target="_blank"
                >
                  Ultimas Novedades
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, {" "}
            <a
              href="https://www.invisionapp.com?ref=nukr-default-footer"
              target="_blank"
            >
              Ministerio de Obras Publicas
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
