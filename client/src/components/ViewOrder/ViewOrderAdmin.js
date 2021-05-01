import { Select, Steps } from 'antd'
import React, { useState } from 'react'
import ModalImage from 'react-modal-image'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { updatedOrderStatus } from '../../apis/order'
import imageDefault from '../../assets/images/default-image.jpg'
import { formatPrice } from '../../helpers/formatPrice'
ViewOrderAdmin.propTypes = {}
const { Step } = Steps
const { Option } = Select
function ViewOrderAdmin({ order, loadAllOrders }) {
  const [isChange, setIsChange] = useState(false)
  const [userOrder, setuserOrder] = useState([])
  const [isCancel, setIsCancel] = useState(false)
  const arrStatus = ['Đang chờ xác nhận', 'Đang xử lý', 'Đã bàn giao', 'Hủy']
  function handleChange(orderId, orderStatus) {
    updatedOrderStatus(orderId, orderStatus)
      .then((res) => {
        if (res.data) {
          toast.success('Cập nhật trạng thái đơn hàng thành công')
          loadAllOrders()
        }
      })
      .catch((error) => {
        toast.error('Cập nhật trạng thái đơn hàng thất bại')
      })
  }
  return (
    <div className="px-4 pt-4 pb-8 bg-white mt-4 rounded">
      <div className="uppercase pb-1 text-gray-700 font-semibold  border-solid">
        CHI TIẾT ĐƠN HÀNG
      </div>
      <div className="bg-white rounded my-3">
        <div className="flex items-center justify-between">
          <Select
            defaultValue={order?.orderStatus}
            onChange={(e) => handleChange(order._id, e)}
            className="border-red-600 border-dashed border w-2/6"
            size="middle"
          >
            {arrStatus.map((arr) => {
              return (
                <Option key={arr} value={arr}>
                  {arr.toUpperCase()}
                </Option>
              )
            })}
          </Select>
        </div>

        {/* <Tag color="warning">{
                                order?.paymentIntent?.status}</Tag> */}
        <div className="mt-3">
          Mã đơn hàng:{' '}
          <span className="text-sm text-gray-600 font-semibold">
            {order?.paymentIntent?.id}
          </span>
        </div>
        <div className="mt-3">
          Ngày mua:{' '}
          <span className="text-sm text-gray-600 font-semibold">
            {/* {order?.paymentIntent?.currency.toUpperCase()} */}
            {new Date(order?.paymentIntent?.created * 1000).toLocaleString()}
          </span>
        </div>
        <div className="mt-3">
          Tổng tiền:{' '}
          <span className="text-sm text-gray-600 font-semibold">
            {formatPrice(order?.paymentIntent?.amount)}đ
          </span>
        </div>
      </div>
      <div className="bg-white rounded mt-3 flex ">
        <div className="w-3/6 border px-3 py-3 mr-3">
          <span className="text-sm text-blue-600 uppercase border-b border-solid border-gray-100 py-3 w-full">
            Thông tin người nhận
          </span>
          <div className="text-sm text-gray-500 mt-3">
            <div className="px-3 pt-3">
              <div className="text-base text-gray-600 font-semibold flex items-center justify-between">
                <span>{order?.deliveryAddress?.name}</span>
              </div>
              <div className="text-base text-gray-600">
                <span className="text-sm text-gray-500">Địa chỉ: </span>
                {order?.deliveryAddress?.fullAddress} -{' '}
                {order?.deliveryAddress?.mainAddress}
              </div>
              <div className="text-base text-gray-600">
                <span className="text-sm text-gray-500">Điện thoại: </span>
                {order?.deliveryAddress?.phone}
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/6 border px-3 py-3">
          <span className="text-sm text-blue-600 uppercase border-b border-solid border-gray-100 py-3 w-full">
            phương thức thanh toán
          </span>
          <div className="text-sm text-gray-500 pt-3 ">
            {order?.paymentIntent?.payment_method_types[0].toUpperCase()}
          </div>
        </div>
      </div>
      <div className="bg-white rounded mt-3 flex items-center border px-5 py-5 justify-center">
        <Steps
          current={
            order?.orderStatus === 'Đang xử lý'
              ? 1
              : order?.orderStatus === 'Đã bàn giao' ||
                order?.orderStatus === 'Hủy'
              ? 2
              : 0
          }
          percent={60}
          size="default"
          status={
            order?.orderStatus === 'Đang xử lý'
              ? 'process'
              : order?.orderStatus === 'Đã bàn giao'
              ? 'finish'
              : order?.orderStatus === 'Hủy'
              ? 'error'
              : 'process'
          }
        >
          <Step
            title="Đang chờ xác nhận"
            description="Chờ xác nhận từ đơn hàng"
          />
          <Step
            title="Đang xử lý"
            description="
                        Đang xử lý đơn hàng."
          />
          <Step
            title="Đã bàn giao"
            description="Bàn giao đơn hàng thành công."
          />
        </Steps>
      </div>
      <div className="bg-white rounded mt-3 flex items-center ">
        <div className="px-3 pt-3 pb-8 w-full">
          <div className="uppercase border-b border-gray-100 pb-1 text-gray-700 font-semibold  border-solid py-3">
            TỔNG QUAN SẢN PHẨM TRONG ĐƠN HÀNG
          </div>
          {order.products.map((item) => {
            return (
              <div className="hidden md:block">
                <div className="py-3 flex-row justify-between items-center mb-0 hidden md:flex">
                  <div className="w-full lg:w-align xl:w-align flex flex-row items-start border-b-0 border-grey-dark pt-0 pb-0 pl-3 text-left">
                    <div className="w-20 mx-0 relative pr-0 mr-3 ">
                      <div className="h-20 rounded flex items-center justify-center">
                        <div className="aspect-w-1 aspect-h-1 w-full">
                          <ModalImage
                            small={
                              item ? item.product?.images[0]?.url : imageDefault
                            }
                            large={
                              item ? item.product?.images[0]?.url : imageDefault
                            }
                            alt={`${
                              item ? item.product?.images[0]?.url : imageDefault
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start">
                      <Link
                        to={`/product/${item.product?.slug}`}
                        className="font-hk text-secondary text-base"
                      >
                        {item.product?.title}
                      </Link>
                      <span className="pt-1 text-gray-700 font-semibold ">
                        {formatPrice(item.product?.price)}đ
                      </span>
                    </div>
                  </div>

                  <div className="w-1/4 lg:w-1/5 xl:w-1/4 pr-10 xl:pr-10 pb-4 flex flex-col items-center justify-end">
                    <div className="custom-number-input h-10 w-32">
                      <div className="text-blue-700 text-base font-semibold">
                        <span className="text-xs text-gray-500">Số lượng:</span>{' '}
                        {item.count}
                      </div>
                    </div>
                    <div className=" text-blue-700 text-base font-semibold">
                      <span className="text-xs text-gray-500">Thành tiền:</span>{' '}
                      {formatPrice(item.product?.price * item.count)}đ
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ViewOrderAdmin