import { useState } from "react";

export const useFetching=(callback)=>{
    const [isLoading,setIsloading]=useState(false);
    const [error,setError]=useState("");
    const fetching= async (...args)=>{
        try{
            setIsloading(true);
            await callback(...args);

        }catch (e){
            setError(e.message);

        }finally{
            setTimeout(()=>{setIsloading(false);},1000);
            

        }

    }
    return[fetching,isLoading,error]
}