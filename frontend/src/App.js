import React, {useState} from "react";
import Signup from './components/Signup'
import Signin from './components/Signin'
import Navbar from './components/Navbar'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App=()=>{
    return (
        <BrowserRouter >
            <Navbar/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/Signup' component={Signup}/>
                <Route exact path='/Signin' component={Signin}/>
               
            </Switch>
        
            <Footer/>
        </BrowserRouter>
        
    )
}


export default App;
