import React, { Component } from 'react'
import {Navbar} from 'react-bootstrap'
export class Header extends Component {
    render() {
        return (
            <div>
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                    <a class="navbar-brand" href="#">Employee Management System</a>
                    </div>
                    
                </div>
            </nav>
            </div>
        )
    }
}

export default Header
