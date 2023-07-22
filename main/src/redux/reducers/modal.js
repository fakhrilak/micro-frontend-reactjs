const initialState = {
    show : false,
    htmlState : <p>Hello world</p>
}

export default function (state = initialState, action) {
    const { type, payload } = action;
    
    switch (type){
        case "OnShow":
            return {
                ...state,
                show:payload.show,
                htmlState:payload.htmlState
            }
        default:
            return state;
    }
}