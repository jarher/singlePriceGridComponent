import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";

function App() {
  const [cardData, setCardData] = useState([]);
  try {
    useEffect(() => {
      async function fetchData() {
        const response = await fetch("data.json");
        setCardData(await response.json());
      }
      fetchData();
    }, []);
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      {cardData.map((data, index) => (
        <CardComponent {...data} key={index} />
      ))}
    </>
  );
}

export default App;
