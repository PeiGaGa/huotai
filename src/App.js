import React from 'react';
import {Switch,Route ,Redirect} from "react-router-dom"
import {pageRouter} from "routers"
import LayoutMain from "layout"

class App extends React.Component {
  
  render(){
  return (
    <Switch>
      <Redirect from="/admin" to="/admin/home" exact/>
      <LayoutMain>
      {
        pageRouter.map((item)=>(
          <Route key={item.pathname} path={item.pathname} render={()=>{
            return <item.component/>
          }}/>
        ))
      }
      </LayoutMain>
      
      <Redirect from="**" to="/404"/>
    </Switch>
  );
}
}

export default App;
