import React from 'react';
import { connect } from 'react-redux';

class TeaItemFavorite extends React.Component {

    render() {
        let tea = this.props.tea
        return(
            <div>
                <h2>{tea.name}</h2>
                <p>{tea.description}</p>
                {this.props.rating &&
                <p>Rating: {this.props.rating.rating}</p>
                }
            </div>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect()(TeaItemFavorite);