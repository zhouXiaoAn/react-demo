import React, { Component } from 'react'
import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import MenuConfig from '../../config/menuConfig'
const SubMenu = Menu.SubMenu
class NavLeft extends Component {
    state = {
        MenuNode:null
    }
    componentDidMount() {
        const MenuNode = this.renderMenu(MenuConfig)
        this.setState({MenuNode})
    }
    renderMenu = (MenuConfig) => {
        return MenuConfig.map((item,index)=>{
            if(item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}> 
                        {
                            this.renderMenu(item.children)
                        }
                    </SubMenu>
                )
            }
            return (
                <Menu.Item title={item.title} key={item.key}>
                    <NavLink to={item.key}>{item.title}</NavLink>
                </Menu.Item>
            )
        })
    }
    render() {
        return (
            <nav className="nav-left" style={ {background:"yellow"} }>
                <Menu 
                    onClick={this.hanldeClick}
                >
                    {
                        this.state.MenuNode
                    }
                    </Menu>        
            </nav>
        )
    }
}
export default NavLeft