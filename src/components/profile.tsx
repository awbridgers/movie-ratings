import React, { useContext } from 'react'
import {AuthContext} from '../firebase/authProvider'
import '../styles/profile.css'



const Profile = () => {
  const user = useContext(AuthContext)
  return(
    <div className = 'profile'>
      <div className = 'settings'>
        <div className = 'settingsTitle'>
          Account Settings
        </div>
        <div className = 'settingsBody'>
          <div className = 'settingsInfo'>
            <table className = 'infoTable'>
              <tbody>
                <tr>
                  <td>Email:</td><td>{user?.email}</td><td>Change</td>
                </tr>
                <tr>
                  <td>Display Name:</td><td>{user?.displayName}</td><td>Change</td>
                </tr>
                <tr>
                  <td>Password:</td><td></td><td>Change</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile