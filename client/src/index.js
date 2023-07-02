import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ItemList from './Foodies/ItemList';
import NewItem from './Foodies/NewItem';
import Login from './Login Components/Login';
import Register from './Login Components/Register';
import Welcome from './Welcome';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path="/Register" exact component={Register} />
        <Route path="/dashboard" exact component={Welcome}/>
        <Route path='/AddItem' exact component={NewItem} />
        <Route  path='/ItemList' exact component={ItemList} />
      </Switch>
    </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
