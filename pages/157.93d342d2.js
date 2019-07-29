(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{cpHM:function(i,n){i.exports="import React from 'react'\nimport cx from 'classnames'\nimport * as ReactSticky from 'react-stickup'\n\nconst BASE_CLASS = 'sui-BehaviorSticky'\nconst CLASS_ANIMATE = `${BASE_CLASS}--animate`\n\nconst BehaviorStickyProvider = ReactSticky.StickyProvider\n\n// eslint-disable-next-line react/prop-types\nconst BehaviorSticky = ({children, animate, ...props}) => {\n  return (\n    <ReactSticky.Sticky className={BASE_CLASS} {...props}>\n      {({isSticky}) => (\n        <div className={cx({[CLASS_ANIMATE]: isSticky && animate})}>\n          {children}\n        </div>\n      )}\n    </ReactSticky.Sticky>\n  )\n}\n\nBehaviorSticky.displayName = 'BehaviorSticky'\n\nexport default BehaviorSticky\nexport {BehaviorStickyProvider}\n"}}]);