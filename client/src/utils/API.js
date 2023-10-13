const apiKey = `9CY8ugde1JciGsW08MOcPyV22TgEljJNPV0hBYCl`
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
  
  // save book data for a logged in user
  //need to comeback later
  export const saveCampgrounds = (bookData, token) => {
    return fetch('/api/users', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(bookData),
    });
  };
  
  // remove saved book data for a logged in user
  export const deleteBook = (bookId, token) => {
    return fetch(`/api/users/books/${bookId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  };
  

  export const searchGoogleBooks = (query) => {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  };


  export const getCamps = ( )=> {
    return fetch(apiURL)
  }