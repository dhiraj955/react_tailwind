import { useEffect, useState } from "react";

export function useApiCall(fetchFunction){
    const[data, setData] = useState();
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState();

    async function fetchWithStates(){
     try {
        setLoading(true)
        const res = await fetchFunction();
        setData(res.data);
        setLoading(false);
        
     } catch (error) {
        setError(error)
        setLoading(false)
     }
    }

    useEffect(()=>{
        fetchWithStates();

    },[]);
    return {data, loading, error}
}