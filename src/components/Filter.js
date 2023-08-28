import React, { Component } from 'react';

class Filter extends Component {
  render() {
    const { filter, onFilterChange } = this.props;

    return (
      <input
        type="text"
        name="filter"
        placeholder="Search contacts..."
        value={filter}
        onChange={onFilterChange}
      />
    );
  }
}

export default Filter;
