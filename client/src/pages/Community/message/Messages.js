import { Spin } from 'antd'
import React from 'react'
import ChatApp from '../../../components/Community/ChatApp/ChatApp'
import LeftMenu from '../../../components/navigation/LeftMenu'

const Messages = () => {
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
              <section className="w-full rounded-md shadow-md bg-white">
                {/*Content (Center)*/}
                {/* {profile.loading ? (
                  <div className="py-5 px-5 m-auto text-center">
                    <Spin
                      tip="Đang tải dữ liệu"
                      size="large"
                      style={{ color: '#fff' }}
                    />
                  </div>
                ) : ( */}
                <ChatApp />
                {/* )} */}
              </section>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Messages
