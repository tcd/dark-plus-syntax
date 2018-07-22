import React from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Home } from './components/Home';

const App = () => {

  return (
    <Router>
      <div>
        <Header />
        <Sidebar />
        <div className='rightContentContainer'>
          <Route path='/' component={Home}/>
        </div>
      </div>
    </Router>
  );
};


export default App;
