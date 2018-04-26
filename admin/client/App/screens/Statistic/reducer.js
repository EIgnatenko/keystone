import {
	STATISTIC_LOADING_SUCCESS,
} from './constants';

const initialState = {
    data: {
		general: {
			total: 0,
			en: 0,
			fr: 0
		},
		byAge: {
			firstG: 0,
			secondG: 0,
			thirdG: 0,
			fourthG: 0
		},
		byDate: {}
	},
    hasError: false,
    isLoading: false
};

function statistic (state = initialState, action) {
	switch (action.type) {
		// case LOAD_COUNTS:
		// 	return assign({}, state, {
		// 		loading: true,
		// 	});
		case STATISTIC_LOADING_SUCCESS:
			return {
                ...state,
                data: action.payload
            }
		// case COUNTS_LOADING_ERROR:
		// 	return assign({}, state, {
		// 		loading: false,
		// 		error: action.error,
		// 	});
		default:
			return state;
	}
}

export default statistic;