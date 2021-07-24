import React, {useContext, useState} from 'react';
import { useMediaQuery } from 'react-responsive';
import StarRatings from 'react-star-ratings';
import {AuthContext} from '../firebase/authProvider';
import { FirebaseContext } from '../firebase/provider';
import '../styles/profile.css';
import { averageRating } from '../util/averageRating';
import ChangeProfileInfo from './changeProfileInfo';
import RatingTable from './ratingTable';
import '../styles/viewerCard.css'

const Profile = () => {
  const [showChange, setShowChange] = useState<'Password'|'Name'|'Email' | null>(null);
  const user = useContext(AuthContext)!;
  const isMobile = useMediaQuery({maxWidth: 700})
  const userMovies = useContext(FirebaseContext).userMovie;
  const highestRated = userMovies.reduce((accumulator, current)=>accumulator.score > current.score ? accumulator : current);
  const lowestRated = userMovies.reduce((accumulator, current)=>accumulator.score < current.score ? accumulator : current);

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
      <div className = 'settings'>
        <div className = 'settingsTitle'>My Ratings</div>
        <div className = 'setttingsBody'>
       
          <RatingTable movie ratings={userMovies} isMobile = {isMobile} title = ''/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
