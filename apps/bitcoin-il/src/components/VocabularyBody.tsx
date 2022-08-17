import * as React from 'react'
import styled from 'styled-components'

import { terms as oldTerms, useVocabulary } from '../data/VocabularyBodyData'
import { tableOfContentItem, VocabularyProps } from '../utils/interfaces'
import TableOfContentsScrollTracked from './TableOfContentsScrollTracked'

const Vocabulary: React.FC<VocabularyProps> = ({}) => {
  const words = useVocabulary()
  console.log('words from useVoca:', words)

  const terms = React.useMemo(() => {
    const ts = words.map(({ word, definition }) => ({
      categoryHeading: <>{word}</>,
      bodyWithoutSubheadings: [
        {
          body: definition
        }
      ],
      key: word,
      hasSubheadings: false
    }  as tableOfContentItem))

    return ts
  }, [words])

  const spacer = {
    categoryHeading: <><hr /></>,
  } as tableOfContentItem

  return (
    <StyledVocabulary id="Vocabulary">
      <TableOfContentsScrollTracked items={[...terms, spacer, ...oldTerms]} />
    </StyledVocabulary>
  )
}

export default Vocabulary

const StyledVocabulary = styled.div``
