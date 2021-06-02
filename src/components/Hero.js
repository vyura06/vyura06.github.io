import React, {Suspense, Button} from "react";
import '../styles/App.css';
import '../index';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../Home'
import Navibar from './Navibar'
import Footer from './Footer'
import Users from '../Users'
import WebFont from 'webfontloader';

import { HashRouter as Router, Switch, Route } from "react-router-dom";

const Loader = () => (
  <div>
      Loading
  </div>
);

const Hero = () => {

    return(
        <section className="hero">
            <Suspense fallback={<Loader/>}>
                <Router basename={process.env.PUBLIC_URL}>
                    <Navibar />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/users" component={Users} />
                        </Switch>
                </Router>
            </Suspense>
        <div className="footer"><Footer/></div>
        </section>
    )
}


WebFont.load({
    google: {
      families: ['Orelega One Web:400', 'sans-serif']
    }
});

export default Hero;