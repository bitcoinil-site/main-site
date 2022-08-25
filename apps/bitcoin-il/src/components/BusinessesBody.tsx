import * as React from 'react'
import styled from 'styled-components'

import { businessCards } from '../data/BusinessesBodyData'
import { phoneDevices } from '../utils/breakpoints'
import { BusinessBodyProps } from '../utils/interfaces'
import SiteButton from './BitcoinSiteButton'
import CardsDisplay from './CardsDisplay'
import CustomNavLink from './CustomNavLink'
import { FormattedMessage } from './FormattedMessageWithHover'

const BusinessBody: React.FC<BusinessBodyProps> = ({}) => {
  return (
    <StyledBusinessBody id="IndividualsBody">
      <CardsDisplay cards={businessCards} />
      <div className="business-button">
        <CustomNavLink
          className="align-button-to-center-business"
          to="/getting-started"
        >
          <SiteButton type="primary">
            <FormattedMessage
              id={`businesses.get-started-button`}
              defaultMessage={`Get Started With BitCoin Il`}
              description={`get-started-button`}
            />
          </SiteButton>
        </CustomNavLink>
      </div>
    </StyledBusinessBody>
  )
}

export default BusinessBody

const StyledBusinessBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;

  .business-button {
    width: 100%;
    margin-top: 75px;
  }

  .align-button-to-center-business {
    /* width: 100vw; */
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
  }
`
