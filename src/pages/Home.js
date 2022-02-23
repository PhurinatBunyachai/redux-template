import React, { Component } from 'react'
import { connectRedux } from '../utils'
import {
  getUserListAction,
  updateSpecificListAction,
  clearListAction
} from '../actions/listAction'

const mapState = state => {
  return {
    users: state.list.users,
  }
}

const actions = {
  getUserListAction,
  updateSpecificListAction,
  clearListAction
}

class Home extends Component {
  componentDidMount = async() => {
    const { actions:{getUserListAction}} = this.props
    await getUserListAction()
  }
  getUser = async() => { 
    const { actions:{getUserListAction}} = this.props
    await getUserListAction()
  }

  clearUser = async() => { 
    const { actions:{clearListAction}} = this.props
    await clearListAction('users')
  }

  render = () => {
    const { users } = this.props
    return (
      <>
        <button onClick={() => this.getUser()}>fetch data form redux</button>
        <button onClick={() => this.clearUser()}>clear data in redux</button>
        <ul>
          {users && 
            users.map((user, index) => (
              <li key={user.id}>{`name: ${user.name} email: ${user.email}`}</li>
            ))
          }
          {!users && <div>ไม่พบ user</div>}
        </ul>
      </>
    )
  }
}

export default connectRedux(mapState, actions)(Home)