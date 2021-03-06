import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import IndividualImage from '../img/ico_individuals.svg'
import BusinessImage from '../img/ico_business.svg'
import DevelopersImage from '../img/ico_developers.svg'
import OverviewBG from '../img/overview-bg.svg'
import { phoneDevices } from '../utils/breakpoints'
import { BoxProps, QuickOverviewBoxProps } from '../utils/interfaces'
import QuickOverviewBox from './QuickOverviewBox'

const boxes: BoxProps[] = [
  {
    index: 0,
    imgSrc: IndividualImage,
    id: 'individuals',
    titleDefaultMessage: (
      <FormattedMessage
        id={`box.individuals.title`}
        defaultMessage={`Individuals`}
        description={`box.individuals.title`}
      />
    ),

    titleDescription: 'individuals',
    subtitleDefaultMessage: (
      <FormattedMessage
        id={`box.individuals.subtext`}
        defaultMessage={`Learn More`}
        description={`box.individuals.subtext`}
      />
    ),
    subtitleDescription: 'learn more',
    link: '/individuals'
  },
  {
    index: 0,
    imgSrc: BusinessImage,
    id: 'businesses',
    titleDefaultMessage: (
      <FormattedMessage
        id={`box.business.title`}
        defaultMessage={`Businesses`}
        description={`box.business.title`}
      />
    ),

    titleDescription: 'businesses',
    subtitleDefaultMessage: (
      <FormattedMessage
        id={`box.business.subtext`}
        defaultMessage={`Learn More`}
        description={`box.business.subtext`}
      />
    ),
    subtitleDescription: 'learn more',
    link: '/businesses'
  },
  {
    index: 0,
    imgSrc: DevelopersImage,
    id: 'developers',
    titleDefaultMessage: (
      <FormattedMessage
        id={`box.devs.title`}
        defaultMessage={`Developers`}
        description={`box.devs.title`}
      />
    ),

    titleDescription: 'developers',
    subtitleDefaultMessage: (
      <FormattedMessage
        id={`box.devs.subtext`}
        defaultMessage={`Learn More`}
        description={`box.business.subtext`}
      />
    ),

    subtitleDescription: 'learn more',
    link: '/developers'
  }
]

export default function QuickOverview(): JSX.Element {
  const baseFormattedMessageId: String = 'page.home.quick-overview'
  return (
    <StyledQuickOverview id="QuickOverview">
      <h1>
        <FormattedMessage
          id={`${baseFormattedMessageId}.title`}
          defaultMessage={`Get A Quick Overview For`}
          description={`QuickOverview`}
        />
      </h1>
      <div className="boxes">
        {boxes.map((boxInfo: QuickOverviewBoxProps, i: number) => {
          const {
            imgSrc,
            index,
            id,
            titleDefaultMessage,
            titleDescription,
            subtitleDefaultMessage,
            subtitleDescription,
            link
          } = boxInfo
          return (
            <QuickOverviewBox
              key={i}
              index={index}
              imgSrc={imgSrc}
              id={id}
              titleDefaultMessage={titleDefaultMessage}
              titleDescription={titleDescription}
              subtitleDefaultMessage={subtitleDefaultMessage}
              subtitleDescription={subtitleDescription}
              baseFormattedMessage={baseFormattedMessageId}
              link={link}
            />
          )
        })}
      </div>
    </StyledQuickOverview>
  )
}

const StyledQuickOverview = styled.div`
  /* background-color: grey; */
  margin-top: 50px;
  padding: 300px 0 60px 0;
  background: url(${OverviewBG}) top no-repeat;
  background-size: cover;

  h1 {
    color: white;
  }

  .boxes {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    ${phoneDevices} {
      flex-direction: column;
    }
  }

  width: 100vw;
`
