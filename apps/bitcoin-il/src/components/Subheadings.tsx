import * as React from 'react'

import ico_angle from '../img/ico_angle_black.svg'
import { SubHeadingProps } from '../utils/interfaces'

const SubHeadings = (props: SubHeadingProps): JSX.Element => {
  const {
    i,
    item,
    elInView,
    handleRef,
    handleOpenSubmenu,
    openSubmenus,
    isSubmenuOpen,
    scrollToRightSideElement
  } = props

  // console.log('WE ARE SUBHEADINGS', item)
  return (
    <div
      key={`subhead-${i}`}
      className="toc-scroll-tracked-left-has-subheadings submenu-title"
    >
      <span
        className={`toc-scroll-tracked-left-has-subheadings-heading left-title ${
          item.key === elInView ? 'active-toc-item' : ''
        }`}
        // @ts-ignore
        // ref={handleRef}
        ref={(ref) => handleRef(ref, true, item)}
        onClick={() => {
          handleOpenSubmenu(item.key)
          // scrollToRightSideElement(item.key)
        }}
        // key={i}
      >
        {item.categoryHeading}
        <img
          src={ico_angle}
          className={`toc-scroll-tracked-left-has-subheadings-heading-arrow ${
            openSubmenus.includes(item.key) ? 'open-arrow' : ''
          }`}
        />
      </span>
      <div
        className={`toc-scroll-tracked-left-has-subheadings-foldable ${
          isSubmenuOpen(item.key) ? `foldable-open` : `foldable-closed`
        }`}
      >
        {item.subHeadings?.map((subItem, i) => {
          return (
            <span
              id={`span-subItem`}
              className={`toc-scroll-tracked-left-has-subheadings-heading-title left-subtitle ${
                subItem.key === elInView ? 'active-toc-item' : ''
              }`}
              ref={(ref) => handleRef(ref, true, subItem, item.key)}
              key={`item-sub${i}`}
              onClick={() => {
                scrollToRightSideElement(subItem.key)
              }}
            >
              👻👻👻
              {subItem.categoryHeading}
              {subItem.hasSubheadings &&
                subItem.subHeadings?.length &&
                subItem.subHeadings.map((subSubItem, ssi) => (
                  <SubHeadings
                    key={`ssi-${subSubItem.key}-${i}`}
                    i={ssi}
                    item={subSubItem}
                    elInView={elInView}
                    handleRef={handleRef}
                    handleOpenSubmenu={handleOpenSubmenu}
                    openSubmenus={openSubmenus}
                    isSubmenuOpen={isSubmenuOpen}
                    scrollToRightSideElement={scrollToRightSideElement}
                  />
                ))}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default SubHeadings
