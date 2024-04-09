import { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using Axios for API requests

export const usePost = () => {
  const _USER = localStorage.getItem('user');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);

  const postData = async (data, end, termination, detail, callback) => {

    const url = "/api";

    const headersList={
      Accept: '*/*',
      Authorization: 'Bearer '+JSON.parse(_USER)?.access
    }

    const options = {
      headers: headersList,
      method: 'POST',
      body:JSON.stringify({
        "end":end,
        "termination":termination,
        "detail":detail,
        ...data
      })
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url, options);
      const data = response.json();
      
      if(response.status === 201){
        callback();
        return data;
      }
      return data;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect(() => {
  // }, [data]);

  return { isLoading, error, responseData, postData };
};
