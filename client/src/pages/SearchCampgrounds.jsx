import { useState, useEffect } from 'react';
import { useLazyQuery, useQuery, useMutation } from '@apollo/client';
import { QUERY_CAMPS, QUERY_ME } from '../utils/queries';
import { ADD_CAMPGROUND } from '../utils/mutation';
import {
  Container,
  Col,
  Form,
  Button,
  Card,
  Row
} from 'react-bootstrap';

import Auth from '../utils/auth';
import { saveCampgrounds, getCamps } from '../utils/API';
import { saveCampIds, getSavedCampIds } from '../utils/localStorage';


const SearchCampgrounds = () => {
  // create state for holding returned google api data
  const [searchedCampgrounds, setSearchedCampgrounds] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');

  // create state to hold saved bookId values
  const [savedCampIds, setSavedCampIds] = useState(getSavedCampIds());
  const [getCampgrounds, { loading, data }] = useLazyQuery(QUERY_CAMPS); // Use useLazyQuery
  const [userId, setUserId] = useState('')
  const {userLoading, error, userData} = useQuery(QUERY_ME, {
    onCompleted: (data) => {
      setUserId(data.me._id)
    }
  })
  const [addCampground, {addCampgroundError}] = useMutation(ADD_CAMPGROUND)
  useEffect(() => {
    console.log(userId)
  }, [userId])
  // set up useEffect hook to save `savedCampIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => saveCampIds(savedCampIds);
  });

  // create method to search for campgrounds and set state on form submit
  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   if (!searchInput) {
  //     return false;
  //   }

  //   try {
  //     const response = await getCamps(searchInput)
  //     .then ((response) =>{

  //       if (!response.ok) {
  //         throw new Error('something went wrong!');
  //       }
  //      else{
  //         return response.json()
  //       }
  //     })
  //     .then((data) => {
  //       console.log("Data object: ", data)
  //       console.log(data.data);
        
  //       const items = (data.data)
  //        /* for(let i in data) { 
  //           items.push([i,data[i]]); 
  //        };  */

  //      console.log("items array: ", items);
          
  //       const campData = items.map((camp) => ({
  //         campId: camp.id,
  //         URL: camp.url,
  //         name: camp.name,
  //         description: camp.description,
  //         reservationURL: camp.reservationUrl,
  //         fees: camp.fees[0].cost,
  //         images: camp.images[0]?.url,
  //       }));

  //       console.log(campData);

  //       setSearchedCampgrounds(campData);
  //       setSearchInput('');
  //     })
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  const handleFormSubmit = async(event) => {
    console.log("submit")
    event.preventDefault()
    getCampgrounds({
      variables: {
        searchString: searchInput
      },
      onCompleted: (data) => {
        console.log(data)
        setSearchedCampgrounds(data.getCamps)
      }
    })

  }

  // create function to handle saving a campground to our database
  const handleSaveCampgrounds = async (campData) => {
    console.log(campData)
    addCampground({
      variables:{
        campgroundData:campData
      }
      //campgroundData:campData
    })

  };

  return (
    <>
      <div fluid className="text-light bg-primary p-5">
        <Container>
          <h2>Search for Campgrounds!</h2>
          <Form onSubmit={handleFormSubmit}>
            <Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for a campground'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' variant='warning' size='lg'>
                  Submit Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>

      <Container>
        <h2 className='pt-5'>
          {searchedCampgrounds.length
            ? `Viewing ${searchedCampgrounds.length} results:`
            : 'Search for a campground to begin'}
        </h2>
        <Row>
          {searchedCampgrounds.map((camp) => {
            const campData = {
              campId: camp.Id,
              URL: camp.URL,
              name: camp.name,
              description: camp.description,
              reservationURL: camp.reservationURL,
              fees: camp.fees,
              images: camp.images,
              userId: userId
            }
            return (
              <Col md="4" key={camp.campId}>
                <Card border='dark'>
                  {camp.images ? (
                    <Card.Img src={camp.images} alt={`The image for ${camp.name}`} variant='top' />
                  ) : null}
                  <Card.Body>
                  <Card.Title>{camp.name}</Card.Title>
                    <p>URL: <a href={camp.URL}>{camp.URL}</a></p>
                    <Card.Text>{camp.description}</Card.Text>
                    <Card.Text> <a href={camp.reservationURL}>Reservation</a></Card.Text>
                    <Card.Text> <b>Fees: </b> ${camp.fees}</Card.Text>
                    {Auth.loggedIn() && (
                      <Button
                        disabled={savedCampIds?.some((savedCampId) => savedCampId === camp.campId)}
                        className='btn-block btn-info'
                        onClick={() => handleSaveCampgrounds(campData)}>
                        {savedCampIds?.some((savedCampId) => savedCampId === camp.campId)
                          ? 'This campground has already been saved!'
                          : 'Save this Campground!'}
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

export default SearchCampgrounds;


















