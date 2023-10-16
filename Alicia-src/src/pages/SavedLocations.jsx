import { useState, useEffect } from 'react';
import {
  Container,
  Card,
  Button,
  Row,
  Col
} from 'react-bootstrap';

import { getMe, deleteLocation } from '../utils/API';
import City from '../utils/city';
import { removeLocationId } from '../utils/localStorage';

const SavedLocations = () => {
  const [userData, setUserData] = useState({});

  // use this to determine if `useEffect()` hook needs to run again
  const userDataLength = Object.keys(userData).length;

  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = City.loggedIn() ? City.getToken() : null;

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

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteBook = async (bookId) => {
    const token = City.loggedIn() ? City.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await deleteLocation(locationId, token);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const updatedUser = await response.json();
      setUserData(updatedUser);
      // upon success, remove book's id from localStorage
      removeLocationId(locationId);
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
      <div fluid className="text-light bg-info p-5">
        <Container>
          <h1>Viewing saved locations!</h1>
        </Container>
      </div>
      <Container>
        <h2 className='pt-5'>
          {userData.savedLocations.length
            ? `Viewing ${userData.savedLocations.length} saved ${userData.savedLocations.length === 1 ? 'location' : 'locations'}:`
            : 'You have no saved books!'}
        </h2>
        <Row>
          {userData.savedLocations.map((location) => {
            return (
              <Col md="4">
                <Card key={location.locationId} border='dark'>
                  {location.image ? <Card.Img src={location.image} alt={`The cover for ${location.name}`} variant='top' /> : null}
                  <Card.Body>
                    <Card.Title>{location.name}</Card.Title>
                    <p className='small'>Cities: {location.cities}</p>
                    <Card.Text>{location.description}</Card.Text>
                    <Button className='btn-block btn-danger' onClick={() => handleDeleteLocation(location.locationId)}>
                      Delete this Location!
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

export default SavedLocations;
