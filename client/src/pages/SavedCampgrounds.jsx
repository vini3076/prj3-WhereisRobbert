import { useQuery, useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { QUERY_ME } from "../utils/queries";
import { REMOVE_CAMPGROUND } from "../utils/mutation";

const SavedCampgrounds = () => {
  const [currentUserData, setCurrentUserData] = useState({});
  const { userLoading, userError, userData } = useQuery(QUERY_ME, {
    fetchPolicy: "no-cache",
    onCompleted: (data) => {
      console.log(data.me);
      setCurrentUserData(data.me);
    },
  });

  const [removeCampground, { removeCampgroundError }] = useMutation(
    REMOVE_CAMPGROUND,
    {
      onCompleted: () => {
        document.location.reload();
      },
    }
  );
  const handleRemoveCampgrounds = async (id) => {
    console.log(id);
    removeCampground({
      variables: {
        locationId: id,
      },
    });
  };

  return (
    <>
      {userLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Row>
            {currentUserData.savedCampgrounds ? (
              <>
                {currentUserData.savedCampgrounds.map((camp) => {
                  const campData = {
                    _id: camp._id,
                    URL: camp.URL,
                    name: camp.name,
                    description: camp.description,
                    reservationURL: camp.reservationURL,
                    fees: camp.fees,
                    images: camp.images,
                  };
                  return (
                    <Col md="4" key={camp._id}>
                      <Card border="dark">
                        {camp.images ? (
                          <Card.Img
                            src={camp.images[0]}
                            alt={`The image for ${camp.name}`}
                            variant="top"
                          />
                        ) : null}
                        <Card.Body>
                          <Card.Title>{camp.name}</Card.Title>
                          <p>URL: {camp.URL}</p>
                          <Card.Text>{camp.description}</Card.Text>
                          <Card.Text>
                            {" "}
                            <a href={camp.reservationURL}>Reservation</a>
                          </Card.Text>
                          <Card.Text>
                            {" "}
                            <b>Fees: </b> ${camp.fees}
                          </Card.Text>

                          <Button
                            onClick={() => handleRemoveCampgrounds(camp._id)}
                          >
                            Delete
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </>
            ) : (
              <></>
            )}
          </Row>
        </>
      )}
    </>
  );
};

export default SavedCampgrounds;
