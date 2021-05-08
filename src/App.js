import React, { Suspense } from "react";
import './App.css';
import './index';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './components/Navibar'
import Footer from './components/Footer'
import UserID from './UsersID'
import Users from './Users'
import WebFont from 'webfontloader';

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
        </Suspense>
        <div className="footer"><Footer/></div>
      </div>
    </>
  );
}

WebFont.load({
  google: {
    families: ['Orelega One Web:400', 'sans-serif']
  }
});

export default App;
