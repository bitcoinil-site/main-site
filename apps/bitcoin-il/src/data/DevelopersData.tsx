import * as React from 'react'

import { useIntl } from 'react-intl'
import { FormattedMessage } from '../components/FormattedMessageWithHover'
import { tableOfContentItem } from '../utils/interfaces'

export const developersData: tableOfContentItem[] = [
  {
    categoryHeading: (
      <FormattedMessage
        id={`exchanges.p2p`}
        defaultMessage={`Peer-to-Peer (P2P)`}
        description={`p2p`}
      />
    ),
    hasSubheadings: false,
    isSubmenuItem: false,
    isSubmenuParent: true,
    parentMenuKey: null,
    bodyWithoutSubheadings: [
      {
        body: () => {
          const intl = useIntl()

          return (
            <div style={{ color: 'red' }}>
              {[
                'btcil-exchange.p2p.telegram',
                'btcil-exchange.p2p.cantina',
                'btcil-exchange.p2p.btcil'
              ].map((id, i) => {
                return (
                  <div className="p2p-exchange-list-item">
                    <a
                      href={intl.formatMessage({
                        id: `${id}.url`,
                        defaultMessage: 'https://some.url.com/'
                      })}
                    >
                      <FormattedMessage
                        id={`${id}.label`}
                        defaultMessage={`${id}.label`}
                        description={`${id}.label`}
                      />
                    </a>
                  </div>
                )
              })}
            </div>
          )
        }
      }
    ],
    key: 'p2p'
  },

  {
    categoryHeading: (
      <FormattedMessage
        id={`exchanges.asia`}
        defaultMessage={`Asia`}
        description={`asia`}
      />
    ),
    hasSubheadings: true,
    isSubmenuItem: false,
    isSubmenuParent: true,
    parentMenuKey: null,
    subHeadings: [
      {
        subHeadingTitle: (
          <FormattedMessage
            id={`exchanges.asia.vietnam`}
            defaultMessage={`🇻🇳 Vietnam `}
            description={`asia.vietnam`}
          />
        ),
        subHeadingBody: (
          <>
            <p>TO DO: ADD VIETNAME EXCHANGES</p>
          </>
        ),
        key: 'vietnam',
        hasSubheadings: false
      }
    ],
    key: 'asia-exchanges'
  }
]
