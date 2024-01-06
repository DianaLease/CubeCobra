import React from 'react';
import PropTypes from 'prop-types';

import { InputGroup, InputGroupText, Input } from 'reactstrap';

function SelectField({ name, humanName, value, onChange, options, ...props }) {
  return (
    <InputGroup className="mb-3" {...props}>
      <InputGroupText>{humanName}</InputGroupText>
      <Input type="select" id={name} name={name} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Input>
    </InputGroup>
  );
}

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  humanName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectField;
