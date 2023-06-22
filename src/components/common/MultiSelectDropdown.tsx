import React from "react";
import PropTypes from "prop-types";
import { default as ReactSelect } from "react-select";

const MultiSelect = (props: any) => {
  if (props.allowSelectAll) {
    return (
      <ReactSelect
        {...props}
        styles={{
          control: (styles) => ({
            ...styles,
            marginTop: "10px",
            borderRadius: "10px",
          }),
        }}
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        isMulti
        options={[props.allOption, ...props.options]}
        onChange={(selected: any) => {
          if (
            selected !== null &&
            selected.length > 0 &&
            selected[selected.length - 1].value === props.allOption.value
          ) {
            return props.onChange(props.options);
          }
          return props.onChange(selected);
        }}
      />
    );
  }

  return <ReactSelect {...props} />;
};

MultiSelect.propTypes = {
  options: PropTypes.array,
  value: PropTypes.any,
  onChange: PropTypes.func,
  allowSelectAll: PropTypes.bool,
  allOption: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
};

MultiSelect.defaultProps = {
  allOption: {
    label: "Select all",
    value: "*",
  },
};

export default MultiSelect;