import * as React from 'react'
import styled from 'styled-components'

import { DevelopersProps } from '../utils/interfaces'
import { FormattedMessage } from './FormattedMessageWithHover'

// import TableOfConttentsScrollTracked from './TableOfContentsScrollTracked'

const Developers: React.FC<DevelopersProps> = ({}) => {
  return (
    <StyledDevelopers id="Developers">
      <h1>
        <FormattedMessage
          id={`exchanges.developers.heading`}
          defaultMessage={`All of the resources and information regarding bitcoin development as accessible on the original developer.bitcoin.org website and is highly recommended resource if you want to learn how to interact with the Bitcoin or Bitcoin Israel blockchain, construct valid transaction, and create compatible wallets and other software.`}
          description={`developers.heading`}
        />
      </h1>
      {/* <TableOfContentsScrollTracked items={developersData} /> */}
    </StyledDevelopers>
  )
}

export default Developers

const StyledDevelopers = styled.div`
  h1 {
    padding: 200px;
  }
`
