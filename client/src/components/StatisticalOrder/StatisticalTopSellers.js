import { TaobaoSquareFilled } from '@ant-design/icons'
import { DatePicker, Select, Tag } from 'antd'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import {
  Bar,
  CartesianGrid,
  Cell,
  ComposedChart,
  LabelList,
  Legend,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import {
  getTopSellers,
  getTotalOrderStatusMonths,
  StatisticalOrderFilters,
  StatisticalOrders,
} from '../../apis/order'
import { formatPrice } from '../../helpers/formatPrice'
StatisticalTopSellers.propTypes = {}
const { Option } = Select

function StatisticalTopSellers(props) {
  const [topSellers, setTopSellers] = useState([])

  useEffect(() => {
    getTopSellers().then((res) => {
      if (res.data) {
        setTopSellers(res.data.products)
      }
    })
  }, [])
  console.log('hello', topSellers)
  return (
    <>
      <div className="my-4 flex justify-center">
        <div className="w-full">
          <div className="bg-white shadow-md rounded my-4">
            <table className=" w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Mã sản phẩm</th>
                  <th className="py-3 px-6 text-left">Tên sản phẩm</th>
                  <th className="py-3 px-6 text-center">Hình ảnh</th>
                  <th className="py-3 px-6 text-center">Bán ra</th>
                  <th className="py-3 px-6 text-center">Giá</th>
                </tr>
              </thead>
              {topSellers &&
                topSellers.map((item, idx) => {
                  return (
                    <>
                      {item.products &&
                        item.products?.product.map((order) => (
                          <tbody className="text-gray-600 text-sm font-light">
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                              <td className="py-3 px-6 text-left whitespace-nowrap">
                                <div className="flex items-center">
                                  <span className="font-medium">
                                    {' '}
                                    {order?._id.substring(0, 10)}
                                  </span>
                                </div>
                              </td>
                              <td className="py-3 px-6 text-left">
                                <span className="font-semibold">
                                  {' '}
                                  {order?.title}
                                </span>
                              </td>
                              <td className="py-3 px-6 text-center">
                                <img
                                  src={order.images[0]?.url}
                                  width="100px"
                                  height="100px"
                                  style={{ objectFit: 'cover' }}
                                  alt=""
                                />
                              </td>
                              <td className="py-3 px-6 text-center">
                                <span>{order?.sold}</span>
                              </td>
                              <td className="py-3 px-6 text-center">
                                <span>{formatPrice(order?.price)} đ</span>
                              </td>
                            </tr>
                          </tbody>
                        ))}
                    </>
                  )
                })}
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default StatisticalTopSellers
