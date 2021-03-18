import { Col, Pagination, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListProductss } from '../../apis/product'
import { getProductsCount } from '../../redux/actions/product'
import { CardItem } from '../CardItem'
import LoadingCard from '../LoadingCard'
import './ListProduct.scss'

ListProduct.propTypes = {}

function ListProduct(props) {
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  const [listproduct, setListproduct] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const { totalProducts } = useSelector((state) => state.product)
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
      {isLoading ? (
        <LoadingCard count={4} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto grid-flow-row gap-12 mt-6">
          {listproduct &&
            listproduct.map((product) => {
              return (
                <div className="product-item">
                  <CardItem product={product} />
                </div>
              )
            })}
        </div>
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
