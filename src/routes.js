import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Containers
import Full from './containers/Full/'
import Simple from './containers/Simple/'

import Charts from './views/Charts/'
import Dashboard from './views/Dashboard/'

// Stocks-Items
import Search from './views/StockItems/Search/'
import Stocks from './views/StockItems/Stocks/'


// Forms
// import BasicForms from './views/Forms/BasicForms/'
import Settings from './views/Settings'



// Pages
import Login from './views/Pages/Login/'
import Register from './views/Pages/Register/'
import Page404 from './views/Pages/Page404/'
import Page500 from './views/Pages/Page500/'


import Sales from './views/Sales/'
import Purchases from './views/Purchases/'
import Transaction from './views/Transaction/'


export default (
  <Router history={browserHistory}>

    <Route path="/" name="Pages" component={Simple}>
      <IndexRoute component={Login}/>
      <Route path="login" name="Login Page" component={Login}/>
      <Route path="register" name="Register Page" component={Register}/>
      <Route path="404" name="Page 404" component={Page404}/>
      <Route path="500" name="Page 500" component={Page500}/>
    </Route>


    <Route path="home/" name="Home" component={Full}>
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" name="Dashboard" component={Dashboard}/>
      <Route path="stock-items/" name="StockItems">
        <IndexRoute component={Search}/>
        <Route path="search" name="Search" component={Search}/>
        <Route path="stocks" name="Stocks" component={Stocks}/>

      </Route>
      
      <Route path="sales" name="Sales" component={Sales}/>
      <Route path="purchases" name="Purchases" component={Purchases}/>
      <Route path="transaction" name="Transaction" component={Transaction}/>
      <Route path="settings" name="Settings" component={Settings}/>
      <Route path="charts" name="Charts" component={Charts}/>
    </Route>
    {/* <Route path="pages/" name="Pages" component={Simple}>
      <IndexRoute component={Page404}/>
      <Route path="login" name="Login Page" component={Login}/>
      <Route path="register" name="Register Page" component={Register}/>
      <Route path="404" name="Page 404" component={Page404}/>
      <Route path="500" name="Page 500" component={Page500}/>
    </Route> */}
  </Router>
);
