/* eslint-disable */

import React from 'react'

import AtomPopover, {atomPopoverPlacements} from '../../../../components/atom/popover/src'
import './index.scss'

import {
  iconMenuHamburguer,
  HtmlTooltipDecember,
  ContentOneLine,
  ContentTwoLines,
  ContentHelloWorld,
  HtmlPopoverBody,
  HtmlPopoverHeader
} from './components'

const BASE_CLASS_DEMO = 'DemoAtomPopover'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`
const CLASS_DEMO_DISPLAY = `${BASE_CLASS_DEMO}-display`

const CLASS_DEMO_PLACEMENT = `${BASE_CLASS_DEMO}-placement`
const CLASS_DEMO_PLACEMENT_TOP = `${CLASS_DEMO_PLACEMENT}-top`
const CLASS_DEMO_PLACEMENT_RIGHT = `${CLASS_DEMO_PLACEMENT}-right`
const CLASS_DEMO_PLACEMENT_BOTTOM = `${CLASS_DEMO_PLACEMENT}-bottom`
const CLASS_DEMO_PLACEMENT_LEFT = `${CLASS_DEMO_PLACEMENT}-left`

const Demo = () => (
  <div className={BASE_CLASS_DEMO}>
    <h1>
      <code>AtomPopover</code>
    </h1>

    <div className={CLASS_DEMO_SECTION}>
      <h3>Basic Usage</h3>
      <p>
        <code>AtomPopover</code> will use the <code>title</code> (plain text) of
        the wrapped element as content for the tooltip
      </p>
      <div className={CLASS_DEMO_DISPLAY}>
        <p>
          Lorem ipsum dolor sit amet{' '}
          <AtomPopover
            content={<HtmlPopoverBody />}
            header={<HtmlPopoverHeader />}
            placement={atomPopoverPlacements.BOTTOM}
          >
            <strong tabIndex="1">popover december</strong>
          </AtomPopover>
        </p>
      </div>
    </div>

    <div className={CLASS_DEMO_SECTION}>
      <h3>
        Positioning popover with <code>placement</code>
      </h3>
      <div>
        <div className={CLASS_DEMO_DISPLAY}>
          <ul className={CLASS_DEMO_PLACEMENT}>
            {/* --- top --- */}
            <li className={CLASS_DEMO_PLACEMENT_TOP}>
              <AtomPopover
                placement={atomPopoverPlacements.TOP_START}
                content={<ContentOneLine text="top-start" />}
              >
                <strong tabIndex="5">top-start</strong>
              </AtomPopover>

              <AtomPopover
                placement={atomPopoverPlacements.TOP}
                content={<ContentOneLine text="top" />}
              >
                <strong tabIndex="6">top</strong>
              </AtomPopover>
              <AtomPopover
                placement={atomPopoverPlacements.TOP_END}
                content={<ContentOneLine text="top-end" />}
              >
                <strong tabIndex="7">top-end</strong>
              </AtomPopover>
            </li>

            {/* --- right --- */}
            <li className={CLASS_DEMO_PLACEMENT_RIGHT}>
              <AtomPopover
                placement={atomPopoverPlacements.RIGHT_START}
                content={<ContentTwoLines text="right-start" />}
              >
                <strong tabIndex="8" style={{textAlign: 'right'}}>
                  right-start
                </strong>
              </AtomPopover>
              <AtomPopover
                placement={atomPopoverPlacements.RIGHT}
                content={<ContentTwoLines text="right" />}
              >
                <strong tabIndex="9" style={{textAlign: 'right'}}>
                  right
                </strong>
              </AtomPopover>
              <AtomPopover
                placement={atomPopoverPlacements.RIGHT_END}
                content={<ContentTwoLines text="right-end" />}
              >
                <strong tabIndex="10" style={{textAlign: 'right'}}>
                  right-end
                </strong>
              </AtomPopover>
            </li>

            {/* --- bottom --- */}
            <li className={CLASS_DEMO_PLACEMENT_BOTTOM}>
              <AtomPopover
                placement={atomPopoverPlacements.BOTTOM_START}
                content={<ContentOneLine text="bottom-start" />}
              >
                <strong tabIndex="11">bottom-start</strong>
              </AtomPopover>
              <AtomPopover
                placement={atomPopoverPlacements.BOTTOM}
                content={<ContentOneLine text="bottom" />}
              >
                <strong tabIndex="12">bottom</strong>
              </AtomPopover>
              <AtomPopover
                placement={atomPopoverPlacements.BOTTOM_END}
                content={<ContentOneLine text="bottom-end" />}
              >
                <strong tabIndex="13">bottom-end</strong>
              </AtomPopover>
            </li>

            {/* --- left --- */}
            <li className={CLASS_DEMO_PLACEMENT_LEFT}>
              <AtomPopover
                placement={atomPopoverPlacements.LEFT_START}
                content={<ContentTwoLines text="left-start" />}
              >
                <strong tabIndex="14">left-start</strong>
              </AtomPopover>
              <AtomPopover
                placement={atomPopoverPlacements.LEFT}
                content={<ContentTwoLines text="left" />}
              >
                <strong tabIndex="15">left</strong>
              </AtomPopover>
              <AtomPopover
                placement={atomPopoverPlacements.LEFT_END}
                content={<ContentTwoLines text="left-end" />}
              >
                <strong tabIndex="16">left-end</strong>
              </AtomPopover>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default Demo
