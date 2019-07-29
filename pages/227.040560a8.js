(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{gACb:function(n,t){n.exports="const iconTop = () => (\n  <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 274 352\">\n    <g id=\"Page-1\" stroke=\"none\" fill=\"none\">\n      <g id=\"arrow_c_up_icon_128\" fill=\"#000000\">\n        <path\n          d=\"M9.4,109.3 L114.4,9 C120.2,3 128.1,0 136.8,0 C145.5,0 153.3,3 159.2,9 L264.6,109.3 C277.1,121.2 277.1,140.6 264.6,152.5 C252.1,164.4 231.9,164.4 219.4,152.5 L169,104.4 L169,321.4 C169,338.3 154.7,352 137,352 C119.3,352 105,338.3 105,321.4 L105,104.4 L54.6,152.6 C42.1,164.5 21.9,164.5 9.4,152.6 C-3.1,140.6 -3.1,121.3 9.4,109.3 Z\"\n          id=\"Shape\"\n        />\n      </g>\n    </g>\n  </svg>\n)\n\nconst Paragraph = () => (\n  <p>\n    Lorem ipsum dolor sit amet consectetur adipiscing, elit dignissim etiam\n    congue ultricies. Commodo sociis massa a potenti dictumst turpis laoreet\n    elementum, pulvinar hendrerit risus vivamus rhoncus etiam sapien congue sem,\n    luctus tristique sagittis mollis ac convallis cubilia. Conubia dictum\n    maecenas eleifend tincidunt nibh nam turpis fringilla vulputate, volutpat\n    pretium neque platea phasellus tempus interdum habitant, sociis convallis\n    taciti viverra aliquam nec metus auctor.\n  </p>\n)\n\nconst containerPlaygroundOld = document.querySelector('.sui-Studio-main')\nconst containerPlaygroundNew = document.querySelector('.Root')\n\nclass ContainerDemo extends React.Component {\n  constructor() {\n    super()\n    this.state = {\n      text:false,\n      icon: true,\n      paragraphs: 20,\n      dark: false\n    }\n  }\n  render() {\n    const {dark, text, icon, paragraphs} = this.state\n    const customProps = {}\n    customProps.style = dark ? backToTopStyles.LIGHT : backToTopStyles.DARK\n    if (text) {\n      customProps.textTop = 'TOP'\n    }\n    if (icon) {\n      customProps.iconTop = iconTop\n    }\n    \n    return (\n      <div>\n        <div\n          style={{\n            display: 'flex',\n            justifyContent: 'space-between',\n            padding: '10px'\n          }}\n        >\n          <button\n            onClick={() => {\n              this.setState({paragraphs: this.state.paragraphs + 20})\n            }}\n          >\n            Add 20 paragraphs\n          </button>\n        </div>\n        <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px'}}>\n          <div>\n            <button\n              onClick={() => {\n                this.setState({dark: false})\n              }}\n              style={!dark ? {background: '#4d4d4d', color: 'white'} : {}}\n            >\n              Dark Mode\n            </button>\n            <button\n              onClick={() => {\n                this.setState({dark: true})\n              }}\n              style={dark ? {background: '#4d4d4d', color: 'white'} : {}}\n            >\n              Light Mode\n            </button>\n          </div>\n          <div>\n            <button\n              onClick={() => {\n                this.setState({text: false, icon: true})\n              }}\n              style={!text && icon ? {background: '#4d4d4d', color: 'white'} : {}}\n            >\n              Only Icon\n            </button>\n            <button\n              onClick={() => {\n                this.setState({text: true, icon: true})\n              }}\n              style={text && icon ? {background: '#4d4d4d', color: 'white'} : {}}\n            >\n              Icon + Text\n            </button>\n            <button\n              onClick={() => {\n                this.setState({text: true, icon: false})\n              }}\n              style={text && !icon ? {background: '#4d4d4d', color: 'white'} : {}}\n            >\n              Only Text\n            </button>\n          </div>\n        </div>\n        <div\n          style={\n            dark\n              ? {\n                  marginTop: '10px',\n                  padding: '10px',\n                  background: '#4d4d4d',\n                  color: 'white'\n                }\n              : {padding: '10px'}\n          }\n        >\n          {new Array(paragraphs)\n            .fill(0)\n            .map((elem, index) => <Paragraph key={index} />)}\n        </div>\n        <AtomBackToTop\n          refContainer={containerPlaygroundOld || containerPlaygroundNew}\n          {...customProps}\n        />\n      </div>\n    )\n  }\n}\n\nreturn (\n  <div>\n    <div id=\"container\">\n      <h1>Back To Top</h1>\n      <ContainerDemo />\n    </div>\n  </div>\n)\n"}}]);