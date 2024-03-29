import { Divider } from 'antd'
import * as React from 'react'
import styled from 'styled-components'

import {
  howToAcceptTimelineItems,
  howToUseTimelineItems
} from '../data/GettingStartedData'
import { colors } from '../theme/colors'
import { flashElement, scrollToElement } from '../util/util'
import { phoneDevices } from '../utils/breakpoints'
import { GettingStartedBodyProps } from '../utils/interfaces'
import { FormattedMessage } from './FormattedMessageWithHover'
import Timeline from './Timeline'

const GettingStartedBody: React.FC<GettingStartedBodyProps> = ({}) => {
  const howToUseRef = React.createRef<HTMLHeadingElement>()
  const acceptRef = React.createRef<HTMLHeadingElement>()

  document.body.style.overflowX = 'hidden'

  return (
    <StyledGettingStartedBody id="GettingStartedBody">
      <div className="getting-started-fly-to">
        <p
          onClick={() => {
            scrollToElement(howToUseRef.current)
            flashElement(howToUseRef.current)
          }}
          className="getting-started-fly-to-option"
        >
          <FormattedMessage
            id={`GettingStarted.howToUse`}
            defaultMessage={`How To Use BitCoin IL`}
            description={`id`}
          />
        </p>
        <p
          onClick={() => {
            flashElement(acceptRef.current)
            scrollToElement(acceptRef.current)
          }}
          className="getting-started-fly-to-option"
        >
          <FormattedMessage
            id={`gettingStarted.howToAccept`}
            defaultMessage={`How to Accept Bitcoin Il`}
            description={`howToAccept`}
          />
        </p>
      </div>
      <h1 ref={howToUseRef} className="getting-started-title">
        <FormattedMessage
          id={`page.getting-started-how-to-use`}
          defaultMessage={`How To Use Bitcoin`}
          description={`How To Start`}
        />
      </h1>
      <Timeline items={howToUseTimelineItems} />
      <Divider />
      <h1 ref={acceptRef} className="getting-started-title">
        <FormattedMessage
          id={`page.getting-started-how-to-accept`}
          defaultMessage={`How To Accept Bitcoin`}
          description={`How To Accept`}
        />
      </h1>
      <Timeline items={howToAcceptTimelineItems} />
    </StyledGettingStartedBody>
  )
}

export default GettingStartedBody

const StyledGettingStartedBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .getting-started-fly-to {
    width: 100%;
    justify-content: center;
    display: flex;
    border-bottom: 1px solid #e1e1e1;
    margin-top: 50px;

    ${phoneDevices} {
      display: none;
    }

    &-option {
      border-bottom: 3px solid transparent;
      margin: 0;
      padding: 20px;
      font-size: 18px;
      cursor: pointer;
      color: var(--editor-foreground);

      &:hover {
        opacity: 0.7;
        border-bottom: 2px solid ${colors.accent};
      }

      &:last-child {
        margin-left: 50px;
      }
    }
  }

  .getting-started-title {
    color: ${colors.accent};
    font-weight: bolder;
    margin: 70px 0;
  }

  .vertical-timeline-element-content {
    padding-top: 0;
    border: none !important;
    background-color: transparent !important;

    &-arrow {
      border: none;
      height: 2px;
      background: ${colors.accent};
    }
  }
`
