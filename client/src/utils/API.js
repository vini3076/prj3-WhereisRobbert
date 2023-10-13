const apiKey = `9CY8ugde1JciGsW08MOcPyV22TgEljJNPV0hBYCl`
const query = 'campgrounds';
const apiURL = `https://developer.nps.gov/api/v1/campgrounds?stateCode=CA&q=${query}&api_key=${apiKey}`


export const getMe = (token) => {
    return fetch('/api/users/me', {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
  };
  
  export const createUser = (userData) => {
    return fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
  
  export const loginUser = (userData) => {
    return fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
  
  // save campground data for a logged in user
  //need to comeback later
  export const saveCampgrounds = (campgroundData, token) => {
    return fetch('/api/users', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(campgroundData),
    });
  };
  
  // remove saved campground data for a logged in user
  export const deleteCamp = (campId, token) => {
    return fetch(`/api/users/books/${campId}`, { // TODO: book/location edit
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  };
  

  export const getCamps = (query) => {
    return fetch(`https://developer.nps.gov/api/v1/campgrounds?stateCode=CA&q=${query}&api_key=${apiKey}`);
  };

