import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'

export interface ExchangesBodyProps {}

const ExchangesBody: React.FC<ExchangesBodyProps> = ({}) => {
  return (
    <StyledExchangesBody id="ExchangesBody">
      <h1>ExchangesBody</h1>
    </StyledExchangesBody>
  )
}

export default ExchangesBody

const StyledExchangesBody = styled.div``