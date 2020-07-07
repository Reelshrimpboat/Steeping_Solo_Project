import React from 'react';
import { connect } from 'react-redux';

class TeaItemFavorite extends React.Component {
    selectTea = (event) => {
        this.props.history.push(`/tea/${event.target.id}`);
    }

    render() {
        let tea = this.props.tea;
        let imageDescription = `A cup of ${tea.name}`;
        return(
                <div className="browseBox">
                    <h2>{tea.name}</h2>
                    <img src={tea.picture} alt={imageDescription} width="300"></img>
                    <p>{tea.description}</p>
                    {this.props.rating &&
                    <p>Rating: {this.props.rating}</p>
                    }
                </div>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect()(TeaItemFavorite);