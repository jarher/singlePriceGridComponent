import { useEffect, useState } from "react";
import CardComponent from "./CardComponent/CardComponent";
import { Box } from "@chakra-ui/react";

const stylesBox = {
  boxShadow: "xl",
  display: "flex",
  mt: ["4.0625rem", null, null, 0],
  mb: ["4.0625rem", null, null, 0],
  ml: 0,
  mr: 0,
  width: ["85%", null, null, "40rem"],
  flexFlow: "row wrap",
  borderRadius: "0.3rem",
  overflow: "hidden",
};

export default function App() {
  const [cardData, setCardData] = useState([]);
  try {
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(
          "https://raw.githubusercontent.com/jarher/singlePriceGridComponent/main/singlePriceGridComponent/data.json"
        );
        setCardData(await response.json());
      }
      fetchData();
    }, []);
  } catch (error) {
    console.log(error);
  }

  return (
    <main>
      <Box {...stylesBox}>
        {cardData.map((data, index) => (
          <CardComponent {...data} key={index} />
        ))}
      </Box>
    </main>
  );
}
