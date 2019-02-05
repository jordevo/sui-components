/* eslint-disable */

import React from 'react'

import AtomTooltip, {
  atomTooltipPlacements
} from '../../../../components/atom/tooltip/src'
import './index.scss'

import MoleculeTabs from '@schibstedspain/sui-molecule-tabs'

import {
  iconMenuHamburguer,
  HtmlTooltipDecember,
  ContentOneLine,
  ContentTwoLines,
  ContentHelloWorld,
  HtmlPopoverDecember
} from './components'

const BASE_CLASS_DEMO = 'DemoAtomTooltip'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`
const CLASS_DEMO_DISPLAY = `${BASE_CLASS_DEMO}-display`

const CLASS_DEMO_PLACEMENT = `${BASE_CLASS_DEMO}-placement`
const CLASS_DEMO_PLACEMENT_TOP = `${CLASS_DEMO_PLACEMENT}-top`
const CLASS_DEMO_PLACEMENT_RIGHT = `${CLASS_DEMO_PLACEMENT}-right`
const CLASS_DEMO_PLACEMENT_BOTTOM = `${CLASS_DEMO_PLACEMENT}-bottom`
const CLASS_DEMO_PLACEMENT_LEFT = `${CLASS_DEMO_PLACEMENT}-left`

function handleChange(_, {id}) {
  document.querySelectorAll(`.tabContainers`).forEach(element => {
    if (element.id === id) element.classList.remove('hidden')
    else element.classList.add('hidden')
  }) 
}

const Demo = () => (
  <div className={BASE_CLASS_DEMO}>
    <h1>
      <code>AtomTooltip</code>
    </h1>

    <MoleculeTabs
      items={[{label: 'Tooltip', id: 'tooltipContainer'}, {label: 'Popover', id: 'popoverContainer'}]}
      handleChange={handleChange}
      activeTab={0}
    />

    <div id="popoverContainer" className="tabContainers hidden">
      <h2>Popover</h2>
      <div className={CLASS_DEMO_SECTION} style={{height: '600px'}}>
        <h3>Basic Usage</h3>
        <p>
          <code>AtomTooltip</code> will use the <code>title</code> (plain text)
          of the wrapped element as content for the tooltip
        </p>
        <div className={CLASS_DEMO_DISPLAY}>
          <p>
            Lorem ipsum dolor sit amet{' '}
            <AtomTooltip
              content={<HtmlPopoverDecember />}
              placement={atomTooltipPlacements.RIGHT}
              popover
            >
              <strong tabIndex="1">popover december</strong>
            </AtomTooltip>
          </p>
        </div>
      </div>
    </div>

    <div id="tooltipContainer" className="tabContainers">
      <h2>Tooltip</h2>
      <h3>Basic Usage</h3>
      <p>
        <code>AtomTooltip</code> will use the <code>title</code> (plain text) of
        the wrapped element as content for the tooltip
      </p>
      <div className={CLASS_DEMO_DISPLAY}>
        <p>
          Lorem ipsum dolor sit amet{' '}
          <AtomTooltip>
            <u title="Last month of this year 2018" tabIndex="1">
              december
            </u>
          </AtomTooltip>
        </p>
      </div>

      <h3>HTML for content of the tooltip </h3>
      <p>
        We can also set HTML as content of the Tooltip by passing a React
        component to the prop <code>content</code> of <code>AtomTooltip</code>.
      </p>
      <small>
        By default it will use the <code>title</code> of the wrapped element as
        content of the tooltip
      </small>
      <div className={CLASS_DEMO_DISPLAY}>
        <p>
          Lorem ipsum dolor sit amet{' '}
          <AtomTooltip content={<HtmlTooltipDecember />}>
            <strong tabIndex="1">december</strong>
          </AtomTooltip>
        </p>
      </div>
      <h3>
        Positioning tooltip with <code>placement</code>
      </h3>
      <div>
        <div className={CLASS_DEMO_DISPLAY}>
          <ul className={CLASS_DEMO_PLACEMENT}>
            {/* --- top --- */}
            <li className={CLASS_DEMO_PLACEMENT_TOP}>
              <AtomTooltip
                placement={atomTooltipPlacements.TOP_START}
                content={<ContentOneLine text="top-start" />}
              >
                <strong tabIndex="5">top-start</strong>
              </AtomTooltip>

              <AtomTooltip
                placement={atomTooltipPlacements.TOP}
                content={<ContentOneLine text="top" />}
              >
                <strong tabIndex="6">top</strong>
              </AtomTooltip>
              <AtomTooltip
                placement={atomTooltipPlacements.TOP_END}
                content={<ContentOneLine text="top-end" />}
              >
                <strong tabIndex="7">top-end</strong>
              </AtomTooltip>
            </li>

            {/* --- right --- */}
            <li className={CLASS_DEMO_PLACEMENT_RIGHT}>
              <AtomTooltip
                placement={atomTooltipPlacements.RIGHT_START}
                content={<ContentTwoLines text="right-start" />}
              >
                <strong tabIndex="8" style={{textAlign: 'right'}}>
                  right-start
                </strong>
              </AtomTooltip>
              <AtomTooltip
                placement={atomTooltipPlacements.RIGHT}
                content={<ContentTwoLines text="right" />}
              >
                <strong tabIndex="9" style={{textAlign: 'right'}}>
                  right
                </strong>
              </AtomTooltip>
              <AtomTooltip
                placement={atomTooltipPlacements.RIGHT_END}
                content={<ContentTwoLines text="right-end" />}
              >
                <strong tabIndex="10" style={{textAlign: 'right'}}>
                  right-end
                </strong>
              </AtomTooltip>
            </li>

            {/* --- bottom --- */}
            <li className={CLASS_DEMO_PLACEMENT_BOTTOM}>
              <AtomTooltip
                placement={atomTooltipPlacements.BOTTOM_START}
                content={<ContentOneLine text="bottom-start" />}
              >
                <strong tabIndex="11">bottom-start</strong>
              </AtomTooltip>
              <AtomTooltip
                placement={atomTooltipPlacements.BOTTOM}
                content={<ContentOneLine text="bottom" />}
              >
                <strong tabIndex="12">bottom</strong>
              </AtomTooltip>
              <AtomTooltip
                placement={atomTooltipPlacements.BOTTOM_END}
                content={<ContentOneLine text="bottom-end" />}
              >
                <strong tabIndex="13">bottom-end</strong>
              </AtomTooltip>
            </li>

            {/* --- left --- */}
            <li className={CLASS_DEMO_PLACEMENT_LEFT}>
              <AtomTooltip
                placement={atomTooltipPlacements.LEFT_START}
                content={<ContentTwoLines text="left-start" />}
              >
                <strong tabIndex="14">left-start</strong>
              </AtomTooltip>
              <AtomTooltip
                placement={atomTooltipPlacements.LEFT}
                content={<ContentTwoLines text="left" />}
              >
                <strong tabIndex="15">left</strong>
              </AtomTooltip>
              <AtomTooltip
                placement={atomTooltipPlacements.LEFT_END}
                content={<ContentTwoLines text="left-end" />}
              >
                <strong tabIndex="16">left-end</strong>
              </AtomTooltip>
            </li>
          </ul>
        </div>
      </div>
      <h3>
        Maintain tooltip on hover over tooltp with <code>autohide=false</code>{' '}
        (so users can select text in tooltip)
      </h3>
      <div className={CLASS_DEMO_DISPLAY}>
        <p>
          Lorem ipsum dolor sit amet{' '}
          <AtomTooltip autohide={false}>
            <strong
              title="Leo sagittis dignissim ornare egestas primis parturient ante diam fusce,
          sollicitudin viverra felis inceptos turpis."
              tabIndex="1"
            >
              december
            </strong>
          </AtomTooltip>
        </p>
      </div>
      <h3>Delay on show/hide and click outside to hide</h3>
      <div className={CLASS_DEMO_DISPLAY}>
        <p>
          Lorem ipsum dolor sit amet{' '}
          <AtomTooltip delay={{show: 300, hide: 1500}}>
            <strong
              title="Vehicula neque sociis leo odio nostra fames ridiculus cubilia nunc,
          ultricies tortor egestas vitae sed maecenas "
              tabIndex="2"
            >
              november
            </strong>
          </AtomTooltip>
        </p>
      </div>
      <h3>
        Maximum of 4 lines with <em>ellipsis</em>
      </h3>
      <div className={CLASS_DEMO_DISPLAY}>
        <p>
          Lorem ipsum dolor sit amet{' '}
          <AtomTooltip placement={atomTooltipPlacements.BOTTOM_END}>
            <strong
              title="Hendrerit varius luctus scelerisque habitant ridiculus, vulputate mollis
          platea nunc sociosqu magna, suscipit montes ullamcorper vivamus. Montes
          aenean nostra magna inceptos himenaeos enim lacinia ornare libero,
          quisque sed duis placerat hac arcu porttitor lobortis rutrum,"
              tabIndex="3"
            >
              astros
            </strong>
          </AtomTooltip>
        </p>
      </div>
      <h3>
        Tooltip without arrow using <code>hideArrow</code>
      </h3>
      <div className={CLASS_DEMO_DISPLAY}>
        <p>
          Lorem ipsum dolor sit amet{' '}
          <AtomTooltip
            placement={atomTooltipPlacements.RIGHT}
            content={<ContentHelloWorld />}
            hideArrow
          >
            <strong tabIndex="4">astros</strong>
          </AtomTooltip>
        </p>
      </div>

      <h3>
        Buttons with <code>onClick</code> can also have a tooltip
      </h3>
      <ul>
        <li>
          Desktop (Non-touch devices)→ <code>click</code>: button action |{' '}
          <code>hover</code>: tooltip
        </li>
        <li>
          Mobile (Touch devices)→ <code>click</code>: button action |{' '}
          <code>long press</code>: tooltip
        </li>
      </ul>
      <div className={CLASS_DEMO_DISPLAY}>
        <AtomTooltip>
          <button
            style={{
              border: '1px solid #ccc',
              fontSize: '30px'
            }}
            tabIndex="1"
            title="This menu display some cool options"
            onClick={() => alert('👍  action triggered')}
          >
            <img height="30" src={iconMenuHamburguer} alt="" />
          </button>
        </AtomTooltip>
      </div>
    </div>
  </div>
)

export default Demo
