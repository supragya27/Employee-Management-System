import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="/">Employee Management System</a>
                    </div>            
                </div>
            </nav>
            </div>
        )
    }
}

export default Header
