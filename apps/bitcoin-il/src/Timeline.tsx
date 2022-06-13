import * as React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import styled from 'styled-components'

interface TimelineCompProps {
  items: JSX.Element[]
}

const TimelineComp: React.FC<TimelineCompProps> = ({ items }) => {
  if (!items) return null
  return (
    <StyledTimelineComp id="TimelineComp">
      <VerticalTimeline>
        {items.map((item: JSX.Element, i: number) => {
          return (
            <VerticalTimelineElement
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

export default TimelineComp

const StyledTimelineComp = styled.div`
  width: 100vw;

  .vertical-timeline-element-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      margin: 0;
      font-weight: bolder;
    }
  }

  .vertical-timeline-element-content-arrow {
    height: 10px;
    width: 32px;
    background: black;
  }

  .vertical-timeline-element-content {
    box-shadow: none;
  }
`