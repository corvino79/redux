import React from 'react';
import { Component } from 'react';
import { Table } from 'react-bootstrap'

export default class perro extends Component {
  constructor(props) {
  	console.log("show");
    super(props);
  }
  
  renderUsersList() {
    return this.props.users.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.title}</td>
          <td>{user.url}</td>
        </tr>
      )
    })
  }
  
  render() {
    return (
      <div>
        <button onClick = {() => { this.props.refresh() }}>Refresh</button>
        <h2>Users List</h2>
        <Table responsive>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            { this.renderUsersList() }
          </tbody>
        </Table>        
      </div>
    );
  }
}