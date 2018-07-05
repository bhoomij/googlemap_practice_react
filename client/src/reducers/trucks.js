import { FETCH_TRUCK_DATA } from '../common/const';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_TRUCK_DATA: {
            if (!action.error) {
                return action.payload;
            }
            else {
                return state;
            }
        }
        default:
            return state;
    }
}