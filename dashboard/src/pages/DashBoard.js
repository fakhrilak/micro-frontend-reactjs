import React,{useState,useEffect,useRef} from 'react'
import ReactFrappeChart from "react-frappe-charts";
export const DashBoard = () => {
    const [pie,setpie] = useState()
    const chartRef = useRef();

    // useEffect(()=>{
    //     setpie(<ReactFrappeChart
    //             ref={chartRef}
    //             type="pie"
    //             colors={["#21ba45", "#ff3c00"]}
    //             className="w-8/12 m-auto"
    //             data={{
    //                 labels: ["Label 1", "Label 2"],
    //                 datasets: [{ values: [18, 20] }],
    //             }}/>
    //         )
    //     return (()=>{
    //        setpie(<div></div>)
    //     })
    // },[])
    return(
    <div className='w-11/12 m-auto'>
        <div className='grid grid-cols-3'>
            <div className='col-span-2'>
                <ReactFrappeChart
                type='bar'
                colors={["#21ba45"]}
                axisOptions={{ xAxisMode: "tick", yAxisMode: "tick", xIsSeries: 1 }}
                data={{
                    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    datasets: [{ values: [18, 40, 30, 35, 8, 52, 17, 4] }],
                }}
                />
            </div>
            <div >
                {pie}
            </div>
        </div>
        <div className='mt-5'>
            <div className='col-span-2'>
                <ReactFrappeChart
                type='axis-mixed'
                colors={["#21ba45"]}
                axisOptions={{ xAxisMode: "tick", yAxisMode: "tick", xIsSeries: 1 }}
                data={{
                    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    datasets: [{ values: [18, 40, 30, 35, 8, 52, 17, 4] }],
                }}
                />
            </div>
        </div>
    </div>)
    // return(
    //     
    // />
    // )
}
