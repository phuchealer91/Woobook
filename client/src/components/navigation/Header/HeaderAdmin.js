import {
  LogoutOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Badge, Menu } from 'antd'
import React, { useState } from 'react'
// import './HeaderAdmin.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../../../firebase'
import UserLogined from '../../../pages/auth/Login/UserLogined'
import { logoutInUser } from '../../../redux/actions/users'
import { TOKEN } from '../../../redux/constants/keys'
import PATHS from '../../../redux/constants/paths'
import { Searchs } from '../../LocalSearch'
import {
  SubCategoryK,
  SubCategoryN,
  SubCategoryT,
  SubCategoryV,
} from '../../SubCategory/'

const { SubMenu, Item } = Menu
const HeaderAdmin = () => {
  const [current, setCurrent] = useState('home')
  const history = useHistory()
  const dispatch = useDispatch()
  let { user, cart } = useSelector((state) => ({ ...state }))
  let { cartLists } = cart
  function handleClick(e) {
    setCurrent(e.key)
  }
  function logout() {
    auth.signOut()
    localStorage.removeItem(TOKEN)
    dispatch(logoutInUser())
    history.push(`/${PATHS.LOGIN}`)
  }

  return (
    <>
      <header className="header">
        <div className="desktop-header bg-white hidden lg:block">
          <div className="container mx-auto px-11">
            <nav className="nav flex  relative">
              <div
                className="flex items-center justify-between
              "
              >
                <div>
                  <a href="/" className="inline-block mb-2 mr-2">
                    <img
                      src="./assests/images/Logo_95x.png"
                      alt="Wokiee"
                      className="mr-6"
                    />
                  </a>
                </div>

                {/* <li className="ml-6 relative">
                  <button className="nav__btn">
                    <i className="fal fa-search hover:text-blue-500 transition-all" />
                  </button>
                  <div className="absolute left-2/4 transform -translate-x-2/4 bg-white shadow-sm rounded-lg px-2 text-sm text-center align-middle tooltip">
                    Search
                  </div>
                </li> */}

                <UserLogined />
                <div className="right-0 absolute">
                  <Menu
                    onClick={handleClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    className="nav"
                  >
                    <Item className="nav__login">
                      <Searchs />
                    </Item>
                    {user && user.token ? (
                      <SubMenu
                        key="SubMenu"
                        icon={<SettingOutlined />}
                        title={user && user.name ? user.name : ''}
                        className="nav__user"
                      >
                        <Item>
                          <Link to="/admin/dashboard">DashBoard</Link>
                        </Item>
                        <Item key="setting:2">Option 2</Item>
                        <Item icon={<LogoutOutlined />} onClick={logout}>
                          Logout
                        </Item>
                      </SubMenu>
                    ) : null}

                    {user && !user.token ? (
                      <Item>
                        <Item
                          key="login"
                          icon={<UserOutlined />}
                          className="nav__login"
                        >
                          <Link to="/login">LOGIN</Link>
                        </Item>
                        <Item
                          key="register"
                          icon={<UserAddOutlined />}
                          className="nav__register"
                        >
                          <Link to="/register">REGISTER</Link>
                        </Item>
                      </Item>
                    ) : null}
                  </Menu>
                </div>
                {/* <li className="ml-6 relative">
                  <button className="nav__btn">
                    <UserOutlined />
                  </button>
                  <div className="absolute left-2/4 transform -translate-x-2/4 bg-white shadow-sm rounded-lg px-2 text-sm text-center align-middle tooltip">
                    Account
                  </div>
                </li> */}
              </div>
            </nav>
          </div>
        </div>

        <div className="mobile-header bg-white lg:hidden">
          <div className="px-6">
            <div className="nav flex items-center relative">
              <div className="mobile-menu inline-block cursor-pointer">
                <i className="far fa-bars" />
              </div>
              <a href="/" className="inline-block mx-auto">
                <img src="./assests/images/Logo_95x.png" alt="Wokiee" />
              </a>
              <ul className="flex items-center absolute right-0">
                <li className="ml-6 relative">
                  <button className="nav__btn">
                    <i className="fal fa-search hover:text-blue-500 transition-all" />
                  </button>
                  <div className="absolute left-2/4 transform -translate-x-2/4 bg-white shadow-sm rounded-lg px-2 text-sm text-center align-middle tooltip">
                    Search
                  </div>
                </li>
                <li className="ml-6 relative">
                  <button className="nav__btn">
                    <i className="fal fa-shopping-cart hover:text-blue-500 transition-all" />
                  </button>
                  <div className="absolute left-2/4 transform -translate-x-2/4 bg-white shadow-sm rounded-lg px-2 text-sm text-center align-middle tooltip">
                    Cart
                  </div>
                </li>
                <li className="ml-6 relative">
                  <button className="nav__btn">
                    <i className="fal fa-user-alt hover:text-blue-500 transition-all" />
                  </button>
                  <div className="absolute left-2/4 transform -translate-x-2/4 bg-white shadow-sm rounded-lg px-2 text-sm text-center align-middle tooltip">
                    Account
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <nav className="panel-menu fixed inset-y-0 left-0 bg-white">
          <ul className="absolute inset-0 py-6 mn1 panel-menu__list">
            <li className="cursor-pointer pb-4 pl-6 panel-menu__close">
              <i className="fal fa-times" />
              <span className="ml-1">Close</span>
            </li>
            <li className="mt-5 flex items-center pl-6 pr-7 cursor-pointer group">
              <Link
                to="/"
                className="uppercase font-light text-sm text-black group-hover:text-blue-600"
              >
                home
              </Link>
            </li>
            <li className="mt-5 flex items-center pl-6 pr-7 cursor-pointer group">
              <Link
                to="/"
                className="uppercase font-light text-sm text-black group-hover:text-blue-600"
              >
                shop
              </Link>
            </li>
            <li className="mt-5 flex items-center pl-6 pr-7 cursor-pointer group">
              <Link
                to="/"
                className="uppercase font-light text-sm text-black group-hover:text-blue-600"
              >
                pages
              </Link>
            </li>
            <li className="mt-5 flex items-center pl-6 pr-7 cursor-pointer group">
              <Link
                to="/"
                className="uppercase font-light text-sm text-black group-hover:text-blue-600"
              >
                blog
              </Link>
            </li>
            <li className="mt-5 flex items-center pl-6 pr-7 cursor-pointer group panel-menu__item">
              <a
                href="#mn2"
                className="uppercase font-light text-sm text-black group-hover:text-blue-600 inline-flex items-center justify-between w-full"
              >
                Sách trong nước
                <i className="fal fa-angle-right text-xl font-light group-hover:text-blue-600" />
              </a>
            </li>
            {/* <li className="mt-5 flex items-center pl-6 pr-7 cursor-pointer group panel-menu__item">
              <a
                href="#mn2"
                className="uppercase font-light text-sm text-black group-hover:text-blue-600 inline-flex items-center justify-between w-full"
              >
                Sách nước ngoài
                <i className="fal fa-angle-right text-xl font-light group-hover:text-blue-600" />
              </a>
            </li> */}
          </ul>
          <ul className="absolute inset-0 py-6 panel-menu__list mn2 hidden">
            <li className="cursor-pointer pb-4 pl-6 mb-6 panel-menu__back">
              <i className="fal fa-angle-left" />
              <span className="ml-1">Back</span>
            </li>
            <Link
              to="/"
              className="uppercase font-medium text-sm mt-5 pl-6 hover:text-blue-600"
            >
              women
            </Link>
            <li className="mt-5 flex items-center pl-6 pr-7 cursor-pointer group panel-menu__item">
              <a
                href="#mn4"
                className="uppercase font-light text-sm text-black group-hover:text-blue-600 inline-flex items-center justify-between w-full"
              >
                top
                <i className="fal fa-angle-right text-xl font-light group-hover:text-blue-600" />
              </a>
            </li>
            <li className="mt-5 flex items-center pl-6 pr-7 cursor-pointer group panel-menu__item">
              <a
                href="#mn5"
                className="uppercase font-light text-sm text-black group-hover:text-blue-600 inline-flex items-center justify-between w-full"
              >
                bottoms
                <i className="fal fa-angle-right text-xl font-light group-hover:text-blue-600" />
              </a>
            </li>
            <li className="mt-5 flex items-center pl-6 pr-7 cursor-pointer group panel-menu__item">
              <a
                href="#mn6"
                className="uppercase font-light text-sm text-black group-hover:text-blue-600 inline-flex items-center justify-between w-full"
              >
                accessories
                <i className="fal fa-angle-right text-xl font-light group-hover:text-blue-600" />
              </a>
            </li>
          </ul>
          <ul className="absolute inset-0 py-6 panel-menu__list mn3 hidden">
            <li className="cursor-pointer pb-4 pl-6 mb-6 panel-menu__back">
              <i className="fal fa-angle-left" />
              <span className="ml-1">Back</span>
            </li>
            <Link
              to="/"
              className="uppercase font-medium text-sm mt-5 pl-6 hover:text-blue-600"
            >
              men
            </Link>
            <li className="mt-5 flex items-center pl-6 pr-7 cursor-pointer group panel-menu__item">
              <a
                href="#mn4"
                className="uppercase font-light text-sm text-black group-hover:text-blue-600 inline-flex items-center justify-between w-full"
              >
                top
                <i className="fal fa-angle-right text-xl font-light group-hover:text-blue-600" />
              </a>
            </li>
            <li className="mt-5 flex items-center pl-6 pr-7 cursor-pointer group panel-menu__item">
              <a
                href="#mn5"
                className="uppercase font-light text-sm text-black group-hover:text-blue-600 inline-flex items-center justify-between w-full"
              >
                bottoms
                <i className="fal fa-angle-right text-xl font-light group-hover:text-blue-600" />
              </a>
            </li>
            <li className="mt-5 flex items-center pl-6 pr-7 cursor-pointer group panel-menu__item">
              <a
                href="#mn6"
                className="uppercase font-light text-sm text-black group-hover:text-blue-600 inline-flex items-center justify-between w-full"
              >
                accessories
                <i className="fal fa-angle-right text-xl font-light group-hover:text-blue-600" />
              </a>
            </li>
          </ul>
          <ul className="absolute inset-0 py-6 panel-menu__list mn4 hidden">
            <li className="cursor-pointer pb-4 pl-6 mb-6 panel-menu__back">
              <i className="fal fa-angle-left" />
              <span className="ml-1">Back</span>
            </li>
            <Link
              to="/"
              className="uppercase font-medium text-sm mt-5 pl-6 hover:text-blue-600"
            >
              Văn học
            </Link>
            {/* <SubCategoryV  /> */}
          </ul>
          <ul className="absolute inset-0 py-6 panel-menu__list mn5 hidden">
            <li className="cursor-pointer pb-4 pl-6 mb-6 panel-menu__back">
              <i className="fal fa-angle-left" />
              <span className="ml-1">Back</span>
            </li>
            <Link
              to="/"
              className="uppercase font-medium text-sm mt-5 pl-6 hover:text-blue-600"
            >
              bottoms
            </Link>
            <li className="mt-5 flex items-center pl-6 pr-7 cursor-pointer group">
              <Link
                to="/"
                className="uppercase font-light text-sm text-black group-hover:text-blue-600"
              >
                jeans
              </Link>
            </li>
            <li className="mt-5 flex items-center pl-6 pr-7 cursor-pointer group">
              <Link
                to="/"
                className="uppercase font-light text-sm text-black group-hover:text-blue-600"
              >
                lacoste
              </Link>
            </li>
            <li className="mt-5 flex items-center pl-6 pr-7 cursor-pointer group">
              <Link
                to="/"
                className="uppercase font-light text-sm text-black group-hover:text-blue-600"
              >
                levi's
              </Link>
            </li>
            <li className="mt-5 flex items-center pl-6 pr-7 cursor-pointer group">
              <Link
                to="/"
                className="uppercase font-light text-sm text-black group-hover:text-blue-600"
              >
                model
              </Link>
            </li>
            <li className="mt-5 flex items-center pl-6 pr-7 cursor-pointer group">
              <Link
                to="/"
                className="uppercase font-light text-sm text-black group-hover:text-blue-600"
              >
                nice
              </Link>
            </li>
            <li className="mt-5 flex items-center pl-6 pr-7 cursor-pointer group">
              <Link
                to="/"
                className="uppercase font-light text-sm text-black group-hover:text-blue-600"
              >
                polo
              </Link>
            </li>
            <li className="mt-5 flex items-center pl-6 pr-7 cursor-pointer group">
              <Link
                to="/"
                className="uppercase font-light text-sm text-black group-hover:text-blue-600"
              >
                pullover
              </Link>
            </li>
          </ul>
          <ul className="absolute inset-0 py-6 panel-menu__list mn6 hidden">
            <li className="cursor-pointer pb-4 pl-6 mb-6 panel-menu__back">
              <i className="fal fa-angle-left" />
              <span className="ml-1">Back</span>
            </li>
            <Link
              to="/"
              className="uppercase font-medium text-sm mt-5 pl-6 hover:text-blue-600"
            >
              accessories
            </Link>
            <li className="mt-5 flex items-center pl-6 pr-7 cursor-pointer group">
              <Link
                to="/"
                className="uppercase font-light text-sm text-black group-hover:text-blue-600"
              >
                scarf
              </Link>
            </li>
            <li className="mt-5 flex items-center pl-6 pr-7 cursor-pointer group">
              <Link
                to="/"
                className="uppercase font-light text-sm text-black group-hover:text-blue-600"
              >
                shirt
              </Link>
            </li>
            <li className="mt-5 flex items-center pl-6 pr-7 cursor-pointer group">
              <Link
                to="/"
                className="uppercase font-light text-sm text-black group-hover:text-blue-600"
              >
                shoes
              </Link>
            </li>
            <li className="mt-5 flex items-center pl-6 pr-7 cursor-pointer group">
              <Link
                to="/"
                className="uppercase font-light text-sm text-black group-hover:text-blue-600"
              >
                shorts
              </Link>
            </li>
            <li className="mt-5 flex items-center pl-6 pr-7 cursor-pointer group">
              <Link
                to="/"
                className="uppercase font-light text-sm text-black group-hover:text-blue-600"
              >
                summer
              </Link>
            </li>
            <li className="mt-5 flex items-center pl-6 pr-7 cursor-pointer group">
              <Link
                to="/"
                className="uppercase font-light text-sm text-black group-hover:text-blue-600"
              >
                sunglasess
              </Link>
            </li>
            <li className="mt-5 flex items-center pl-6 pr-7 cursor-pointer group">
              <Link
                to="/"
                className="uppercase font-light text-sm text-black group-hover:text-blue-600"
              >
                vintage
              </Link>
            </li>
          </ul>
        </nav>
        {/* hello main*/}
      </header>
    </>
  )
}

export default HeaderAdmin