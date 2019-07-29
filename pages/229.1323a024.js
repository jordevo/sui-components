(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{"yp6+":function(n,t){n.exports='const Button = AtomButton\nconst Icon = getStarIcon()\nconst boxStyle = {padding: 20, paddingTop: 0, width: 400, textAlign: \'center\'}\n\nconst ButtonsRow = props => (\n  <tr style={{background: props.negative ? \'#444\' : \'#fff\'}}>\n    <td>\n      <Title>{props.type}</Title>\n    </td>\n    <td>\n      <Button {...props}>Button</Button>\n    </td>\n    <td>\n      <Button {...props} focused>\n        Button\n      </Button>\n    </td>\n    <td>\n      <Button {...props} disabled>\n        Button\n      </Button>\n    </td>\n    <td>\n      <Button {...props} leftIcon={Icon}>\n        Button\n      </Button>\n    </td>\n    <td>\n      <Button {...props} rightIcon={Icon}>\n        Button\n      </Button>\n    </td>\n    <td>\n      <Button {...props} leftIcon={Icon} />\n    </td>\n    <td>\n      <Button {...props}>1</Button>\n    </td>\n  </tr>\n)\n\nconst ButtonsSample = props => (\n  <section style={{textAlign: \'center\', width: \'40%\'}}>\n    <Title>{props.type}</Title>\n    <div style={{padding: 10, background: props.negative ? \'#333\' : \'#fff\'}}>\n      <p>\n        <Button {...props}>Normal</Button>\n      </p>\n      <p>\n        <Button {...props} focused>\n          Hover\n        </Button>\n      </p>\n      <p>\n        <Button {...props} disabled>\n          Disabled\n        </Button>\n      </p>\n    </div>\n  </section>\n)\n\nreturn (\n  <div>\n    <Title>BUTTONS MEDIUM</Title>\n    <ButtonsTable>\n      <ButtonsRow type="primary" />\n      <ButtonsRow type="secondary" />\n      <ButtonsRow type="tertiary" />\n      <ButtonsRow type="accent" />\n      <ButtonsRow type="primary" negative />\n      <ButtonsRow type="secondary" negative />\n      <ButtonsRow type="tertiary" negative />\n    </ButtonsTable>\n\n    <Title>BUTTONS SMALL</Title>\n    <ButtonsTable>\n      <ButtonsRow type="primary" size="small" />\n      <ButtonsRow type="secondary" size="small" />\n      <ButtonsRow type="tertiary" size="small" />\n      <ButtonsRow type="accent" size="small" />\n      <ButtonsRow type="primary" negative size="small" />\n      <ButtonsRow type="secondary" negative size="small" />\n      <ButtonsRow type="tertiary" negative size="small" />\n    </ButtonsTable>\n\n    <Title>BUTTONS LARGE</Title>\n    <ButtonsTable>\n      <ButtonsRow type="primary" size="large" />\n      <ButtonsRow type="secondary" size="large" />\n      <ButtonsRow type="tertiary" size="large" />\n      <ButtonsRow type="accent" size="large" />\n      <ButtonsRow type="primary" negative size="large" />\n      <ButtonsRow type="secondary" negative size="large" />\n      <ButtonsRow type="tertiary" negative size="large" />\n    </ButtonsTable>\n\n    <div style={{display: \'flex\', flexWrap: \'wrap\'}}>\n      <ButtonsSample type="primary" />\n      <ButtonsSample type="primary" negative />\n      <ButtonsSample type="secondary" />\n      <ButtonsSample type="secondary" negative />\n      <ButtonsSample type="tertiary" />\n      <ButtonsSample type="tertiary" negative />\n      <ButtonsSample type="accent" />\n    </div>\n    <Title>Button Sizes</Title>\n    <div\n      style={{\n        display: \'flex\',\n        alignItems: \'center\',\n        justifyContent: \'space-evenly\'\n      }}\n    >\n      <div>\n        <Button size="small">Small Button</Button>\n      </div>\n      <div>\n        <Button>Medium Button</Button>\n      </div>\n      <div>\n        <Button size="large">Large Button</Button>\n      </div>\n    </div>\n    <Title>Icon Buttons</Title>\n    <div\n      style={{\n        display: \'flex\',\n        alignItems: \'center\',\n        justifyContent: \'space-evenly\'\n      }}\n    >\n      <div>\n        <Button size="small" leftIcon={Icon}>\n          Icon Button\n        </Button>\n      </div>\n      <div>\n        <Button leftIcon={Icon}>Icon Button</Button>\n      </div>\n      <div>\n        <Button size="large" leftIcon={Icon}>\n          Icon Button\n        </Button>\n      </div>\n    </div>\n    <Title>FULL WIDTH (@fullWidth)</Title>\n    <div style={boxStyle}>\n      <p>\n        <Button fullWidth>Button fullWidth</Button>\n      </p>\n      <p>\n        <Button type="secondary" fullWidth>\n          Secondary fullWidth\n        </Button>\n      </p>\n      <p>\n        <Button type="accent" fullWidth>\n          Accent fullWidth\n        </Button>\n      </p>\n    </div>\n    <Title>Buttons visual - margins</Title>\n    <p>\n      <Button>Primary action</Button>\n      <Button type="secondary">Secondary action</Button>\n    </p>\n    <Title>LEFT ICONS (@leftIcon=node)</Title>\n    <p>\n      <Button leftIcon={Icon} size="small">\n        Small button\n      </Button>\n      <Button leftIcon={Icon}>Medium button</Button>\n      <Button leftIcon={Icon} size="large">\n        Big button\n      </Button>\n    </p>\n    <p>\n      <Button leftIcon={Icon} type="secondary" size="small">\n        Small button\n      </Button>\n      <Button leftIcon={Icon} type="secondary">\n        Medium button\n      </Button>\n      <Button leftIcon={Icon} type="secondary" size="large">\n        Big button\n      </Button>\n    </p>\n    <p>\n      <Button type="accent" rightIcon={Icon} size="small">\n        Small button\n      </Button>\n      <Button type="accent" rightIcon={Icon}>\n        Medium button\n      </Button>\n      <Button type="accent" rightIcon={Icon} size="large">\n        Big button\n      </Button>\n    </p>\n    <Title>ICONS FULL WITH (@leftIcon=node @fullWidth)</Title>\n    <div style={boxStyle}>\n      <p>\n        <Button leftIcon={Icon} fullWidth>\n          Button fullWidth\n        </Button>\n      </p>\n      <p>\n        <Button leftIcon={Icon} type="secondary" fullWidth>\n          Secondary fullWidth\n        </Button>\n      </p>\n      <p>\n        <Button leftIcon={Icon} type="accent" fullWidth>\n          Accent fullWidth\n        </Button>\n      </p>\n    </div>\n    <Title>INHERITED PROPS</Title>\n    <p>All props available from regular buttons an be used</p>\n    <p>\n      <Button onClick={() => alert(\'Primary with onClick\')}>\n        Primary with onClick\n      </Button>\n    </p>\n    <p>\n      <Button type="accent" title="Title: Lorem Ipsum">\n        Accent with title\n      </Button>\n    </p>\n    <p>\n      <Button type="secondary" className="customClass">\n        Secondary with className\n      </Button>\n    </p>\n    <Title>LINK BUTTONS</Title>\n    <p>\n      <Button\n        link\n        title="button link"\n        target="_blank"\n        href="http://www.google.com"\n        type="primary"\n        className="customClass"\n      >\n        Button link\n      </Button>\n    </p>\n    <p>\n      <Button\n        link\n        title="button link"\n        href="http://www.google.com"\n        type="secondary"\n        className="customClass"\n      >\n        Button link\n      </Button>\n    </p>\n    <p>\n      <Button\n        link\n        title="button link"\n        href="http://www.google.com"\n        type="accent"\n        className="customClass"\n      >\n        Button link\n      </Button>\n    </p>\n    <p>\n      <Button\n        link\n        title="button link"\n        href="http://www.google.com"\n        type="accent"\n        className="customClass"\n        disabled\n      >\n        Button link disabled\n      </Button>\n    </p>\n    <p>\n      <Button\n        link\n        size="small"\n        title="button link"\n        href="http://www.google.com"\n        type="primary"\n        className="customClass"\n      >\n        Button link small\n      </Button>\n    </p>\n    <p>\n      <Button link leftIcon={Icon} size="small" title="button link">\n        Button link\n      </Button>\n    </p>\n    <p>\n      <Button link fullWidth leftIcon={Icon} size="small" title="button link">\n        Button link fullWidth\n      </Button>\n    </p>\n    <Title>BUTTONS GROUP</Title>\n    <Button style={{marginLeft: \'10px\'}} type="secondary" groupPosition="first">\n      FIRST\n    </Button>\n    <Button style={{marginLeft: \'10px\'}} type="secondary" groupPosition="middle">\n      MIDDLE\n    </Button>\n    <Button style={{marginLeft: \'10px\'}} type="secondary" groupPosition="last">\n      LAST\n    </Button>\n    <Title>Form w/ Button</Title>\n    <FormWithSubmitButton />\n    <Title>Form w/ several Buttons</Title>\n    <FormWithSeveralButtons />\n  </div>\n)\n\nfunction getStarIcon() {\n  return (\n    <svg className="sui-Icon" viewBox="0 0 24 24">\n      <g>\n        <path\n          id="a"\n          d="M21.14 11a1.51 1.51 0 0 0-.86-2.65L15.64 8a.51.51 0 0 1-.43-.31l-1.82-4.27a1.51 1.51 0 0 0-2.78 0L8.8 7.7a.51.51 0 0 1-.43.3l-4.64.4a1.51 1.51 0 0 0-.86 2.6l3.52 3.1a.51.51 0 0 1 .16.5l-1 4.48a1.54 1.54 0 0 0 2.25 1.67l3.94-2.37a.51.51 0 0 1 .53 0l4 2.41a1.49 1.49 0 0 0 1.67-.07 1.49 1.49 0 0 0 .58-1.57l-1.06-4.54a.51.51 0 0 1 .16-.5L21.14 11z"\n        />\n      </g>\n    </svg>\n  )\n}\n\nfunction Title({children}) {\n  return (\n    <p style={{color: \'#999\', fontSize: 12, textTransform: \'uppercase\'}}>\n      {children}\n    </p>\n  )\n}\n\nfunction ButtonsTable({children, style}) {\n  return (\n    <table\n      width="auto"\n      cellPadding="8"\n      cellSpacing="0"\n      style={{background: \'#fff\', padding: 15}}\n    >\n      <tbody>\n        <tr>\n          <td />\n          <td>\n            <Title>Normal</Title>\n          </td>\n          <td>\n            <Title>Activated</Title>\n          </td>\n          <td>\n            <Title>Disabled</Title>\n          </td>\n          <td>\n            <Title>Icon Left</Title>\n          </td>\n          <td>\n            <Title>Icon Right</Title>\n          </td>\n          <td>\n            <Title>Icon</Title>\n          </td>\n          <td>\n            <Title>Char</Title>\n          </td>\n        </tr>\n        {children}\n      </tbody>\n    </table>\n  )\n}\n\nfunction FormWithSubmitButton() {\n  return (\n    <form onSubmit={() => window.alert(\'Submit!\')}>\n      <div>\n        <input type="text" placeholder="Put your name" />\n      </div>\n      <div>\n        <Button>Submit</Button>\n      </div>\n    </form>\n  )\n}\n\nfunction FormWithSeveralButtons() {\n  return (\n    <form onSubmit={() => window.alert(\'Submit!\')}>\n      <div>\n        <input type="text" placeholder="Put your name" />\n      </div>\n      <div>\n        <Button isButton onClick={() => window.alert(\'Click!\')}>Click Me!</Button>\n        <Button isButton onClick={() => window.alert(\'Click!\')}>Click Me!</Button>\n      </div>\n      <div>\n        <Button isSubmit>Submit</Button>\n      </div>\n    </form>\n  )\n}\n'}}]);