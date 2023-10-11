import { useState, useEffect } from 'react';
import {
  Container,
  Col,
  Form,
  Button,
  Card,
  Row
} from 'react-bootstrap';

// import Auth from '../utils/auth';
// import { saveBook, searchGoogleBooks } from '../utils/API';
// import { saveBookIds, getSavedBookIds } from '../utils/localStorage';
import City from '../utils/city';
import { saveLocation, searchGoogleLocations } from '../utils/API';
import { saveLocatopmIds, getSavedLocationIds } from '../utils/localStorage';

const SearchLocations = () => {
  // create state for holding returned google api data
  const [searchedLocations, setSearchedLocations] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');

  // create state to hold saved bookId values
  const [savedLocationIds, setSavedLocationIds] = useState(getSavedLocationIds());

  // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => saveLocationIds(savedLocationIds);
  });

  // create method to search for books and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
    //   const response = await searchGoogleBooks(searchInput);
    const response = await searchGoogleLocations(searchInput);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { items } = await response.json();

      const locationData = items.map((location) => ({
        locationId: location.id,
        city: location.volumeInfo.cities || ['No city to display'],
        title: location.volumeInfo.title,
        description: location.volumeInfo.description,
        image: location.volumeInfo.imageLinks?.thumbnail || '',
      }));

      setSearchedLocations(loctionData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  // create function to handle saving a book to our database
  const handleSaveLocation = async (locationId) => {
    // find the book in `searchedBooks` state by the matching id
    const locationToSave = searchedLocations.find((location) => location.locationId === locationId);

    // get token
    const token = City.loggedIn() ? City.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await saveLocation(locationToSave, token);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      // if book successfully saves to user's account, save book id to state
      setSavedLocationIds([...savedLocationIds, locationToSave.locationId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="text-light bg-dark p-5">
        <Container>
          <h1>Search for Books!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for a location'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' variant='success' size='lg'>
                  Submit Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>

      <Container>
        <h2 className='pt-5'>
          {searchedLocations.length
            ? `Viewing ${searchedLocations.length} results:`
            : 'Search for a location to begin'}
        </h2>
        <Row>
          {searchedLocations.map((location) => {
            return (
              <Col md="4" key={location.locationId}>
                <Card border='dark'>
                  {location.image ? (
                    <Card.Img src={location.image} alt={`The cover for ${location.name}`} variant='top' />
                  ) : null}
                  <Card.Body>
                    <Card.Title>{location.name}</Card.Title>
                    <p className='small'>Authors: {location.cities}</p>
                    <Card.Text>{location.description}</Card.Text>
                    {Auth.loggedIn() && (
                      <Button
                        disabled={savedLocationIds?.some((savedLocationId) => savedLocationId === location.locationId)}
                        className='btn-block btn-info'
                        onClick={() => handleSaveLocation(location.locationId)}>
                        {savedLocationIds?.some((savedLocationId) => savedlocationId === location.locationId)
                          ? 'This location has already been saved!'
                          : 'Save this Location!'}
                      </Button>
                    )}
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

export default SearchLocations;
