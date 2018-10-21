import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import './home.css'
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
class Home extends React.Component {
      state = {
        collapsed: false,
      };
    
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }
    
    render() {
        return (
           <div>home</div>  
          );
    }
}

export default Home;