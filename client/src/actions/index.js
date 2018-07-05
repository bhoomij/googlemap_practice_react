import axios from 'axios';
import {GOOGLE_API_KEY, FETCH_TRUCK_DATA} from '../common/const';

// export const getMapData = (city) => async (dispatch) => {
//     // get lat, lng of city
//     const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${GOOGLE_API_KEY}`;
//     const responseLocation = await axios.get(url);
//     // const {lat, lng} = {lat:'37.7387268039871', lng:'-122.406736029905'};
//     const {lat, lng} = responseLocation.data.results[0].geometry.location;

//     // get food-truck data from lat, lng
//     const urlFoodTruck = `https://data.sfgov.org/resource/6a9r-agq8.json?longitude=${lng}&latitude=${lat}`;
//     console.log('url2', urlFoodTruck)
//     const response = await axios.get(urlFoodTruck);
//     const { location } = responseLocation.data.results[0].geometry;
//     dispatch({ type: FETCH_TRUCK_DATA, payload: {
//         location:{},
//         data: response.data
//     } });
// };

export const getMapData = (city=null, food=null) => async (dispatch) => {
    // get food-truck data from lat, lng
    let urlFoodTruck = `https://data.sfgov.org/resource/6a9r-agq8.json`;
    if (city) {
        // get lat, lng of city
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${GOOGLE_API_KEY}`;
        const responseLocation = await axios.get(url);
        const {lat, lng} = responseLocation.data.results[0].geometry.location;
        urlFoodTruck += `?longitude=${lng}&latitude=${lat}`;
    }
    if(food) {
        // fooditems=
        if(urlFoodTruck.includes("?"))
            urlFoodTruck += `&`
        else
            urlFoodTruck += `?`
        urlFoodTruck += `fooditems=${food}`
    }
    console.log('url2', urlFoodTruck)
    const response = await axios.get(urlFoodTruck);
    dispatch({ type: FETCH_TRUCK_DATA, payload: {
        location:{},
        data: response.data
    } });
};