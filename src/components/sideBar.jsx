import React from 'react';
import {Nav , NavItem, Navbar, Badge, Form, FormControl, Button, Container} from 'react-bootstrap';
import './sideBar.css'

class SideBar extends React.Component{
    render(){
        return(
            <div>
                <Nav defaultActiveKey="/home" className="flex-column">
                <div className="newsfeed">
                    <Nav.Link href="/home">Newsfeed</Nav.Link>
                </div>
                <div className="courses">
                    <Nav.Link eventKey="link-1">My Courses</Nav.Link>
                </div>
            </Nav>
            </div>
           
        );
    }
}

export default SideBar;