/*==================================================
src/components/UserProfile.js

The UserProfile component is used to demonstrate the use of Route and Link.
Note: You don't need to work on this file for the Assignment.
==================================================*/
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class UserProfile extends Component {
  render() {
    return (
      <div className="user-profile">
        <div className='content'>
          <h1>User Profile</h1>
          <hr></hr>
          <div>Username: {this.props.userName}</div>
          <div>Member Since: {this.props.memberSince}</div>
          <br/>
          <Link to="/">Return to Home</Link>
        </div>
      </div>
    );
  }
}

export default UserProfile;