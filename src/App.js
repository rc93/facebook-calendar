import React from 'react';
import FacebookLogin from './components/FacebookLogin'
import {BrowserRouter, Route} from 'react-router-dom'
import PostForm from './components/PostForm'; 

function App() {
  return (
      <BrowserRouter>
        <Route path="/" exact component={FacebookLogin}/>
        <Route path="/form" exact component={PostForm}/>
      </BrowserRouter>
  );
}

export default App;
