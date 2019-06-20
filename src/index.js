import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Switch,Route,Redirect} from "react-router-dom"
import {mainRouter} from "routers"
import App from './App';

ReactDOM.render(
    
        <Router>
           <Switch>
             <Route path="/admin" render={
               ()=>{
                 return <App/>
               }
             }/>
             {
                 mainRouter.map((item)=>(
                     <Route path={item.pathname} component={item.component} key={item.component}/>
                 ))
             }
             <Redirect from="/"  to="/admin" exact/>
             <Redirect from="**"  to={mainRouter[1].pathname}/>
           </Switch>
        </Router>,
     
    
    
    document.getElementById('root'));

