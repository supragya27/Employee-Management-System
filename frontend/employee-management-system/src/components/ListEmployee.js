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
        this.editEmployee=this.editEmployee.bind(this)
        this.deleteEmployee=this.deleteEmployee.bind(this)
    }

    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`)
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id)
        .then(res=>{
            this.setState({
                employees: this.state.employees.filter(e=>e.id!==id)
            })
        })
    }

    editEmployee(id){
        this.props.history.push(`/update-employee/${id}`)
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
            <button type="button" className="btn btn-success" onClick={this.addEmployee}>Add Employee</button>
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
                            <td>
                                <button onClick={()=>this.editEmployee(emp.id)} className="btn btn-info">Update</button>&nbsp;
                                <button onClick={()=>this.deleteEmployee(emp.id)} className="btn btn-danger">Delete</button>&nbsp;
                                <button onClick={()=>this.viewEmployee(emp.id)} className="btn btn-success">View</button>
                            </td>
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
