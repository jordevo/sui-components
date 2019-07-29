(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{k1pI:function(n,e){n.exports="const boxStyle = {\n  backgroundColor: '#ffffff',\n  border: '1px dashed lightgrey',\n  borderRadius: '5px',\n  padding: '20px',\n  marginBottom: '16px'\n}\n\nconst boxStyleBlack = {\n  ...boxStyle,\n  backgroundColor: '#000'\n}\n\nconst buttonStyle = {\n  backgroundColor: '#ffffff',\n  padding: '10px'\n}\n\nclass SpinnerWrapperExample extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {contentLoaded: false}\n  }\n\n  componentDidMount() {\n    setTimeout(() => {\n      this.setState({contentLoaded: true})\n    }, 5000)\n  }\n\n  render() {\n    const {contentLoaded} = this.state\n    return contentLoaded ? (\n      <p style={boxStyle}>Content loaded, spinner dissapears</p>\n    ) : (\n      <p style={boxStyle}>\n        Slowly loading content, delayed spinner will be shown\n        <AtomSpinner delayed />\n      </p>\n    )\n  }\n}\n\nclass FullScreenSpinnerExample extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {show: false}\n\n    this.onClick = this.onClick.bind(this)\n  }\n\n  onClick(ev) {\n    this.setState({show: true})\n    setTimeout(() => this.setState({show: false}), 5000)\n  }\n\n  render() {\n    return (\n      <React.Fragment>\n        <button style={buttonStyle} onClick={this.onClick}>\n          Click to show fullscreen spinner for 5 seconds\n        </button>\n        {this.state.show && <AtomSpinner type={AtomSpinnerTypes.FULL} />}\n      </React.Fragment>\n    )\n  }\n}\n\nreturn (\n  <React.Fragment>\n    <h2>Infinite spinner</h2>\n    <div style={boxStyle}>\n      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>\n      <AtomSpinner />\n    </div>\n    <h2>Delayed spinner</h2>\n    <div style={boxStyle}>\n      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>\n      <AtomSpinner delayed />\n    </div>\n\n    <h2>Spinner While content is loading</h2>\n    <SpinnerWrapperExample />\n\n    <h2>Full Screen Spinner</h2>\n    <FullScreenSpinnerExample />\n    \n    <h2>No backgorund Spinner </h2>\n    <div style={boxStyleBlack}>\n      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>\n      <AtomSpinner noBackground />\n    </div>\n  </React.Fragment>\n)\n"}}]);