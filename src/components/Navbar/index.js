
import { Container, Navbar, NavbarBrand, Collapse, Row, Col, NavbarToggler, Nav, NavItem, NavLink,  } from 'reactstrap'
import myLogo from '../../assets/img/logo.jpg';

const NavMenu = props => {
    return (
        <Navbar className="nav">
            <Container>
                <NavbarBrand>
                    <img src={myLogo} alt="my-logo" className="my-logo"/>
                </NavbarBrand>

                <Collapse navbar>
                    <div className="navbar-collapse-header">
                        <Row>
                            <Col className="collapse-close text-right" xs="12">
                                <NavbarToggler>
                                    <i className="tim-icons icon-simple-remove" />
                                </NavbarToggler>
                            </Col>
                        </Row>
                    </div>

                    <Nav className="middle-menu-sec" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem className={''}>
                            <NavLink>Service</NavLink>
                        </NavItem>
                        <NavItem className={''}>
                            <NavLink>Industry</NavLink>
                        </NavItem>
                        <NavItem className={''}>
                            <NavLink>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/blog">Blog</NavLink>
                        </NavItem>
                        <NavItem className="hambargar-show">
                            <NavLink>E-Brochure</NavLink>
                        </NavItem>
                        <NavItem className="hambargar-show">
                            <NavLink>Let's Discuss</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
}

export default NavMenu