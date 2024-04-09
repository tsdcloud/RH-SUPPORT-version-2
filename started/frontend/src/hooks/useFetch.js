import React, {useState, useEffect} from "react";



export const useFetch=()=>{
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [responseData, setResponseData] = useState(null);

    const fetchData = async (url) => {
      setIsLoading(true);
      setError(null);

      let headersList = {
        "Accept": "*/*",
      }

      try {
        const response = await fetch(url, { 
          method: "GET",
          headers: headersList
        });
        if(response.status === 200){
          let result = await response.json();
          let data = await result.results;
          return data;
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }

    };


    // useEffect(() => {
    //   const fetchData = async () => {
    //     setIsLoading(true);
    //     setError(null);
  
    //     try {
    //       const response = await fetch(url, options);
    //       const data = response.json();
    //       return data;
    //       // setData(response.data);
    //     } catch (error) {
    //       setError(error);
    //     } finally {
    //       setIsLoading(false);
    //     }
    //   };
  
    //   fetchData();
    // }, [url]);
  
    return { isLoading, error, fetchData };
}
