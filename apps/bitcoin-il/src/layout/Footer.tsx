import * as React from 'react'
import styled from 'styled-components'

import SiteButton from '../components/BitcoinSiteButton'
import { landscapeMobile, phoneDevices } from '../utils/breakpoints'
import CustomNavLink from '../components/CustomNavLink'
import { FooterProps } from '../utils/interfaces'
import { mainMenuItems } from '../routes/mainMenuItems'
import Logo from '../components/Logo'
import { FormattedMessage } from '../components/FormattedMessageWithHover'

const Footer: React.FC<FooterProps> = ({}) => {
  const renderSupport = () => {
    return (
      <>
        <span className="footer-main-body-left-title">
          <FormattedMessage
            id={`page.footer.support`}
            defaultMessage={`Support BitCoin Il`}
            description={`Support`}
          />
          <SiteButton type="primary">
            <FormattedMessage
              id={`footer.donate`}
              defaultMessage={`Donate`}
              description={`Donate`}
            />
          </SiteButton>
        </span>
        <p className="footer-main-body-left-link">
          <FormattedMessage
            id={`footer.support-message`}
            defaultMessage={`TODO: BITCOIN LINK FOR DONATIONS`}
            description={`BITCOIN LINK FOR DONATIONS`}
          />
        </p>
      </>
    )
  }

  const renderColumns = () => {
    return mainMenuItems.map((menuItem, i) => {
      if (!menuItem.submenu) return null
      return (
        <div key={i} className="footer-main-body-right-menu-column">
          <p className="title">{menuItem.label}</p>
          <ul>
            {menuItem.submenu.map((subMenuItem, ii) => {
              return (
                <CustomNavLink key={ii} to={`/${subMenuItem.key}`}>
                  <li className="submenu-item">{subMenuItem.label}</li>
                </CustomNavLink>
              )
            })}
          </ul>
        </div>
      )
    })
  }

  return (
    <StyledFooter id="Footer">
      <div className="logo">
        <Logo isDark={true} />
      </div>
      <div className="body-wrap">
        {/* <div className="support">{renderSupport()}</div> */}
        <div className="columns-wrap">{renderColumns()}</div>
      </div>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  box-sizing: border-box;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  overflow: hidden;

  h1 {
    color: white;
  }

  .logo {
    padding: 50px 0;

    ${phoneDevices} {
    }

    ${landscapeMobile} {
    }

    svg {
      /* height: 500px; */
      max-width: 90vw;
    }
  }

  .body-wrap {
    display: flex;
    width: 90vw;
    justify-content: space-evenly;
    flex-wrap: wrap;

    #app.dir-rtl & {
      direction: rtl;
    }
    ${phoneDevices} {
    }
  }

  .support {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .columns-wrap,
  .support {
    ${phoneDevices} {
      width: 100%;
    }
  }

  .columns-wrap {
    display: flex;
    margin-bottom: 3em;
    flex-wrap: wrap;

    ${phoneDevices} {
      align-items: baseline;
      justify-content: center;
    }
  }

  .submenu-item {
    color: grey;
  }

  .footer {
    &-main {
      &-title {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 150px;
      }
      &-body {
        display: flex;
        align-items: center;
        justify-content: space-around;
        &-left,
        &-right {
          width: 45vw;
        }
        &-left {
          &-title {
            display: flex;
            align-items: center;

            button {
              margin-left: 1em;
            }
          }
          &-link {
            color: blue;
          }
        }
        &-right {
          display: flex;
          &-menu-column {
            ${phoneDevices} {
              text-align: center;
              margin-top: 30px;
            }
            ul {
              padding: 0;
              list-style: none;
              margin-right: 50px;

              ${phoneDevices} {
                margin: 0;
              }

              li {
              }
            }
          }
        }
      }
    }
  }
`
