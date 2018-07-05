
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMapData } from '../../actions';
import GMap from './GMap';

class GMapContainer extends Component {

	componentDidMount() {
		this.props.getMapData();
	}

	render() {

		let {
			location: center = {
			lat: 37.77425926306,
			lng: -122.419485988398,
		},
			data
		} = this.props.trucksData;

		// set center to data at index 1
		// if (data && data.length > 1) {
		// 	center.lat = parseFloat(data[1].latitude);
		// 	center.lng = parseFloat(data[1].longitude);
		// }

		return (
			<GMap center={center} data={data} />
		);
	}
}

function mapStateToProps({ trucksData }) {
	return { trucksData };
}

export default connect(mapStateToProps, { getMapData })(GMapContainer);