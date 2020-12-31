import React, { Component } from 'react'
import {Table} from 'react-bootstrap'
import EmployeeService from '../services/EmployeeService'

export class ListEmployee extends Component {
    constructor(props){
        super(props)
        this.state={
            employees:[]
        }
        this.addEmployee=this.addEmployee.bind(this)
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res)=>{
            this.setState({ employees: res.data })
        })
    }

    addEmployee(){
        this.props.history.push('add-employee')
    }

    render() {
        return (
            <div>
            <button type="button" class="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
            <hr/>            
            <center>
            <h2>Employee List</h2>
            </center>
            <Table bordered hover>
                <thead>
                    <tr>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email ID</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       this.state.employees.map(
                           emp=>
                           <tr key={emp.id}>
                            <td> {emp.firstName} </td>
                            <td> {emp.lastName} </td>
                            <td> {emp.emailId} </td>
                           </tr>
                       )
                   }
                </tbody>
                </Table>
            </div>
        )
    }
}

export default ListEmployee
