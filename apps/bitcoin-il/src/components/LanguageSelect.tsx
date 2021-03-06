import { Menu } from 'antd'
import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'

import { phoneDevices } from '../utils/breakpoints'
import { useTranslations } from '../hooks/useTranslations'
import ico_angle from '../img/ico_angle.svg'
import { LanguageSelectProps, LongNamesForLanguageType } from '../utils/interfaces'
import { currentlySelectedLanguage } from '../state/state'

const longNamesForLanguages: LongNamesForLanguageType = {
  he: 'עברית',
  en: 'English'
}

const LanguageSelect: React.FC<LanguageSelectProps> = ({}) => {
  const intl = useTranslations()
  const { availableLanguages, navigateWithLanguageChange } = intl
  const [current, setCurrent] = React.useState('en')
  const [, setAtomLang] = useRecoilState(currentlySelectedLanguage)
  const location = useLocation()

  React.useEffect(() => {
    availableLanguages.forEach((avLang) => {
      if (location.pathname.startsWith(`/${avLang.name}`)) {
        setCurrent(avLang.name)
        setAtomLang({ language: avLang.name })
      }
    })
  }, [])

  const onClick = (e: any) => {
    setCurrent(e.key)
    setAtomLang({ language: e.key })
    navigateWithLanguageChange(location.pathname, e.key)
  }

  return (
    <StyledLanguageSelect id="LanguageSelect">
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
        <Menu.SubMenu
          key={'lang'}
          title={
            <p className="collapsable-menu">
              {longNamesForLanguages[current]}{' '}
              <img className="language-select-down-arrow" src={ico_angle} />
            </p>
          }
        >
          {availableLanguages.map((avLang) => {
            return (
              <Menu.Item key={avLang.name}>
                <p>{longNamesForLanguages[avLang.name] || 'English'}</p>
              </Menu.Item>
            )
          })}
        </Menu.SubMenu>
      </Menu>
    </StyledLanguageSelect>
  )
}

const StyledLanguageSelect = styled.div`
  ${phoneDevices} {
    display: none;
  }

  .collapsable-menu {
    &:hover .language-select-down-arrow {
      transition: all 200ms;
      transform: rotate(180deg);
    }
    .language-select-down-arrow {
      transition: all 200ms;
    }
  }

  .ant-menu {
    width: 80px;
    &.ant-menu {
      background: transparent;
      border-bottom: none;
    }

    &-item {
    }

    p {
      margin: 0;
    }

    > li {
      &::after {
        width: 0;
        height: 0;
      }
      &.ant-menu-item {
        &::after {
          width: 0;
          height: 0;
        }
      }
    }
  }
`

export default LanguageSelect
