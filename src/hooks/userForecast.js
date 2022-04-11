import { useState } from "react";

const  useForecast = ()=>{

    //เรียก API
      

    const [isError, setError] = useState(false)
    const [isLoading, serLoading] = useState(false)
    const [forecast, setforecast] = useState(null)
    
    return{
        isError,isLoading,forecast
    }
}

export default useForecast;