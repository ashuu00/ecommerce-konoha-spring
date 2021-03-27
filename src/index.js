import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import  'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {ChakraProvider,extendTheme} from '@chakra-ui/react'
import {BrowserRouter,Switch} from 'react-router-dom'
//importing Redux configs
import {createStore} from "redux"
import {Provider} from 'react-redux'
import rootReducer from './Reducers/index';
//end of redux 
const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        fontFamily:'Merriweather'
      }
    }
  }
});

//store 
const store=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
  <ChakraProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </ChakraProvider>,
  document.getElementById('root')
);


