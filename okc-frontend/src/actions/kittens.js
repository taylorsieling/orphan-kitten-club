export const getKittens = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING_KITTENS "})
    }
}