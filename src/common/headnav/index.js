import React from "react"
import { Row,Col,Button,Dropdown,Icon,message,Menu,Layout} from 'antd';
import tupian from "static/1.png"
const { Header} = Layout;

 class HeadNav extends React.Component{
  
    render(){
      function handleMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
      }
      const menu = (
        <Menu onClick={handleMenuClick}>
          <Menu.Item key="1">
            <Icon type="user" />
            1st menu item
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="user" />
            2nd menu item
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="user" />
            3rd item
          </Menu.Item>
        </Menu>
      )
        return(
          <Row>
          <Header className="header">
            <Col span={4}>
            <div className="logo" >
              <img src={tupian} alt=""/>
            </div>
            </Col>
              <Col span={17}>
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={['2']}
                  style={{ lineHeight: '64px'}}

                >
                  <Menu.Item key="1">招生系统</Menu.Item>
                  <Menu.Item key="2">教学管理</Menu.Item>
                  <Menu.Item key="3">工单管理</Menu.Item>
                </Menu>
                </Col>
                <Col span={3}>
                <Dropdown overlay={menu}>
                <Button className="button">
                  我的设置 <Icon type="down" />
                </Button>
                </Dropdown>
                </Col>
               
          
          </Header>
          </Row>
        )
    }
}
export default HeadNav;