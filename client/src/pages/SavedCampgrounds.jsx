import React, { useState, useEffect } from 'react';
import {
  Container,
  Card,
  Button,
  Row,
  Col
} from 'react-bootstrap';

import { getMe, deleteCamp } from '../utils/API';
import Auth from '../utils/auth';
import { removeCampId } from '../utils/localStorage';


const SavedCampgrounds = () => {
  const [userData, setUserData] = useState({});

  // use this to determine if `useEffect()` hook needs to run again
  const userDataLength = Object.keys(userData).length;

  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
          return false;
        }

        const response = await getMe(token);

        if (!response.ok) {
          throw new Error('something went wrong!');
        }

        const user = await response.json();
        setUserData(user);
      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, [userDataLength]);

  // create function that accepts the campgrounds's mongo _id value as param and deletes the campground from the database
  const handleDeleteCampground = async (campId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await deleteCamp(campId, token);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const updatedUser = await response.json();
      setUserData(updatedUser);
      // upon success, remove camp's id from localStorage
      removeCampId(campId);
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (!userDataLength) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <div fluid className="text-light bg-dark p-5">
        <Container>
          <h1>Viewing saved campgrounds!</h1>
        </Container>
      </div>
      <Container>
        <h2 className='pt-5'>
          {userData.savedCampgrounds.length
            ? `Viewing ${userData.savedCampgrounds.length} saved ${userData.savedCampgrounds.length === 1 ? 'campground' : 'camps'}:`
            : 'You have no saved campgrounds!'}
        </h2>
        <Row>
          {userData.savedCampgrounds.map((campground) => {
            return (
              <Col md="4">
                <Card key={campground.campId} border='dark'>
                  {campground.image ? <Card.Img src={campground.image} alt={`The cover for ${campground.name}`} variant='top' /> : null}
                  <Card.Body>
                    <Card.Title>{campground.name}</Card.Title>
                    <p className='small'>City: {campground.city}</p>
                    <Card.Text>{campground.description}</Card.Text>
                    <Button className='btn-block btn-danger' onClick={() => handleDeleteCampground(campground.campId)}>
                      Delete this Campground!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default SavedCampgrounds;
