const initialState = {
    allData : [],
    activePage : 1,
    perPage : 10,
    renderData :[]
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    function getPaginatedData(data, currentPage, itemsPerPage) {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return data.slice(startIndex, endIndex);
    }

    switch (type){
        case "NextPage":
            const paginatedDataw = getPaginatedData(state.allData, payload, state.perPage);
            if(paginatedDataw.length == 0){
                /// rerun reset count
                const page = getPaginatedData(state.allData, 1, state.perPage);
                return {
                    ...state,
                    activePage:1,
                    renderData : page
                }
            }
            return {
                ...state,
                activePage:payload,
                renderData : paginatedDataw
            }
        
        case "PrevPage" :
            const paginatedprev = getPaginatedData(state.allData, payload, state.perPage);
            return{
                ...state,
                activePage:payload,
                renderData:paginatedprev
            }
        
        case "SetRenderData":
            const paginatedData = getPaginatedData(payload[0], payload[1], payload[2]);
            return{
                ...state,
                allData  :payload[0],
                renderData : paginatedData
            }
        case "SetPage":
            if(payload<1){
                return{
                    ...state,
                    activePage:payload,
                    renderData: state.renderData
                }
            }
            const paginatedData1 = getPaginatedData(state.allData, payload, state.perPage);
            return {
                ...state,
                activePage:payload,
                renderData: paginatedData1
            }
        case "DeletById":
            const newArray = state.allData.filter((item) => item.id !== payload.id)
            const rePaginateBydelet = getPaginatedData(newArray, state.activePage, state.perPage)
            if(rePaginateBydelet.length == 0){
                const handleEmpty = getPaginatedData(newArray, parseInt(state.activePage) - 1 , state.perPage)
                return {
                    ...state,
                    allData  :newArray,
                    renderData : handleEmpty,
                    activePage : parseInt(state.activePage) - 1
                }
            }
            return {
                ...state,
                allData  :newArray,
                renderData : rePaginateBydelet
            }
        case "UpdateById":
            const updatedData = state.allData.map((item) => {
                if (item.id === payload.id) {
                  return { ...item, body: payload.body, title: payload.title };
                }
                return item;
            });
            const rePaginateByupdate = getPaginatedData(updatedData, state.activePage, state.perPage)
            return {
                ...state,
                allData  :updatedData,
                renderData : rePaginateByupdate
            }
        case "AddContent":
            const updatealldata = [...state.allData,payload]
            const rePaginateByadd = getPaginatedData(updatealldata, state.activePage, state.perPage)
            return {
                ...state,
                allData  :updatealldata,
                renderData : rePaginateByadd
            }
        default:
            return state;
    }
}