import React, {useContext, useState} from 'react';
import {Alert, Button, Col, Form, Row} from 'react-bootstrap';
import {db} from '../firebase/config';
import {AuthContext} from '../firebase/authProvider';
import '../styles/login.css';
import {IRating} from '../types';
import {FirebaseContext} from '../firebase/provider';

interface Props {
  title: string;
  back: () => void;
  userScore: IRating | undefined;
  deleteRating: boolean;
}

const AddRating = ({title, back, userScore, deleteRating}: Props) => {
  const [newRating, setNewRating] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  const user = useContext(AuthContext)!;
  const displayName = useContext(FirebaseContext).displayName!; //user must exist to access this page
  const uid = user.uid;
  const type = deleteRating ? 'Delete' : userScore ? 'Edit' : 'Add';
 
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //reset the error
    setError('');
    const ratingNumber = parseFloat(newRating);
    if (!isNaN(ratingNumber) && ratingNumber >= 0 && ratingNumber <= 10) {
      //add the rating to both the movie and the user
      let updates: {[key: string]: any} = {};
      updates[`movies/${title}/ratings/${uid}`] = {
        displayName: displayName,
        score: Math.round(ratingNumber * 10) / 10,
      };
      updates[`users/${uid}/ratings/${title}`] =
        Math.round(ratingNumber * 10) / 10;
      db.ref()
        .update(updates)
        .then(() => {
          //display success message
          setSuccess(true);
        })
        .catch((e:Error) => setError(e.message));
    } else {
      setError('Please enter a number between 0-10.');
    }
  };
  const remove = () =>{
    let deletes:{[key:string]: any} = {};
    deletes[`movies/${title}/ratings/${uid}`] = null;
    deletes[`users/${uid}/ratings/${title}`] = null;
    db.ref().update(deletes).then(()=>{
      setSuccess(true)
    }).catch((e:Error)=>console.log(e.message));
  }
  if (success) {
    return (
      <div className="logIn">
        <Alert className="logOutBox" variant="success">
          <Alert.Heading>Success!</Alert.Heading>
          <p>Your rating has been {`${deleteRating ? 'deleted' : 'added'}`}!</p>
          <Button variant="outline-success" onClick={back}>
            Close
          </Button>
        </Alert>
      </div>
    );
  }
  return (
    <div className="logIn" style={{color: 'white'}}>
      <div className="logInBox">
        <div className="logInTitle">
          <h2>{type} Rating</h2>
        </div>
        <div style={{marginBottom: '15px'}}>
          {!deleteRating && <>{type} your rating for <i>{title}</i> (0-10).</>}
          {deleteRating && <>Are you sure you want to delete your rating for <i>{title}</i>?</>}
        </div>
        <Form onSubmit={submit}>
          {userScore && (
            <Form.Group as={Row} controlId="formCurrentScore">
              <Form.Label column>Current Rating:</Form.Label>
              <Col xs={7}>
                <Form.Control
                  style={{color: 'white'}}
                  plaintext
                  readOnly
                  defaultValue={`${userScore.score}/10`}
                ></Form.Control>
              </Col>
            </Form.Group>
          )}

          {!deleteRating && (
            <Form.Group as={Row} controlId="formrating">
              <Col xs={3}>
                <Form.Label>Rating: </Form.Label>
              </Col>
              <Col xs={5}>
                <Form.Control
                  type="number"
                  step = {0.1}
                  placeholder="0-10"
                  value={newRating}
                  onChange={(e) => setNewRating(e.target.value)}
                  isInvalid={error !== ''}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {error}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
          )}
          <div className="logInButtons" data-testid = 'buttons'>
            {!deleteRating && <Button variant="primary" type="submit" id="submitButton">
              Submit
            </Button>}
            {deleteRating && <Button variant = 'warning' onClick = {remove}>Delete</Button>}
            <Button variant="danger" id="backButton" onClick={back}>
              Back
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddRating;
