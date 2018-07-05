import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Place from './Place.js';

import {GOOGLE_API_KEY} from '.././../common/const';

class GMap extends Component {
    static defaultProps = {
        center: {
        lat: 59.95,
        lng: 30.33
        },
        zoom: 14.4  
    };

    render() {
        let places = [];
        if(this.props.data ) {
            const arr = [this.props.data[590],this.props.data[599]]
            console.log(arr)
            
            places = this.props.data.map(place => {
                const {latitude, longitude, address, objectid} = place;
                return (<Place lat={latitude} lng={longitude} key={objectid} text={address} /> );
            });
        }
   
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
                center={this.props.center}
                defaultZoom={this.props.zoom}
                >
                    {places}
                </GoogleMapReact>
            </div>
        );
    }
}

export default GMap;

// (You have to use react & redux (if required) for this task)
// 1) The application should load by default with the map showing all the food trucks available for the current location.
// 2) A user can change the location on the map and he can see the food trucks available for that particular location which user has selected.
// 3) A user can filter the food trucks based on the items they are selling.
// 4) A user can change the radius of the selected location.
// You will find all the required information about the API which you need to complete this task in the link.

// https://data.sfgov.org/Economy-and-Community/Mobile-Food-Facility-Permit/rqzj-sfat

// https://data.sfgov.org/resource/6a9r-agq8.json