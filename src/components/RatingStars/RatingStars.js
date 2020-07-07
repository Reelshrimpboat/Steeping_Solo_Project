import React, { Component } from 'react';
import Ratings from 'react-ratings-declarative';

class Stars extends Component {

    render() {
      return (
      <Ratings
        rating={this.props.rating}
        widgetRatedColors = "gold"
        widgetDimensions = "24px"
        widgetSpacings = "0px"
      >
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
      </Ratings>
      );
    }
}

export default Stars;