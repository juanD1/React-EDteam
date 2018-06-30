import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      starDate: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      starDate: date
    });
  }

  render() {
    return (
      <DatePicker
        selected={this.state.starDate}
        onChange={this.handleChange}
        placeholder="Fecha"
        isClearable={true}
        dateFormat="DD/MM/YYYY"
        name={this.props.name}
      />
    );
  }
}

export default Calendar;
