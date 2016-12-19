import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { showUsers, refreshUsers } from '../actions'
import Sample from './sample'

class App extends Component {
  
  componentWillMount() {
    this.props.showUsers()
  }
  
  render() {
    return (
      <Sample users={ this.props.Users } refresh={()=>this.props.refreshUsers()} />
    );
  }
}

function mapStateToProps(state) {
  return {
    Users: state.Users1.list
  }
}

function mapDispathToProps(dispatch) {
  return {
    showUsers: () => {
        dispatch(showUsers())
    },
    refreshUsers: () => {
        dispatch(refreshUsers())
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(App)