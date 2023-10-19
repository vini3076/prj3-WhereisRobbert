import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import { Outlet } from 'react-router-dom';
//import Home from "./pages/Home";
//import Login from "./pages/Login";
//import Signup from "./pages/Signup";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
const httpLink = createHttpLink({
  uri: "/graphql",
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
  
    <ApolloProvider client={client}>
   

      
      
      <Navbar />
      <Outlet/>
        {/* <Router><Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/login" element={<Login/>}/> 
          <Route path="/signup" element={<Signup/>}/> 
        </Routes> </Router>*/}
      

        </ApolloProvider> 
  );
}

export default App;
