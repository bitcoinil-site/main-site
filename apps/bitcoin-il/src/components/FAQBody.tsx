import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'

import { FAQ, useFAQs } from '../data/FAQData'
import { FAQBodyProps } from '../utils/interfaces'
import TableOfContentsScrollTracked from './TableOfContentsScrollTracked'

const FAQBody: React.FC<FAQBodyProps> = ({}) => {
  const faqs = useFAQs()

  console.log('faqs:', faqs)

  const items = React.useMemo(() => {
    const ts = Object.entries(faqs).map(([qid, { question, answer }]) => ({
      categoryHeading: (
        <FormattedMessage
          id={`faqs.question.${qid}.question`}
          defaultMessage={question}
        />
      ),
      hasSubheadings: false,
      bodyWithoutSubheadings: [
        {
          body: (
            <FormattedMessage
              id={`faqs.question.${qid}.answer`}
              defaultMessage={answer}
            />
          )
        }
      ],
      key: qid
    }))

    return ts
  }, [faqs])
  console.log('items:', items)

  return (
    <StyledFAQBodyTwo id="FAQBodyTwo">
      <TableOfContentsScrollTracked items={items} />
    </StyledFAQBodyTwo>
  )
}

export default FAQBody

const StyledFAQBodyTwo = styled.div``
