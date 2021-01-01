import { Col, Form, Row } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { UserSideBar } from '../../components/navigation/SideBar'
import { auth } from '../../firebase'
import { hideLoading, showLoading } from '../../redux/actions/ui'
import FormUpdatePassword from './FormUpdatePassword'
import './Styles.scss'
function Password(props) {
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const onFinish = async ({ password }) => {
    dispatch(showLoading())
    await auth.currentUser
      .updatePassword(password)
      .then(() => {
        dispatch(hideLoading())
        toast.success('Cập nhật mật khẩu thành công !')
      })
      .catch((error) => {
        dispatch(hideLoading())
        toast.error(error.message)
      })
    form.resetFields()
  }
  return (
    <React.Fragment>
      <Row>
        <Col xs={24} sm={24} md={5} lg={5}>
          <UserSideBar />
        </Col>
        <Col xs={24} sm={24} md={10} lg={10}>
          <div className="update-password">
            <h3> Cập Nhật Mật Khẩu</h3>
            <Form form={form} onFinish={onFinish}>
              <FormUpdatePassword />
            </Form>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  )
}
Password.propTypes = {}

export default Password
