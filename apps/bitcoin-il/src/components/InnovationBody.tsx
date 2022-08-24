import { Col, Grid, Row } from 'antd'
import * as React from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'

import { innovationCards } from '../data/InnovationData'
import { colors } from '../theme/colors'
import { InnovationBodyProps } from '../utils/interfaces'
import CardsDisplay from './CardsDisplay'
import { FormattedMessage } from './FormattedMessageWithHover'

const InnovationBody: React.FC<InnovationBodyProps> = ({}) => {
  const intl = useIntl()

  const paragraphs = React.useMemo(
    () =>
      Object.entries(intl.messages)
        .filter(([k]) => k.match(/^innovation\.why\-clone.paragraph\.[0-9]+/))
        .sort(([a], [b]) => (a > b ? 1 : -1)),
    [intl.messages]
  )

  return (
    <StyledInnovationBody id="IndividualsBody">
      <Row>
        <Col span={6} />
        <Col span={12}>
          <h2 className="individuals-body-main-title">
            <FormattedMessage
              id="innovation.why-clone.title"
              defaultMessage="Why Clone?"
            />
          </h2>
          {paragraphs.length > 0 &&
            paragraphs.map(([key, value]) => (
              <p key={key} className="individuals-body-p">
                <FormattedMessage id={key} defaultMessage={value} />
              </p>
            ))}
        </Col>
      </Row>
      <hr />
      <CardsDisplay cards={innovationCards} />
    </StyledInnovationBody>
  )
}

export default InnovationBody

const StyledInnovationBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;

  .individuals-body-main-title {
    span {
      font-size: 40px;
      color: ${colors.accent};
    }
  }

  .individuals-body-p {
    font-size: 18px;
  }

  .individuals-button {
    margin: 50px;
    align-self: center;

    button {
      padding: 35px;
    }
  }
`
