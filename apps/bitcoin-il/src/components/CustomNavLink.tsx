import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

import { currentlySelectedLanguageState } from '../state/state'
import { CustomNavLinkProps } from '../utils/interfaces'

const CustomNavLink: React.FC<CustomNavLinkProps> = ({
  to,
  children,
  style,
  className
}) => {
  const atomLang = useRecoilValue(currentlySelectedLanguageState)

  const languageCode = atomLang.language === 'en' ? '' : `/${atomLang.language}`

  return (
    <StyledCustomNavLink
      className={className}
      style={style}
      to={`${languageCode}${to}`}
    >
      <span className={className}> {children}</span>
    </StyledCustomNavLink>
  )
}

export default CustomNavLink

const StyledCustomNavLink = styled(NavLink)`
  width: 100vw;
  color: unset;

  &:hover {
    color: unset;
  }
`
