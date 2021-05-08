import React, { Suspense } from "react";
import './App.css';
import './index';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './components/Navibar'
import Footer from './components/Footer'
import Users from './Users'
import UserID from './UsersID'

import { Route } from "react-router-dom";
import { Home } from './Home';
import { About } from './About';

function App() {
  return (
    <>
      <div className="background">
        <Suspense fallback={null}>
          <Navibar />
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
          <Route exact path="/about" component={About} />
          <Route path="/about/:userName" component={UserID} />
          <div className="footer"><Footer /></div>
        </Suspense>
      </div>
    </>
  );
}

export default App;
