import React, {useContext, useState} from 'react';
import {AuthContext} from '../firebase/authProvider';
import '../styles/profile.css';
import ChangeProfileInfo from './changeProfileInfo';

const Profile = () => {
  const [showChange, setShowChange] = useState<'Password'|'Name'|'Email' | null>(null);
  const user = useContext(AuthContext)!;
  return (
    <div className="profile">
      {showChange && (
        <ChangeProfileInfo
          type={showChange}
          currentEmail={user.email!}
          currentName={user.displayName!}
          back = {()=>setShowChange(null)}
        />
      )}
      <div className="settings">
        <div className="settingsTitle">Account Settings</div>
        <div className="settingsBody">
          <div className="settingsInfo">
            <table className="infoTable">
              <tbody>
                <tr>
                  <td>Email</td>
                  <td>{user.email}</td>
                  <td className = 'change' onClick = {()=>setShowChange('Email')}>Change</td>
                </tr>
                <tr>
                  <td>Display Name</td>
                  <td>{user.displayName}</td>
                  <td className = 'change' onClick = {()=>setShowChange('Name')}>Change</td>
                </tr>
                <tr>
                  <td>Password</td>
                  <td>N/A</td>
                  <td className = 'change' onClick = {()=>setShowChange('Password')}>Change</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
