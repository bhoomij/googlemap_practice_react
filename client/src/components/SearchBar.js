import React, { Component } from 'react'
import { getMapData } from '../actions';
import { connect } from 'react-redux';

class SearchBar extends Component {

    constructor() {
        super();

        this.state = {
            location: 'Search by city isn\'t working, so disabled',
            foodItem: '',
            catering: '',
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onFoodSearch = this.onFoodSearch.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.getMapData(this.state.location);
    }

    onFoodSearch(event) {
        event.preventDefault();
        this.props.getMapData(null, this.state.foodItem);
    }

    render() {
        return (
            <div className="container">
                <form
                    onSubmit={this.onFormSubmit}
                    style={{ margin: '20px 0' }}
                >
                    <div className="row">
                        <div className="col-md-6">
                            <div className="input-group">
                                <input type="text"
                                    name="location"
                                    placeholder="Enter city"
                                    className="form-control"
                                    value={this.state.location}
                                    onChange={this.onInputChange}
                                    disabled
                                />
                                <span className="input-group-btn">
                                    <button disabled className="btn btn-secondary" type="submit">Search City</button>
                                </span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group">
                                <input type="text"
                                    name="foodItem"
                                    placeholder="Hint: Chai Tea"
                                    className="form-control"
                                    value={this.state.foodItem}
                                    onChange={this.onInputChange}
                                />
                                <span className="input-group-btn">
                                    <button className="btn btn-secondary" type="button"
                                        onClick={this.onFoodSearch}
                                    >Search Food</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { getMapData })(SearchBar); 