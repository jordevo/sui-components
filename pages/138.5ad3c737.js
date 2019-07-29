(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{qQxw:function(n,e){n.exports="# AtomSwitch\n\n> Description\n\nThe switch is the radio button when there\u2019re only 2 exclusive options. \u201cOn/off\u201d is a common and clear example for explaining this component.\n\nIn order to collect the result of this switch there is a callback `onToggle`, this callback receives a flag on `true` if select is active. If you're using a `select` type of this component, `false` means the first option and `true` the second one.\n\nThere are several two sizes for this component: `default` and `large`.\n\n## Installation\n\n```sh\n$ npm install @s-ui/react-atom-switch --save\n```\n\n## Usage\n\n### Basic usage - Uncontrolled component\n```js\nimport AtomSwitch from '@s-ui/react-atom-switch'\n\nreturn (\n  <AtomSwitch\n    disabled={false}\n    initialValue={false}\n    label='Label'\n    labelLeft='Off'\n    labelOptionalText='Optional label'\n    labelRight='On'\n    onToggle={flag => console.log(`Switch value is ${flag}`)}\n    size='default'\n    type='toggle'\n  />\n)\n```\n\n### Basic usage - Controlled component\n```js\nimport AtomSwitch from '@s-ui/react-atom-switch'\n\nreturn (\n  <AtomSwitch\n    labelLeft='Off'\n    labelRight='On'\n    onToggle={value => handleChangeFromParent(value)}\n    type=\"toggle\"\n    value={value}\n  />\n)\n```\n\n> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/switch/demo).**\n"}}]);