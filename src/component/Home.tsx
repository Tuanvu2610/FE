import {getNews} from "../services/newsService.ts";
import {useState} from "react";

const result = await getNews("trongngay");


const Home = () => {
    const[news, setNews] = useState([]);

    setNews(result.data);
  return (
      <>
          <p>{news}</p>
      </>
  )
}
export default Home;