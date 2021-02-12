export default function (state = {}, action) {
	switch (action.type) {
		case "GET_CITY":
			return {
                ...state,
				city: action.payload,
			}
        
		default:
			return state
	}
}
