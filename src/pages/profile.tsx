import React, {useContext, useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import {AuthContext} from '../firebase/authProvider';
import {FirebaseContext} from '../firebase/provider';
import '../styles/profile.css';
import {averageRating} from '../util/averageRating';
import ChangeProfileInfo from '../components/changeProfileInfo';
import RatingTable from '../components/ratingTable';
import '../styles/viewerCard.css';
import {Button} from 'react-bootstrap';

const Profile = () => {
  const [showChange, setShowChange] = useState<
    'Password' | 'Name' | 'Email' | 'Delete' | null
  >(null);
  const user = useContext(AuthContext)!;
  const isMobile = useMediaQuery({maxWidth: 700});
  const userMovies = useContext(FirebaseContext).userMovie;
  const highestRated = userMovies.length
    ? userMovies.reduce((accumulator, current) =>
        accumulator.score > current.score ? accumulator : current
      )
    : null;
  const lowestRated = userMovies.length
    ? userMovies.reduce((accumulator, current) =>
        accumulator.score < current.score ? accumulator : current
      )
    : null;

  return (
    <div className="profile">
      {showChange && (
        <ChangeProfileInfo
          type={showChange}
          currentEmail={user.email!}
          currentName={user.displayName!}
          back={() => setShowChange(null)}
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
                  <td className="change" onClick={() => setShowChange('Email')}>
                    Change
                  </td>
                </tr>
                <tr>
                  <td>Display Name</td>
                  <td>{user.displayName}</td>
                  <td className="change" onClick={() => setShowChange('Name')}>
                    Change
                  </td>
                </tr>
                <tr>
                  <td>Password</td>
                  <td>N/A</td>
                  <td
                    className="change"
                    onClick={() => setShowChange('Password')}
                  >
                    Change
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="settings">
        <div className="settingsTitle">My Ratings</div>
        <div className="setttingsBody">
          <table className="ratingInfo">
            <tbody>
              <tr>
                <td>Movies Watched:</td>
                <td>{userMovies.length}</td>
              </tr>
              <tr>
                <td>Average Rating:</td>
                <td>
                  {userMovies.length
                    ? `${averageRating(userMovies)}/10`
                    : 'N/A'}
                </td>
              </tr>
              <tr>
                <td>Highest Rated:</td>
                <td>
                  {highestRated
                    ? `${highestRated.name} (${highestRated.score}/10)`
                    : 'N/A'}
                </td>
              </tr>
              <tr>
                <td>Lowest Rated:</td>
                <td>
                  {lowestRated
                    ? `${lowestRated.name} (${lowestRated.score}/10)`
                    : 'N/A'}
                </td>
              </tr>
            </tbody>
          </table>
          {!!userMovies.length && (
            <RatingTable
              movie
              ratings={userMovies}
              isMobile={isMobile}
              title=""
            />
          )}
        </div>
      </div>
      <div className="delete">
        <Button variant="danger" onClick={() => setShowChange('Delete')}>
          Delete Account
        </Button>
      </div>
    </div>
  );
};

export default Profile;
