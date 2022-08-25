import * as React from 'react'

// @ts-ignore
import { ReactComponent as LogoSVG } from '../img/logo.svg'
import { LogoProps } from '../utils/interfaces'

const Logo: React.FC<LogoProps> = ({ props, isDark, isHeader }) => {
  const [size, setSize] = React.useState(500)

  React.useEffect(() => {
    if (window.innerWidth < 500) setSize(window.innerWidth - 40)

    const resizeHandler = () => {
      if (window.innerWidth < 500) setSize(window.innerWidth - 40)
    }

    window.addEventListener('resize', resizeHandler)

    return () => window.removeEventListener('resize', resizeHandler)
  }, [])

  return <LogoSVG id="Logo.tsx" width={isHeader ? 130 : size} {...props} />
}

export default Logo
