import React from 'react';
import {Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Logo from '.././images/logo.png';


const Header = () => {

  return(
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <img src={Logo} alt={'Logo'} width={'70px'} height={'50px'}/> 
          <Navbar.Brand href="/">Tersen</Navbar.Brand>
          <Nav className="gap-2">
          <Link to="/Login" eventKey={2} className="btn btn-light text-black">Login</Link>
          <Link to="/Register" className="btn btn-primary">Register</Link>
        </Nav>
        </Container>
      </Navbar>
    </div>
    
  );
}

  

export default Header;