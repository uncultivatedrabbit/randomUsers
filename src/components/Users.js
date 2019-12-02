import React, { Component } from 'react'
import axios from 'axios'
import User from './User'
import InfiniteScroll from 'react-infinite-scroll-component'


export default class Users extends Component {
  state = {
    users: [],
    count: 32,
  }
  componentDidMount() {
    const { count } = this.state
    axios.get(`https://randomuser.me/api/?results=${count}`)
      .then(res => this.setState({ users: res.data.results}))
  }
  fetchUsers = () => {
    const { count } = this.state
    this.setState({count: this.state.count + count})
    axios.get(`https://randomuser.me/api/?results=${count}`)
      .then(res => this.setState({ users: this.state.users.concat(res.data.results)}))
  }
  render() {
    return (
      <InfiniteScroll
          dataLength={this.state.count}
          next={this.fetchUsers}
          hasMore={true}
          loader={<img alt="User profile" style={{"width": "50px"}} src={ require("../images/spin.png")}/>}
        >
        <div id="cards" className="container my-5">
          <h1 className="display-1">USERS:</h1>
          <div className="row justify-content-center">
            {this.state.users.map(user => (
                <User key={user.login.uuid} user={user}/>
              ))}
          </div>
        </div>
      </InfiniteScroll>
    )
  }
}
