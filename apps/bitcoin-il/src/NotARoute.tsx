import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import SiteButton from './BitcoinSiteButton'
import CustomNavLink from './CustomNavLink'
import { NotARouteProps } from './Interfaces'

const NotARoute: React.FC<NotARouteProps> = ({}) => {
  return (
    <StyledNotARoute id="NotARoute">
      <h1>404 - Page Not Found</h1>
      <CustomNavLink to="/">
        <SiteButton type="primary">Go Home</SiteButton>
      </CustomNavLink>
    </StyledNotARoute>
  )
}

export default NotARoute

const StyledNotARoute = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 300px 0;
  flex-direction: column;
`