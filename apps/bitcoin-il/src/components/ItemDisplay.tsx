import { Divider } from 'antd'
import * as React from 'react'
import styled from 'styled-components'

import { ItemDisplayProps } from '../utils/interfaces'

const ItemDisplay: React.FC<ItemDisplayProps> = ({
  name,
  logo,
  description,
  url,
  className
}) => {
  return (
    <React.Fragment>
      <Divider />
      <StyledItemDisplay className={`item-display ${className || ''}`}>
        {logo ? (
          <div className="item-display-logo">
            <img src={logo} alt={name || 'This is a logo'} />
          </div>
        ) : null}
        {name ? <h4 className="exchange-name-heading-four">{name}</h4> : null}
        {() => console.log('🇬🇧🇬🇧🇬🇧', description)}
        <span className="exchange-description">
          {description ? `${description}` : null}
        </span>
        {url ? (
          <div className="links">
            <a href={url}>{url}</a>
          </div>
        ) : null}
      </StyledItemDisplay>
    </React.Fragment>
  )
}

const StyledItemDisplay = styled.div`
  #span-subItem {
  }
  .span-display-block {
    display: block;
  }

  .margin-bottom-wrap {
  }

  .margin-bottom-span {
  }

  .exchange-name-heading-four {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .exchange-description {
    grid-column-start: span 4;
  }
  &.item-display {
    @media only screen and (max-width: 600px) {
      display: unset;

      img {
        height: 100px;
        width: 100px;
      }
    }

    display: grid;
    grid-template-areas:
      'name name name logo'
      'description description description description'
      'links links links links';
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 58px 1fr 1fr 1fr;

    > .item-display-logo {
      grid-area: logo;
      > img {
        max-height: 100%;
        object-fit: contain;
      }
    }
    > h4 {
      grid-area: name;
      margin: 0;
      align-self: end;
    }
    > p {
      grid-area: description;
    }
    > .links {
      grid-area: links;

      a {
        word-wrap: break-word;
      }
    }
  }
`

export default ItemDisplay
