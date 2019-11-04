import React, { Component } from 'react';
import './bootstrap.min.css'
import './App.css';
import NavBar from './compnents/NavBar'
import Details from './compnents/Details'
import Default from './compnents/Default'
import ShopList from './compnents/ShopList'
import Footer from './compnents/Footer'

import {Route,Switch} from 'react-router-dom'
import ListPreferred from "./compnents/ListPreferred";

class App extends Component{

    render(){
        return(
            <React.Fragment>
                       <NavBar />
                       <Switch>
                           <Route exact path="/" component={ShopList} />
                           <Route  path="/details" component={Details} />
                           <Route  path="/preferred" component={ListPreferred} />
                           <Route component={Default} />
                       </Switch>
                       <Footer/>
            </React.Fragment>

               )
           }


}

export default App;

