

export const SELECTED_TRADEMARKS = 'SELECTED_TRADEMARKS'


export default (selected) => {
    return {
        type: SELECTED_TRADEMARKS,
        payload: selected   
    }
}

