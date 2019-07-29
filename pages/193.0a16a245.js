(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{"/jQV":function(e,n){e.exports="import React from 'react'\nimport PropTypes from 'prop-types'\n\nimport MoleculeField from '@s-ui/react-molecule-field'\nimport AtomInput from '@s-ui/react-atom-input'\n\nconst getErrorState = (success, error) => {\n  if (success) return false\n  if (error) return true\n}\n\nconst MoleculeInputField = ({\n  id,\n  label,\n  successText,\n  errorText,\n  helpText,\n  inline,\n  ...props\n}) => {\n  const errorState = getErrorState(successText, errorText)\n  return (\n    <MoleculeField\n      name={id}\n      label={label}\n      successText={successText}\n      errorText={errorText}\n      helpText={helpText}\n      inline={inline}\n    >\n      <AtomInput id={id} errorState={errorState} {...props} />\n    </MoleculeField>\n  )\n}\n\nMoleculeInputField.displayName = 'MoleculeInputField'\n\nMoleculeInputField.propTypes = {\n  /** Text to be displayed as label */\n  label: PropTypes.string.isRequired,\n\n  /** used as label for attribute and input element id */\n  id: PropTypes.string.isRequired,\n\n  /* onChange callback */\n  onChange: PropTypes.func,\n\n  /** Success message to display when success state  */\n  successText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),\n\n  /** Error message to display when error state  */\n  errorText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),\n\n  /** Help Text to display */\n  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),\n\n  /** Boolean to decide if elements should be set inline */\n  inline: PropTypes.bool\n}\n\nexport default MoleculeInputField\n"}}]);