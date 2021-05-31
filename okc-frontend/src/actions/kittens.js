export const getKittens = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING_KITTENS "})
        fetch('/kittens')
        .then(res => res.json())
        .then(kittens => dispatch({
            type: "KITTENS_LOADED", 
            payload: kittens
        }))
    }
}