export function thunk({ getState, dispatch }) {
    return function wrapDispatch(next) {
        return function handleAction(action) {
            if (typeof action === "function") {
                action(dispatch, getState)
                console.log("i can do it")
            } else {
                return next(action)
            }
        }
    }
}