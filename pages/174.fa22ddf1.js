(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{Ze4p:function(t,o){t.exports='# MoleculeButtonGroup\n\n`MoleculeButtonGroup` is a component that wraps a group of buttons, related in content.\n\n## Installation\n\n```sh\n$ npm install @s-ui/react-molecule-button-group --save\n```\n\n## Usage\n\nHaving the proper elements imported \n\n```js\nimport MoleculeButtonGroup from \'@s-ui/react-molecule-button-group\'\nimport AtomButtom, { atomButtonGroupPositions } from \'@schibstedspain/sui-atom-button\'\n```\n\n### Basic usage\n\n```js\n<MoleculeButtonGroup type="secondary">\n  <AtomButtom>A</AtomButtom>\n  <AtomButtom>B</AtomButtom>\n  <AtomButtom>C</AtomButtom>\n</MoleculeButtonGroup>\n```\n\n```js\n<MoleculeButtonGroup type="tertiary" negative>\n  <AtomButtom>A</AtomButtom>\n  <AtomButtom>B</AtomButtom>\n  <AtomButtom>C</AtomButtom>\n</MoleculeButtonGroup>\n```\n\n### Full Width\n\n```js\n<MoleculeButtonGroup type="secondary" fullWidth>\n  <AtomButtom>A</AtomButtom>\n  <AtomButtom>B</AtomButtom>\n  <AtomButtom>C</AtomButtom>\n</MoleculeButtonGroup>\n```\n\n### Specifying Group Positions Values\n\n```js\n<MoleculeButtonGroup type="secondary" groupPositions={atomButtonGroupPositions} >\n  <AtomButtom>A</AtomButtom>\n  <AtomButtom>B</AtomButtom>\n  <AtomButtom>C</AtomButtom>\n</MoleculeButtonGroup>\n```\n\n> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/buttonGroup).**\n'}}]);