import React from 'react'
import { Layout } from 'antd'
import './SideBar.css'
const SideBar = ({ menu }) => {
  return (
    <div
      className="fixed pb-4 text-gray-500 dark:text-gray-400"
      breakpoint={'lg'}
      theme="light"
      collapsedWidth={0}
      trigger={null}
    >
      {menu}
    </div>
  )
}

export default SideBar