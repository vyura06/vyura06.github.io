import React, { Suspense } from "react";
import './styles/App.css';
import './index';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './components/Navibar'
import Footer from './components/Footer'
import UserID from './UsersID'
import Users from './Users'
import WebFont from 'webfontloader';

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from './Home';

const Loader = () => (
  <div>
      Loading
  </div>
);

function App() {
  return (
    <>
      <div className="background">
        <Suspense fallback={<Loader/>}>
          <Router basename={process.env.PUBLIC_URL}>
            <Navibar />
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/users" component={Users} />
                  <Route path="/about/:userName" component={UserID} />
              </Switch>
          </Router>
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
