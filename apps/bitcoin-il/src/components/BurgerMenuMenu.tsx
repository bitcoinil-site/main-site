import { Menu } from 'antd'
import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'

import CustomNavLink from './CustomNavLink'
import { BurgerMenuMenuProps, MainMenuItem } from '../utils/interfaces'
import LanguageSelectMobile from './LanguageSelectMobile'
import { mainMenuItems } from '../routes/mainMenuItems'
import { isBurgerMenuOpen } from '../state/state'
import ThemeSelectMobile from './ThemeSelectMobile'

const BurgerMenuMenu: React.FC<BurgerMenuMenuProps> = ({}) => {
  const [, setMenuOpen] = useRecoilState(isBurgerMenuOpen)
  const [openKeys, setOpenKeys] = React.useState([])
  const [open, setOpen] = React.useState('')
  const location = useLocation()

  // Tried to fix this, can't do it
  const onOpenChange = (keys: any) => {
    setOpenKeys(keys)
  }

  React.useEffect(() => {
    const splitLocation = location.pathname.split('/')
    setOpen(splitLocation[splitLocation.length - 1])
  }, [])

  return (
    <StyledBurgerMenuMenu>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={[]}
        mode="inline"
        openKeys={openKeys}
        onClick={() => {
          setOpenKeys([])
          setMenuOpen(false)
        }}
        onOpenChange={onOpenChange}
      >
        {mainMenuItems.map((item: any) => {
          if (item.submenu) {
            return (
              <Menu.SubMenu
                key={item.key}
                title={<p className="collapsable-menu">{item.label}</p>}
              >
                {item.submenu.map((subItem: MainMenuItem) => {
                  return (
                    <Menu.Item
                      style={{ background: 'grey' }}
                      className="grey-submenu-item"
                      key={subItem.key}
                    >
                      <CustomNavLink to={`/${subItem.key}`}>
                        {subItem.label}
                      </CustomNavLink>
                      {/* <NavLink to={`/${subItem.key}`}>{subItem.label}</NavLink> */}
                    </Menu.Item>
                  )
                })}
              </Menu.SubMenu>
            )
          }
          return (
            <Menu.Item
              key={item.key}
              onClick={() => {
                setOpen(item.key)
              }}
            >
              <CustomNavLink to={`/${item.key}`}>
                <p
                  className={`burger-menu-item ${
                    open === item.key ? 'burger-selected-menu-item' : ''
                  }`}
                >
                  {item.label}
                </p>
              </CustomNavLink>
            </Menu.Item>
          )
        })}
      </Menu>
      <LanguageSelectMobile />
      <ThemeSelectMobile />
    </StyledBurgerMenuMenu>
  )
}

export default BurgerMenuMenu

const StyledBurgerMenuMenu = styled.div`
  .ant-menu {
    .ant-menu-submenu-title {
      padding: 0 !important;
      margin: 0;
    }
    li,
    .ant-menu-item {
      padding: 0 !important;
      margin: 0 !important;
    }
  }

  .grey-submenu-item {
    background-color: pink;
  }

  .ant-menu-sub {
    background-color: red;
  }

  .ant-menu-item {
    color: green;
  }

  .ant-menu,
  .ant-menu-item-selected {
    color: white;
    background-color: black;
    p {
      text-align: center;
    }

    .collapsable-menu {
      margin: 0;
    }

    img {
      /* position: absolute; */
      background-color: maroon;
    }

    .ant-menu-item,
    .ant-menu-item-active,
    .ant-menu-item-selected,
    .ant-menu-item-only-child {
      background: black;
      color: white;
      text-align: center;
      padding: 0;
    }

    .ant-menu-title-content {
      width: 100vw;
    }

    .ant-menu-item,
    .ant-menu-item-only-child {
      background: black;
      a {
        color: white;
      }
    }

    li {
      color: white;
    }

    .ant-menu-submenu-arrow::before,
    .ant-menu-submenu-arrow::after {
      color: white;
    }
  }

  .burger-menu-item {
    margin: 0;
  }

  .burger-selected-menu-item {
    color: black;
  }
`
