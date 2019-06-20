import React from "react";
import { Layout,Breadcrumb} from 'antd';
import HeadNav from "../common/headnav";
import Sidebar from "common/sidebar";
import "./index.css";
const {Content, Sider } = Layout;




export default class LayoutMain extends React.Component{

    render(){
     
        return(
            <Layout style={{height:"100%"}}>
              <HeadNav/>
            <Layout >
              <Sider width={200} style={{ background: '#fff' }} >
              <Sidebar/>
              </Sider>
              <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                  style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                  }}
                >
                 {this.props.children}
                </Content>
              </Layout>
            </Layout>
          </Layout>
        )
    }
}