const initialState = {
    host : "localhost:8084",
    path : "/",
    ImgUrl : "https://be-server.zilog.online/blogger/api/v2.1/single"
}

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type){
        case "test":
            console.log("masuk kawan")
            return {
                ...state
            }
        case "path":
            return {
                ...state,
                path : payload
            }
        default:
            return state;
    }
}