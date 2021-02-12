export default function (state = {}, action) {
	switch (action.type) {
		
        case "GET_WEATHER": 
            return {
                ...state,
                data: action.payload
            }
		
		default:
			return state
	}
}