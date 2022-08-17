import {
  AppleOutlined,
  AppstoreOutlined,
  WindowsOutlined
} from '@ant-design/icons'
import { Button, Card, Divider } from 'antd'
import * as React from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'

import { coreShortcuts, links, mainBoxes, newsCards } from '../data/CoreData'
import ico_news from '../img/ico_news.svg'
import { colors } from '../theme/colors'
import { phoneDevices } from '../utils/breakpoints'
import { CoreBodyProps } from '../utils/interfaces'
import SiteButton from './BitcoinSiteButton'
import { FormattedMessage } from './FormattedMessageWithHover'

const CoreBody: React.FC<CoreBodyProps> = ({}) => {
  const intl = useIntl()
  return (
    <StyledCoreBody id="CoreBody">
      <div className="core-left">
        <div>
          <Button
            block
            size='large'
            type="primary"
            href={intl.formatMessage({
              id: `bitcoinil-core.download-url`,
              defaultMessage: 'https://guides.bitcoinil.org/'
            })}
          >
            <FormattedMessage
              id={`bitcoinil-core.download`}
              defaultMessage={`Download BitcoinIL Core`}
            />
          </Button>
          <div className="core-left-version">
            <p>
              <FormattedMessage
                id={`bitcoinil-core.version`}
                defaultMessage={`BitcoinIL Core v0.21.0`}
              />
            </p>
            <p>
              <WindowsOutlined />
              <AppleOutlined />
            </p>
          </div>
          <Divider />
          <div className="core-left-shortcuts">
            <p>Shortcut:</p>
            <ul>
              {coreShortcuts.map((shortcut, i) => {
                return (
                  <li key={i}>
                    <a href={shortcut.link}>
                      <Card>
                        <img src={shortcut.image} />
                        <div className="shortcut-text-wrap">
                          <h1>{shortcut.title}</h1>
                          <p>{shortcut.subtitle}</p>
                        </div>
                      </Card>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="core-left-shortcuts">
          <ul>
            {newsCards.map((shortcut, i) => {
              return (
                <li key={i}>
                  <a href={shortcut.link}>
                    <Card>
                      <img src={shortcut.image} />
                      <div className="shortcut-text-wrap">
                        <h1>{shortcut.title}</h1>
                        <p>{shortcut.subtitle}</p>
                      </div>
                    </Card>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="core-right">
        <h1>
          <FormattedMessage
            id={`core.shortcuts.main.title`}
            defaultMessage={`Bitcoin IL Core`}
          />
        </h1>
        <p>
          <FormattedMessage
            id={`core.shortcuts.main.description`}
            defaultMessage={`Bitcoin IL Core is programmed to decide which block chain contains valid transactions. The users of Bitcoin Core only accept transactions for that block chain, making it the Bitcoin block chain that everyone else wants to use. For the latest developments related to Bitcoin Core, be sure to visit the project’s official website.`}
            description={`mainTitle`}
          />
        </p>
        <div className="core-right-main-boxes">
          {mainBoxes.map((box, i) => {
            return (
              <Card key={i}>
                <Card.Meta title={box.title} avatar={<img src={box.img} />} />
                <p>{box.mainText}</p>
              </Card>
            )
          })}
        </div>
        <p>
          <FormattedMessage
            id={`core.shortcuts.shared-agreement`}
            defaultMessage={`This shared agreement (called consensus) allows people like you to only accept valid bitcoins, enforcing Bitcoin's rules against even the most powerful miners.In addition to improving Bitcoin's decentralization, Bitcoin Core users get:`}
            description={`shared-agreement`}
          />
        </p>
        <ul className="core-right-links">
          {links.map((link, i) => {
            return (
              <li key={i}>
                <a href={link.link}>{link.linkText}</a>
                {'  '}
                {link.postLinkText}
              </li>
            )
          })}
        </ul>
        {/* <Divider />
        <div className="news">
          <h1 className="news-title">News</h1>
          <a className="news-link" href="">
            <img src={ico_news} /> Some News Here
          </a>
        </div> */}
      </div>
    </StyledCoreBody>
  )
}

export default CoreBody

const StyledCoreBody = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;

  ${phoneDevices} {
    flex-direction: column;
    width: 100vw;
  }

  .core {
    &-left {
      border-right: 1px solid #e8e8ed;
      padding-right: 20px;
      padding: 50px;
      width: 30vw;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      ${phoneDevices} {
        width: 100vw;
        padding: 20px;
      }

      button {
        width: 100%;
      }

      &-version {
        display: flex;
        justify-content: space-between;
      }

      &-shortcuts {
        ul {
          list-style: none;
          margin: 0;
          padding: 0;

          .ant-card {
            transition: background-color color 400ms;
            margin-bottom: 10px;

            &:hover {
              opacity: 0.5;

              transition: background-color color 400ms;
            }
            &-body {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 24px 0;

              h1 {
                font-size: 20px;
                margin: 0;
              }

              p {
                margin: 0;
              }
            }
          }
        }
      }
    }

    &-right {
      width: 50vw;
      padding: 50px;

      ${phoneDevices} {
        width: 100vw;
      }

      &-links {
        li {
          margin-bottom: 25px;
        }
      }

      &-main-boxes {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
        row-gap: 20px;
        margin: 40px 0;

        ${phoneDevices} {
          flex-direction: column;
        }

        .ant-card {
          display: flex;
          align-items: center;
          margin: 0 20px;
          ${phoneDevices} {
            width: unset;
            margin-bottom: 25px;
          }
        }
      }

      .news {
        &-title {
          color: ${colors.accent};
          font-weight: bolder;
        }

        &-link {
          font-size: 25px;
          color: black;

          &:hover {
            opacity: 0.5;
          }
        }
      }
    }
  }

  .shortcut-text-wrap {
    display: flex;
    flex-direction: column;
    width: 80%;
  }
`
