import {render} from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

render(
  <Router>
      <App/>
  </Router>, 
  document.getElementById('root')
);

