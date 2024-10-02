import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import HomePage from './Page/HomePage';
import ArtistPage from './Page/ArtistPage';
import SignInPage from './Page/SignUpPage';
import FeedPage from './Page/FeedPage';
import {RouterProvider} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/artist' element={<ArtistPage />}></Route>
          <Route path='/SignIn' element={<SignInPage />}></Route>
          <Route path='/Feed' element={<FeedPage />}></Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;