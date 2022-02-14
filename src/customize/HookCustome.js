import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const fetchData = async () => {
      let res = await axios.get(url);
      console.log("check res", res);
      let data = res.data;
      if (data && data.length > 0) {
        data.map((item) => {
          item.Date = moment(item.Date).format("DD/MM/YYYY");
          return item;
        });
        data = data.reverse();
      }
      setData(data);
    };
    fetchData();
  }, [url]);
  return {
    data,
  };
};
export default useFetch;
