import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './i18n';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WebFont from 'webfontloader';

render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById('root')
);

WebFont.load({
   google: {
     families: ['Orelega One Web:400', 'sans-serif']
   }
});

reportWebVitals();
