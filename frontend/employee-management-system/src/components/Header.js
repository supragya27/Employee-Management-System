import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">Employee Management System</a>
                    </div>            
                </div>
            </nav>
            </div>
        )
    }
}

export default Header
