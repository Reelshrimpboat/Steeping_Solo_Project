import React, { Component } from 'react';
import Ratings from 'react-ratings-declarative';

class Stars extends Component {

    render() {
      return (
      <Ratings
        rating={this.props.number}
        widgetRatedColors = "gold"
        widgetDimensions = "24px"
        widgetSpacings = "0px"
        gradientPathName='/app/'
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