import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { CarouselItem } from '../Carousel'
import { Col, Divider, Row } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import {
  getListAllProduct,
  getListProducts,
  getProductsCount,
} from '../../redux/actions/product'
import { CardItem } from '../CardItem'
import LoadingCard from '../LoadingCard'
import { getListProductss } from '../../apis/product'
import { Pagination } from 'antd'
import './ListProduct.scss'

ListProduct.propTypes = {}

function ListProduct(props) {
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  console.log(page)
  const [listproduct, setListproduct] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const { listProducts, issLoading, totalProducts } = useSelector(
    (state) => state.product
  )
  useEffect(() => {
    // dispatch(getListProducts('createAt', 'desc', page))
    loadProducts()
  }, [page])

  function loadProducts() {
    // dispatch(getListProducts('createAt', 'desc', page))
    setIsLoading(true)
    getListProductss('createAt', 'desc', page).then((res) => {
      setListproduct(res.data.products)
      setIsLoading(false)
    })
  }
  useEffect(() => {
    dispatch(getProductsCount())
  }, [])
  return (
    <>
      <h3 className="products__heading">Sản phẩm</h3>
      {isLoading ? (
        <LoadingCard count={4} />
      ) : (
        <Row gutter={[2, 12]}>
          {listproduct &&
            listproduct.map((product) => {
              return (
                <Col xs={24} sm={24} md={12} lg={6} key={product._id}>
                  <CardItem product={product} />
                </Col>
              )
            })}
        </Row>
      )}
      <Row gutter={[2, 12]}>
        <div className="pagination">
          <Pagination
            current={page}
            total={(totalProducts / 4) * 10}
            onChange={(value) => setPage(value)}
          />
        </div>
      </Row>
    </>
  )
}

export default ListProduct