import PATHS from '../redux/constants/paths'
import axiosServices from './axiosServices'

export const getTotalOrderss = (data) => {
  return axiosServices.get(`/${PATHS.ORDER}/${PATHS.LIST}/total`, data)
}
export const getOrders = (data) => {
  return axiosServices.get(`/${PATHS.ORDER}/${PATHS.LIST}`, data)
}
export const updatedOrderStatus = (orderId, orderStatus) => {
  return axiosServices.put(`/${PATHS.ORDER}/order-status`, {
    orderId,
    orderStatus,
  })
}
export const StatisticalOrders = (data) => {
  return axiosServices.post(`/${PATHS.ORDER}/order-by-date`, data)
}
export const StatisticalOrderFilters = (data) => {
  return axiosServices.post(`/${PATHS.ORDER}/order-filters`, data)
}
export const getOrdersCompleteds = (data) => {
  return axiosServices.get(`/${PATHS.ORDER}/order-completed`, data)
}
