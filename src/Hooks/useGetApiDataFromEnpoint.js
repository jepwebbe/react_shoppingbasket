import { useEffect, useState } from 'react'
import appService from '../Components/App/Appservices/AppService';

const useGetApiDataFromEnpoint = (endpoint, key) => {
    const [state, setState] = useState([]);
    useEffect(() => {
        const renderData = async () => {    
          try {
            const response = await appService.Get(endpoint);
            if (response.data) {
              key && setState(response.data[key]);
            }
          } catch (error) {
            console.error(error);
          }
        };
        renderData();
      }, [endpoint, key]);
  return {state}
}

export default useGetApiDataFromEnpoint