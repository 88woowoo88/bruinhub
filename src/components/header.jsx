import React, { Component } from 'react';
import {Nav , NavItem, Navbar, Badge, Form, FormControl, Button, Container} from 'react-bootstrap';
import Star from '../icons/star.svg'
import Person from '../icons/person.svg'
import Logo from '../icons/logo.png'
import './header.css'


class Header extends React.Component{
    render(){
        return(
            <Navbar collapseOnSelect className="py-md-0" expand="lg" bg="dark" variant="dark">
                <div className="container">
                    <Navbar.Brand className="col-2 m-2" href="/">
                        <img className="m-2" src={Logo} width={25} height={25}/>
                        BruinHub
                    </Navbar.Brand>
                    <Nav className="col-8">
                        <Form className="search-box">
                            <FormControl type="text" placeholder="Search" className="m-2" width={500}/>
                        </Form>
                    </Nav>
                    <Nav className="col-2">
                        <Button type="button" className="btn m-2" width={25} height={25}th>
                            <img src={Star} width={25} height={25}/>
                        </Button>
                        <Button type="button" className="btn m-2" width={25} height={25}>
                            <img src={Person} width={25} height={25}/>
                        </Button>
                    </Nav>
                </div>
            </Navbar>
        );
    }
}

export default Header;