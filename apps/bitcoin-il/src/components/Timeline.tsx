import 'react-vertical-timeline-component/style.min.css'

import * as React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

import { isDarkModeState } from '../state/state'
import { colors } from '../theme/colors'
import { phoneDevices } from '../utils/breakpoints'
import { TimelineCompProps } from '../utils/interfaces'

const Timeline: React.FC<TimelineCompProps> = ({ items }) => {
  if (!items) return null

  const dark = useRecoilValue(isDarkModeState)

  return (
    <StyledTimelineComp id="TimelineComp">
      <VerticalTimeline animate={false}>
        {items.map((item: JSX.Element, i: number) => {
          return (
            <VerticalTimelineElement
              className={dark ? 'dark' : 'light'}
              icon={<h1 className="icon">{i + 1}</h1>}
              key={i}
            >
              {item}
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </StyledTimelineComp>
  )
}

export default Timeline

const StyledTimelineComp = styled.div`
  overflow: hidden;

  .vertical-timeline-element {
    ${phoneDevices} {
      width: 82vw;
    }
  }

  .vertical-timeline-element-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${colors.accent};

    h1 {
      margin: 0;
      font-weight: bolder;
    }
  }

  .vertical-timeline-element-content-arrow {
    height: 10px;
    width: 32px;
    background: black;

    ${phoneDevices} {
      width: 17px;
    }
  }

  .vertical-timeline-element-content {
    box-shadow: none;
  }

  .dark {
    .vertical-timeline-element-content {
      background: #3d3c3c;
      border: 1px solid #a59e9e;
    }
  }
  .light {
    .vertical-timeline-element-content {
      background: white;
      border: 1px solid #a59e9e;
    }
  }
`
