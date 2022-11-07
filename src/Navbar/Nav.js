import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from '../Navbar/logo.png';
import Logo2 from '../Navbar/logo2.png';

import user from '../Navbar/user.png';
import cart from '../Navbar/cart.png';
import support from '../Navbar/support.png';
import wishlist from '../Navbar/wishlist.png';

import '../Navbar/Nav.css';

function NavBar() {
    return (
        <Navbar className='Navbar top-bar' bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="https://nintendo.com" target="_blank"><img className='logo' src={Logo} alt="Nintendo Logo"></img></Navbar.Brand>
                
                <div className='searchPlacer'>
                    <Form className='search'>
                        <Form.Control
                            type='search'
                            className='searchBox'
                            aria-label='Search'
                            style={{border: '1px solid #E4000F', boxShadow: 'none'}}
                        />
                        <Button 
                            className='searchButton' 
                            variant='outline-danger' 
                            size='lg'
                            style={{boxShadow: 'none'}}
                        >
                            Search
                        </Button>
                    </Form>
                </div>

                <img className='user' src={user} />
                <img className='user' src={wishlist} />
                <img className='user' src={cart} />
                <img className='user' src={support} />

                <img className='logo2' src={Logo2} alt='Nintend eShop Logo'/>
            </Container>
        </Navbar>
    );
}

export default NavBar;