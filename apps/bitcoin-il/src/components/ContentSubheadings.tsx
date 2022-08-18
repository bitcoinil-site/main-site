import * as React from 'react'

import { ContentSubheadingsProps } from '../utils/interfaces'

const ContentSubHeadings = (props: ContentSubheadingsProps): JSX.Element => {
  const { i, item, handleRef } = props

  return (
    <React.Fragment key={i}>
      <div className="margin-bottom-wrap">
        <span
          id={item.key}
          ref={(ref) => handleRef(ref, false, item)}
          className="accented-title toc-scroll-tracked-right-item-heading-has-subheadings right-title submenu-title span-display-block margin-bottom-span"
        >
          {item.categoryHeading}🦀
        </span>
      </div>
      <div className="toc-scroll-tracked-right-item-heading-has-subheadings-subheadings-wrap">
        {item.subHeadings?.map((subItem, i) => {
          return (
            <React.Fragment key={i}>
              <span
                id={subItem.key}
                ref={(ref) => handleRef(ref, false, subItem, item.key)}
                className="toc-scroll-tracked-right-item-heading-has-subheadings-subheadings-wrap-title right-title span-display-block"
                style={{ display: 'block' }}
              >
                {/* {subItem.categoryHeading}🌤🌤🌤 */}
              </span>
              <span className="toc-scroll-tracked-right-item-heading-has-subheadings-subheadings-wrap-body right-subtitle">
                {subItem.body ? (
                  <>
                    <subItem.body />
                  </>
                ) : subItem.hasSubheadings ? (
                  <ContentSubHeadings
                    i={i}
                    item={subItem}
                    handleRef={handleRef}
                  />
                ) : (
                  <>No Body</>
                )}
              </span>
            </React.Fragment>
          )
        })}
      </div>
    </React.Fragment>
  )
}

export default ContentSubHeadings
