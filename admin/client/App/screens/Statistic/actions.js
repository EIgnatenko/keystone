import xhr from 'xhr';
import {
	STATISTIC_LOADING_SUCCESS,
} from './constants';

export function loadStatistic (date) {
	return (dispatch) => {
		// dispatch({
		// 	type: LOAD_COUNTS,
		// });
		xhr({
			method: 'get',
			url: `/api/statistic`,
			headers: {
				"Content-Type": "application/json"
			},
		}, (err, resp, body) => {
			if (err) {
				// dispatch(countsLoadingError(err));
				return;
			}
			try {
				body = JSON.parse(body);
                dispatch({
                    type: STATISTIC_LOADING_SUCCESS,
                    payload: body
                });
			} catch (e) {
				console.log('Error parsing results json:', e, body);
//				dispatch(countsLoadingError(e));
				return;
			}
		});
	};
}
