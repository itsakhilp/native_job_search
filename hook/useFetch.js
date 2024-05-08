import {useState, useEffect} from 'react';
import axios from 'axios';

// import {RAPID_API_KEY} from '@env';


const useFetch=(endpoint, query)=>{
  // const rapidApiKey = RAPID_API_KEY;
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const options = {
      method: "GET",
      url: `https://jsearch.p.rapidapi.com/${endpoint}`,
      headers: {
        "X-RapidAPI-Key": 'aca0642e0bmsh1442e442788917ep146b66jsn9056605fc89c',
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
      params: { ...query },
    };

      const fetchData=async()=>{
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            setData(response.data.data)
        setIsLoading(false);

        } catch (error) {
            setError(error);
            alert("There is error")
        }
        finally{
            setIsLoading(false);
        }
      }

      useEffect(()=>{
        fetchData()
      },[])

      const refetch=()=>{
        setIsLoading(true)
        fetchData();
      }

      return {data, isLoading, error, refetch}; 
}

export default useFetch;