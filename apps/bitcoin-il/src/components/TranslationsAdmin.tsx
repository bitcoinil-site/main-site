import * as React from 'react'
import styled from 'styled-components'
import { TranslationsAdminProps } from '../utils/interfaces'

const TranslationsAdmin: React.FC<TranslationsAdminProps> = ({}) => {
  return (
    <StyledTranslationsAdmin id="TranslationsAdmin">
      <h1>TranslationsAdmin</h1>
    </StyledTranslationsAdmin>
  )
}

export default TranslationsAdmin

const StyledTranslationsAdmin = styled.div``
