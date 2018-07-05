
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {getMapData} from '../../actions';
import GMap from './GMap';

class GMapContainer extends Component {


	componentDidMount() {
		// this.props.getMapData(37.77425926306, -122.419485988398);
		this.props.getMapData();
	}

  render() {

		let { 
			location:center = {
				lat: 37.77425926306,
				lng: -122.419485988398,
			}, 
			data
		} = this.props.trucksData;

		// if(lat && lng) {
		// 	center = {
		// 		lat,
		// 		lng
		// 	};
		// }
		console.log('data', data);
		
		return (
			<GMap center={center} data={data}/>
		);
  	}
}

function mapStateToProps({trucksData}) {
    return {trucksData};
}

export default connect(mapStateToProps, {getMapData})(GMapContainer);