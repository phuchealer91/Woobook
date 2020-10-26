import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'antd'
import AdminSideBar from '../../components/navigation/SideBar/AdminSideBar'

DashBoard.propTypes = {}

function DashBoard(props) {
  return (
    <React.Fragment>
      <Row>
        <Col span={5}>
          <AdminSideBar />
        </Col>
        <Col span={19}>dashboard</Col>
      </Row>
    </React.Fragment>
  )
}

export default DashBoard
