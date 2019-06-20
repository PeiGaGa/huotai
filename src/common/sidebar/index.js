import React from "react"
import {withRouter} from "react-router-dom"
import {pageRouter} from "routers"
import { Menu, Icon } from 'antd';
const { SubMenu }  = Menu;




class  Sidebar extends React.Component{
  onCheng({key}){
    this.props.history.push(key)
    
  }
    render(){
        return(
            <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%', borderRight: 0 }}
                  onClick={this.onCheng.bind(this)}
                  
                >
                  {
                    pageRouter.map((item)=>{
                      return item.children?
                      
                      <SubMenu
                      key={item.pathname}
                      title={
                        <span>
                          <Icon type={item.icon} />
                          {item.title}
                        </span>
                      }
                    >
                      {
                        item.children.map((imen)=>{
                          return <Menu.Item key={imen.pathname}>{imen.title}</Menu.Item>
                        })
                      }
                      
                    </SubMenu>:<Menu.Item key={item.pathname}>{item.title}</Menu.Item>
                    })
                  }
                  
                </Menu>
        )
    }
}

export default withRouter(Sidebar);