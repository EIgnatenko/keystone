import {
	STATISTIC_LOADING_SUCCESS,
} from './constants';

const initialState = {
    total: 0,
    en: 0,
    fr: 0,
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
                en: action.payload.en,
                fr: action.payload.fr,
                total: action.payload.total,
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