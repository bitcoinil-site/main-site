import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import { QuickOverviewBox } from './QuickOverview'
import { NavLink } from 'react-router-dom'

const QuickOverviewBox: React.FC<QuickOverviewBox> = ({
  index,
  id,
  imgSrc,
  titleDefaultMessage,
  titleDescription,
  subtitleDefaultMessage,
  subtitleDescription,
  baseFormattedMessage,
  link
}) => {
  console.log(imgSrc)
  return (
    <NavLink to={link}>
      <StyledQuickOverviewBox id="QuickOverviewBox">
        <img src={imgSrc} />
        <div className="box-text">
          <h4>
            <FormattedMessage
              id={`${baseFormattedMessage}.individuals`}
              defaultMessage={titleDefaultMessage}
              description={titleDescription}
            />
          </h4>
          <p>
            <FormattedMessage
              id={`${baseFormattedMessage}.individuals.learnmore`}
              defaultMessage={subtitleDefaultMessage}
              description={subtitleDescription}
            />
          </p>
        </div>
      </StyledQuickOverviewBox>
    </NavLink>
  )
}

export default QuickOverviewBox

const StyledQuickOverviewBox = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
  margin: 20px;
  width: 20vw;
  align-items: center;
  justify-content: space-around;
  padding: 30px;

  &:hover {
    opacity: 0.6;
  }

  .box-text {
    display: flex;
    flex-direction: column;

    h4 {
      color: white;
      font-weight: bolder;
    }

    p {
      color: grey;
    }
  }
`
