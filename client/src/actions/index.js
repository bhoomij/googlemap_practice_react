import axios from 'axios';
import { GOOGLE_API_KEY, FETCH_TRUCK_DATA } from '../common/const';

export const getMapData = (city = null, food = null) => async (dispatch) => {

    try {
        let urlFoodTruck = `https://data.sfgov.org/resource/6a9r-agq8.json?`;
        let query = '';
        if (city) {
            // get lat, lng of city
            const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${GOOGLE_API_KEY}`;
            const responseLocation = await axios.get(url);
            const { lat, lng } = responseLocation.data.results[0].geometry.location;
            query = `longitude=${lng}&latitude=${lat}&`;
        }
        if (food) {
            query += `fooditems=${food}`
        }
        urlFoodTruck += query;

        // get food-truck data from lat, lng
        const response = await axios.get(encodeURI(urlFoodTruck));
        dispatch({
            type: FETCH_TRUCK_DATA, payload: {
                location: {},
                data: response.data
            }
        });
    } catch (e) {
        // console.log(e)
        dispatch({
            type: FETCH_TRUCK_DATA,
            error: e,
        });
    }
};