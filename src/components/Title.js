import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>
        Planetas
        { headline }
      </h2>
    );
  }
}
/* Title.propTypes = {
  planetHead: PropTypes.shape ({
    headline: PropTypes.string
  })
}; */
export default Title;
