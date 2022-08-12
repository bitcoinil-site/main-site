import * as React from 'react'
import styled from 'styled-components'

import ico_notanon from '../img/ico_not-anon.svg'
import ico_payments from '../img/ico_payments.svg'
import ico_price from '../img/ico_prices.svg'
import ico_secure from '../img/ico_secure.svg'
import ico_experimental from '../img/ico_experimental.svg'
import ico_taxes from '../img/ico_taxes.svg'
import { AlternatingTwoColumnRowProps } from '../utils/interfaces'
import AlternatingTwoColumnRow from './AlternatingTwoColumnRow'
import CustomNavLink from './CustomNavLink'
import { FormattedMessage } from './FormattedMessageWithHover'

export interface YouShouldKnowProps {}

export const youShouldKnowItems: AlternatingTwoColumnRowProps[] = [
  {
    index: 0,
    imgSrc: ico_secure,
    titleText: (
      <FormattedMessage
        id={`exchanges.id`}
        defaultMessage={`Securing your wallet`}
        description={`id`}
      />
    ),
    bodyText: (
      <FormattedMessage
        id={`exchanges.id`}
        defaultMessage={`Like in real life, your wallet must be secured. Bitcoin makes it possible to transfer value anywhere in a very easy way and it allows you to be in control of your money. Such great features also come with great security concerns. At the same time, Bitcoin can provide very high levels of security if used correctly. Always remember that it is your responsibility to adopt good practices in order to protect your money. Read more about securing your wallet.`}
        description={`id`}
      />
    )
  },
  {
    index: 0,
    imgSrc: ico_price,
    titleText: (
      <FormattedMessage
        id={`exchanges.id`}
        defaultMessage={`BitCoin Il Price Is Volatile`}
        description={`id`}
      />
    ),
    bodyText: (
      <FormattedMessage
        id={`exchanges.id`}
        defaultMessage={`The price of a bitcoin can unpredictably increase or decrease over a short period of time due to its young economy, novel nature, and sometimes illiquid markets. Consequently, keeping your savings with Bitcoin is not recommended at this point. Bitcoin should be seen like a high risk asset, and you should never store money that you cannot afford to lose with Bitcoin. If you receive payments with Bitcoin, many service providers can convert them to your local currency.`}
        description={`id`}
      />
    )
  },
  {
    index: 2,
    imgSrc: ico_payments,
    titleText: (
      <FormattedMessage
        id={`exchanges.id`}
        defaultMessage={`Bitcoin payments are irreversible`}
        description={`id`}
      />
    ),
    bodyText: (
      <FormattedMessage
        id={`exchanges.id`}
        defaultMessage={`A Bitcoin transaction cannot be reversed, it can only be refunded by the person receiving the funds. This means you should take care to do business with people and organizations you know and trust, or who have an established reputation. For their part, businesses need to keep track of the payment requests they are displaying to their customers. Bitcoin can detect typos and usually won't let you send money to an invalid address by mistake, but it's best to have controls in place for additional safety and redundancy. Additional services might exist in the future to provide more choice and protection for both businesses and consumers.`}
        description={`id`}
      />
    )
  },
  {
    index: 1,
    imgSrc: ico_notanon,
    titleText: (
      <FormattedMessage
        id={`exchanges.id`}
        defaultMessage={`BitCoin Il Is Not Anonymous`}
        description={`id`}
      />
    ),
    bodyText: (
      <FormattedMessage
        id={`exchanges.id`}
        defaultMessage={`Some effort is required to protect your privacy with Bitcoin. All Bitcoin transactions are stored publicly and permanently on the network, which means anyone can see the balance and transactions of any Bitcoin address. However, the identity of the user behind an address remains unknown until information is revealed during a purchase or in other circumstances. This is one reason why Bitcoin addresses should only be used once. Always remember that it is your responsibility to adopt good practices in order to protect your privacy. Read more about protecting your privacy.`}
        description={`id`}
      />
    )
  },
  {
    index: 2,
    sideElement: (
      <table>
        <tbody>
          <tr>
            <th>Confirmations</th>
            <th>Lightweight wallets</th>
            <th>
              <CustomNavLink style={{ color: '#00b3f0' }} to={`/core`}>
                BitCoin Core
              </CustomNavLink>
            </th>
          </tr>

          <tr>
            <td>0</td>
            <td style={{ color: 'red' }} colSpan={2}>
              Only safe if you trust the person paying you
            </td>
          </tr>

          <tr>
            <td>1</td>
            <td>Somewhat reliable</td>
            <td>Mostly reliable</td>
          </tr>

          <tr>
            <td>3</td>
            <td>Mostly reliable</td>
            <td>Highly reliable</td>
          </tr>

          <tr>
            <td>6</td>
            <td colSpan={2}>
              Minimum recommendation for high-value bitcoin transfers
            </td>
          </tr>

          <tr>
            <td>30</td>
            <td colSpan={2}>
              Recommendation during <a href="/en/alerts">emergencies</a> to
              allow human intervention
            </td>
          </tr>
        </tbody>
      </table>
    ),
    titleText: (
      <FormattedMessage
        id={`exchanges.id`}
        defaultMessage={`Unconfirmed transactions aren't secure`}
        description={`id`}
      />
    ),
    bodyText: (
      <FormattedMessage
        id={`exchanges.id`}
        defaultMessage={`Transactions don't start out as irreversible. Instead, they get a confirmation score that indicates how hard it is to reverse them (see table). Each confirmation takes between a few seconds and 90 minutes, with 10 minutes being the average. If the transaction pays too low a fee or is otherwise atypical, getting the first confirmation can take much longer.`}
        description={`id`}
      />
    )
  },
  {
    index: 3,
    imgSrc: ico_experimental,
    titleText: (
      <FormattedMessage
        id={`exchanges.id`}
        defaultMessage={`Bitcoin is still experimental`}
        description={`id`}
      />
    ),
    bodyText: (
      <FormattedMessage
        id={`exchanges.id`}
        defaultMessage={`Bitcoin is an experimental new currency that is in active development. Each improvement makes Bitcoin more appealing but also reveals new challenges as Bitcoin adoption grows. During these growing pains you might encounter increased fees, slower confirmations, or even more severe issues. Be prepared for problems and consult a technical expert before making any major investments, but keep in mind that nobody can predict Bitcoin's future.`}
        description={`id`}
      />
    )
  },
  {
    index: 4,
    imgSrc: ico_taxes,
    titleText: (
      <FormattedMessage
        id={`exchanges.id`}
        defaultMessage={`Government taxes and regulations`}
        description={`id`}
      />
    ),
    bodyText: (
      <FormattedMessage
        id={`exchanges.id`}
        defaultMessage={`Bitcoin is not an official currency. That said, most jurisdictions still require you to pay income, sales, payroll, and capital gains taxes on anything that has value, including bitcoins. It is your responsibility to ensure that you adhere to tax and other legal or regulatory mandates issued by your government and/or local municipalities.`}
        description={`id`}
      />
    )
  }
]

const YouShouldKnow: React.FC<YouShouldKnowProps> = ({}) => {
  return (
    <StyledYouShouldKnow id="YouShouldKnow">
      {youShouldKnowItems.map((item, i) => {
        return (
          <AlternatingTwoColumnRow
            index={i}
            key={i}
            imgSrc={item.imgSrc}
            titleText={item.titleText}
            bodyText={item.bodyText}
            sideElement={item.sideElement ? item.sideElement : null}
          />
        )
      })}
    </StyledYouShouldKnow>
  )
}

export default YouShouldKnow

const StyledYouShouldKnow = styled.div``