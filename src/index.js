import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

render(
  <BrowserRouter>
      <App/>
  </BrowserRouter>, 
  document.getElementById('root')
);

reportWebVitals();
