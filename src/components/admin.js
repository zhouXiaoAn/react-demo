import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Header from './header/header'
import Footer from './footer/footer'
import NavLeft from './navleft/navleft'
import NavRight from './navright/navright'
class Admin extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <div className="app-content">
                    <Row type="flex" justify="center">
                        <Col span={2}>
                            <NavLeft />
                        </Col>
                        <Col span={10}>
                            {
                                this.props.children
                            }
                        </Col>
                        <Col span={5}>
                            <NavRight />
                        </Col>
                    </Row>
                    
                </div>
                <Footer />
            </div>
        )
    }
}
export default Admin