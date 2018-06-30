import React, { Component } from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";

export default class MultiSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: this.props.options,
      value: []
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <Select
        multi={true} //multiple options
        simpleValues={true} //como cadena de texto
        joinValues={true} //separa por comas
        name={this.props.name}
        value={this.state.value}
        options={this.state.options}
        onChange={this.handleSelectChange}
      />
    );
  }
}
