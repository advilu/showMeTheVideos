import React from 'react';

const labelStyling = {
    fontSize: '20px',
    fontWeight: 'bold'
}

const searchBarStyling = {
    backgroundColor: 'grey'
}

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = event => {
       this.setState({ term: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault();

        // call callback from parent component
        this.props.onFormSubmit(this.state.term);
    };
    
    render() {
        return (
        <div className="search-bar ui segment" style={searchBarStyling}>
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label style={labelStyling}>Search for Videos:</label>
                    <input 
                    type="text" 
                    value={this.state.term} 
                    onChange={this.onInputChange}
                    />
                </div>
            </form>
        </div>
        )
    }
}

export default SearchBar;