const kittens = (state = { kittens: [], loading: false}, action) => {
    switch(action.type){
        case "LOADING_KITTENS":
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}

export default kittens