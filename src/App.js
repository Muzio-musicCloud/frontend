import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import HomePage from './Page/HomePage';

import {RouterProvider} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;