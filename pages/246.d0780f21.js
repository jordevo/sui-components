(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{X6Zp:function(i,t){i.exports="const icon = GetIcon()\nconst showText = 'Show'\nconst hideText = 'Hide'\nconst height = 70\nconst maxHeight = 200\n\nfunction Text() {\n    return(\n      <div label='Title'>\n        <p style={{margin:0}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum magna non diam euismod blandit et eu ex. Vivamus pulvinar sodales tincidunt. Proin venenatis tristique quam, quis vehicula eros volutpat sed. Etiam sed tristique ante. Aenean commodo erat quis pulvinar luctus. Pellentesque ultricies lorem vitae ante euismod, at imperdiet est euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In dignissim porttitor sem, a varius nisl ullamcorper ut. Vivamus lacinia, quam eu placerat tempus, velit massa vulputate turpis, sit amet bibendum risus massa sit amet urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent finibus lobortis blandit. Vivamus scelerisque blandit purus a suscipit. Nunc mi elit, condimentum eget pulvinar eu, lacinia vitae ligula. Sed sit amet eros auctor ipsum tincidunt hendrerit ac mollis justo. Ut ac sagittis ipsum.</p>\n      </div>\n  )\n}\n\nfunction GetIcon () {\n  return  (\n      <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"16px\" height=\"16px\" viewBox=\"0 0 32 32\">\n          <path d=\"M30,9l1,1c1,1,1,2,0,2L17,25c-1,1-2,1-2,0 L2,12c-1-1-1-2,0-2l1-1c1-1,2-1,2,0L16,20L28,9 C28,8,29,8,30,9z\"></path>\n      </svg>\n  )\n}\n\nfunction Demo ({children}) {\nreturn <div style={{width: '100%', padding: 20}}>{children}</div>\n}\n\nfunction DemoWrapper ({children}) {\nreturn <div style={{display: 'flex', flexWrap: 'wrap'}}>{children}</div>\n}\n\nreturn (\n  <div>\n    <h1>Accordion</h1>\n    <DemoWrapper >\n      <Demo>\n        <h2>Accordion with transition and autoclose and max height</h2>\n        <div style={{backgroundColor: '#fff', fontSize: 14, padding: 16, textAlign: 'left'}}>\n          <MoleculeAccordion maxHeight={100} withAutoClose={true} withTransition={true} icon={GetIcon()}>\n            <div label='Title'>\n              <p style={{margin:0}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum magna non diam euismod blandit et eu ex. Vivamus pulvinar sodales tincidunt. Proin venenatis tristique quam, quis vehicula eros volutpat sed. Etiam sed tristique ante. Aenean commodo erat quis pulvinar luctus. Pellentesque ultricies lorem vitae ante euismod, at imperdiet est euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In dignissim porttitor sem, a varius nisl ullamcorper ut. Vivamus lacinia, quam eu placerat tempus, velit massa vulputate turpis, sit amet bibendum risus massa sit amet urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent finibus lobortis blandit. Vivamus scelerisque blandit purus a suscipit. Nunc mi elit, condimentum eget pulvinar eu, lacinia vitae ligula. Sed sit amet eros auctor ipsum tincidunt hendrerit ac mollis justo. Ut ac sagittis ipsum.</p>\n            </div>\n            <div label='Title 2'>\n              <p style={{margin:0}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum magna non diam euismod blandit et eu ex. Vivamus pulvinar sodales tincidunt. Proin venenatis tristique quam, quis vehicula eros volutpat sed. Etiam sed tristique ante. Aenean commodo erat quis pulvinar luctus. Pellentesque ultricies lorem vitae ante euismod, at imperdiet est euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In dignissim porttitor sem, a varius nisl ullamcorper ut. Vivamus lacinia, quam eu placerat tempus, velit massa vulputate turpis, sit amet bibendum risus massa sit amet urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent finibus lobortis blandit. Vivamus scelerisque blandit purus a suscipit. Nunc mi elit, condimentum eget pulvinar eu, lacinia vitae ligula. Sed sit amet eros auctor ipsum tincidunt hendrerit ac mollis justo. Ut ac sagittis ipsum.</p>\n            <p style={{margin:0}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum magna non diam euismod blandit et eu ex. Vivamus pulvinar sodales tincidunt. Proin venenatis tristique quam, quis vehicula eros volutpat sed. Etiam sed tristique ante. Aenean commodo erat quis pulvinar luctus. Pellentesque ultricies lorem vitae ante euismod, at imperdiet est euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In dignissim porttitor sem, a varius nisl ullamcorper ut. Vivamus lacinia, quam eu placerat tempus, velit massa vulputate turpis, sit amet bibendum risus massa sit amet urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent finibus lobortis blandit. Vivamus scelerisque blandit purus a suscipit. Nunc mi elit, condimentum eget pulvinar eu, lacinia vitae ligula. Sed sit amet eros auctor ipsum tincidunt hendrerit ac mollis justo. Ut ac sagittis ipsum.</p>\n            <p style={{margin:0}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum magna non diam euismod blandit et eu ex. Vivamus pulvinar sodales tincidunt. Proin venenatis tristique quam, quis vehicula eros volutpat sed. Etiam sed tristique ante. Aenean commodo erat quis pulvinar luctus. Pellentesque ultricies lorem vitae ante euismod, at imperdiet est euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In dignissim porttitor sem, a varius nisl ullamcorper ut. Vivamus lacinia, quam eu placerat tempus, velit massa vulputate turpis, sit amet bibendum risus massa sit amet urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent finibus lobortis blandit. Vivamus scelerisque blandit purus a suscipit. Nunc mi elit, condimentum eget pulvinar eu, lacinia vitae ligula. Sed sit amet eros auctor ipsum tincidunt hendrerit ac mollis justo. Ut ac sagittis ipsum.</p>\n            </div>\n          </MoleculeAccordion>\n        </div>\n      </Demo>\n      <Demo>\n        <h2>Accordion without transition and no autoclose</h2>\n        <div style={{backgroundColor: '#fff', fontSize: 14, padding: 16, textAlign: 'left'}}>\n          <MoleculeAccordion maxHeight={300} withAutoClose={false} withTransition={false} icon={GetIcon()}>\n            <div label='Title'>\n              <p style={{margin:0}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum magna non diam euismod blandit et eu ex. Vivamus pulvinar sodales tincidunt. Proin venenatis tristique quam, quis vehicula eros volutpat sed. Etiam sed tristique ante. Aenean commodo erat quis pulvinar luctus. Pellentesque ultricies lorem vitae ante euismod, at imperdiet est euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In dignissim porttitor sem, a varius nisl ullamcorper ut. Vivamus lacinia, quam eu placerat tempus, velit massa vulputate turpis, sit amet bibendum risus massa sit amet urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent finibus lobortis blandit. Vivamus scelerisque blandit purus a suscipit. Nunc mi elit, condimentum eget pulvinar eu, lacinia vitae ligula. Sed sit amet eros auctor ipsum tincidunt hendrerit ac mollis justo. Ut ac sagittis ipsum.</p>\n            </div>\n            <div label='Title 2'>\n              <p style={{margin:0}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum magna non diam euismod blandit et eu ex. Vivamus pulvinar sodales tincidunt. Proin venenatis tristique quam, quis vehicula eros volutpat sed. Etiam sed tristique ante. Aenean commodo erat quis pulvinar luctus. Pellentesque ultricies lorem vitae ante euismod, at imperdiet est euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In dignissim porttitor sem, a varius nisl ullamcorper ut. Vivamus lacinia, quam eu placerat tempus, velit massa vulputate turpis, sit amet bibendum risus massa sit amet urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent finibus lobortis blandit. Vivamus scelerisque blandit purus a suscipit. Nunc mi elit, condimentum eget pulvinar eu, lacinia vitae ligula. Sed sit amet eros auctor ipsum tincidunt hendrerit ac mollis justo. Ut ac sagittis ipsum.</p>\n            </div>\n          </MoleculeAccordion>\n        </div>\n      </Demo>\n       <Demo>\n        <h2>Accordion with auto height</h2>\n        <div style={{backgroundColor: '#fff', fontSize: 14, padding: 16, textAlign: 'left'}}>\n          <MoleculeAccordion autoHeight withAutoClose={true} withTransition={true} icon={GetIcon()}>\n            <div label='Title'>\n              <p style={{margin:0}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum magna non diam euismod blandit et eu ex. Vivamus pulvinar sodales tincidunt. Proin venenatis tristique quam, quis vehicula eros volutpat sed. Etiam sed tristique ante. Aenean commodo erat quis pulvinar luctus. Pellentesque ultricies lorem vitae ante euismod, at imperdiet est euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In dignissim porttitor sem, a varius nisl ullamcorper ut. Vivamus lacinia, quam eu placerat tempus, velit massa vulputate turpis, sit amet bibendum risus massa sit amet urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent finibus lobortis blandit. Vivamus scelerisque blandit purus a suscipit. Nunc mi elit, condimentum eget pulvinar eu, lacinia vitae ligula. Sed sit amet eros auctor ipsum tincidunt hendrerit ac mollis justo. Ut ac sagittis ipsum.</p>\n              <p style={{margin:0}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum magna non diam euismod blandit et eu ex. Vivamus pulvinar sodales tincidunt. Proin venenatis tristique quam, quis vehicula eros volutpat sed. Etiam sed tristique ante. Aenean commodo erat quis pulvinar luctus. Pellentesque ultricies lorem vitae ante euismod, at imperdiet est euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In dignissim porttitor sem, a varius nisl ullamcorper ut. Vivamus lacinia, quam eu placerat tempus, velit massa vulputate turpis, sit amet bibendum risus massa sit amet urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent finibus lobortis blandit. Vivamus scelerisque blandit purus a suscipit. Nunc mi elit, condimentum eget pulvinar eu, lacinia vitae ligula. Sed sit amet eros auctor ipsum tincidunt hendrerit ac mollis justo. Ut ac sagittis ipsum.</p>\n              <p style={{margin:0}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum magna non diam euismod blandit et eu ex. Vivamus pulvinar sodales tincidunt. Proin venenatis tristique quam, quis vehicula eros volutpat sed. Etiam sed tristique ante. Aenean commodo erat quis pulvinar luctus. Pellentesque ultricies lorem vitae ante euismod, at imperdiet est euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In dignissim porttitor sem, a varius nisl ullamcorper ut. Vivamus lacinia, quam eu placerat tempus, velit massa vulputate turpis, sit amet bibendum risus massa sit amet urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent finibus lobortis blandit. Vivamus scelerisque blandit purus a suscipit. Nunc mi elit, condimentum eget pulvinar eu, lacinia vitae ligula. Sed sit amet eros auctor ipsum tincidunt hendrerit ac mollis justo. Ut ac sagittis ipsum.</p>\n            </div>\n            <div label='Title 2'>\n              <p style={{margin:0}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum magna non diam euismod blandit et eu ex. Vivamus pulvinar sodales tincidunt. Proin venenatis tristique quam, quis vehicula eros volutpat sed. Etiam sed tristique ante. Aenean commodo erat quis pulvinar luctus. Pellentesque ultricies lorem vitae ante euismod, at imperdiet est euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In dignissim porttitor sem, a varius nisl ullamcorper ut. Vivamus lacinia, quam eu placerat tempus, velit massa vulputate turpis, sit amet bibendum risus massa sit amet urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent finibus lobortis blandit. Vivamus scelerisque blandit purus a suscipit. Nunc mi elit, condimentum eget pulvinar eu, lacinia vitae ligula. Sed sit amet eros auctor ipsum tincidunt hendrerit ac mollis justo. Ut ac sagittis ipsum.</p>\n            </div>\n          </MoleculeAccordion>\n        </div>\n      </Demo>\n      <Demo>\n        <h2>Accordion with spacing between tabs</h2>\n        <div style={{backgroundColor: '#fff', fontSize: 14, padding: 16, textAlign: 'left'}}>\n          <MoleculeAccordion withGap={true} maxHeight={100} withAutoClose={true} withTransition={true} icon={GetIcon()}>\n            <div label='Title'>\n              <p style={{margin:0}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum magna non diam euismod blandit et eu ex. Vivamus pulvinar sodales tincidunt. Proin venenatis tristique quam, quis vehicula eros volutpat sed. Etiam sed tristique ante. Aenean commodo erat quis pulvinar luctus. Pellentesque ultricies lorem vitae ante euismod, at imperdiet est euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In dignissim porttitor sem, a varius nisl ullamcorper ut. Vivamus lacinia, quam eu placerat tempus, velit massa vulputate turpis, sit amet bibendum risus massa sit amet urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent finibus lobortis blandit. Vivamus scelerisque blandit purus a suscipit. Nunc mi elit, condimentum eget pulvinar eu, lacinia vitae ligula. Sed sit amet eros auctor ipsum tincidunt hendrerit ac mollis justo. Ut ac sagittis ipsum.</p>\n            </div>\n            <div label='Title 2'>\n              <p style={{margin:0}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum magna non diam euismod blandit et eu ex. Vivamus pulvinar sodales tincidunt. Proin venenatis tristique quam, quis vehicula eros volutpat sed. Etiam sed tristique ante. Aenean commodo erat quis pulvinar luctus. Pellentesque ultricies lorem vitae ante euismod, at imperdiet est euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In dignissim porttitor sem, a varius nisl ullamcorper ut. Vivamus lacinia, quam eu placerat tempus, velit massa vulputate turpis, sit amet bibendum risus massa sit amet urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent finibus lobortis blandit. Vivamus scelerisque blandit purus a suscipit. Nunc mi elit, condimentum eget pulvinar eu, lacinia vitae ligula. Sed sit amet eros auctor ipsum tincidunt hendrerit ac mollis justo. Ut ac sagittis ipsum.</p>\n            </div>\n          </MoleculeAccordion>\n        </div>\n      </Demo>\n    </DemoWrapper>\n  </div>\n)\n"}}]);