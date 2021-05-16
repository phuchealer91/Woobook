import { Spin } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import Posts from '../../../components/Community/Home/Posts'
import Status from '../../../components/Community/Home/Status'
import UpdateStatus from '../../../components/Community/Home/UpdateStatus'
import LeftMenu from '../../../components/navigation/LeftMenu'
import RightMenu from '../../../components/navigation/RightMenu'
import { EmptyBox } from '../../../helpers/icons'

const Community = (props) => {
  const { homePost, status } = useSelector((state) => state)
  return (
    <React.Fragment>
      <div
        className="w-full flex items-center justify-center"
        style={{ background: '#f4f4f4' }}
      >
        <div
          className="w-full relative "
          style={{ backgroundColor: '#f4f4f4' }}
        >
          <div className="flex justify-center ">
            <div className="text-gray-600  sticky top-0">
              <div
                className="overflow-y-auto pr-3 "
                style={{ width: '275px', height: 'calc(100vh - 100px)' }}
              >
                {/* <span className="px-5 text-base uppercase text-blue-600 font-semibold">
                  {' '}
                  Danh mục
                </span> */}
                <LeftMenu />
              </div>
            </div>
            <div className="flex" style={{ width: 'calc(100% - 275px)' }}>
              <section className="w-full rounded" style={{ maxWidth: '700px' }}>
                <aside className="rounded-md bg-white shadow-md">
                  <Status />
                  {status.onEdit && <UpdateStatus />}
                </aside>

                {homePost && homePost.loading ? (
                  <div className="flex justify-center items-center py-10">
                    <Spin tip="Đang tải dữ liệu..." size="large" />{' '}
                  </div>
                ) : homePost.result === 0 ? (
                  <div className="py-10 text-gray-600">
                    {' '}
                    <EmptyBox />
                  </div>
                ) : (
                  <aside
                    className="mt-2"
                    style={{ backgroundColor: '#f4f4f4' }}
                  >
                    <Posts />
                  </aside>
                )}
              </section>
              <RightMenu />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
Community.propTypes = {}

export default Community
