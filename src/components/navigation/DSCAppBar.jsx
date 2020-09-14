import React, {Component} from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import gdgLogo from '../../assets/img/gdg_logo.png';
import {Container, Row, Col, Image} from 'react-bootstrap';
import ROUTES from '../../routes';
import {Link} from 'react-router-dom';

export default class DSCAppBar extends Component {
  // 4 is default AppBar Elevation
  render() {
    return (
      <AppBar position="fixed" color="inherit" elevation={0} className="dsc-nav">
        <Toolbar style={{marginLeft: 100, marginRight: 100}} className="p-0">
          <Container fluid className="p-0">
            <Row>
              <Col xs="1" className="p-4 dsc-brand">
                <Link to="/">
                  <Image src={gdgLogo} style={{width: '100%'}}/>
                </Link>
              </Col>
              <Col xs="2" className="my-auto p-0 dsc-brand">
                <Link
                  to="/"
                  style={{
                    fontSize: 20,
                    color: 'inherit',
                    textDecoration: 'inherit'
                  }}
                >
                  DSC MESCOE
                </Link>
              </Col>
              <Col xs="9" className="my-auto">
                <Container fluid>
                  <Row className="justify-content-end">
                    {ROUTES.filter(r => r.path !== '/').map(
                      (route, index) =>
                        index !== ROUTES.filter(r => r.path !== '/').length - 1 ? (
                          <Link
                            key={index}
                            style={{
                              fontSize: 16,
                              margin: 0,
                              padding: 0,
                              color: 'inherit',
                              textDecoration: 'inherit'
                            }}
                            className="mr-5"
                            to={route.path}
                          >
                            {route.name}
                          </Link>
                        ) : (
                          <a
                            href={route.path}
                            key={index}
                            style={{
                              fontSize: 16,
                              margin: 0,
                              padding: 0,
                              color: 'inherit',
                              textDecoration: 'inherit'
                            }}
                          >
                            {route.name}
                          </a>
                        )
                    )}
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </Toolbar>
      </AppBar>
    );
  }
}
