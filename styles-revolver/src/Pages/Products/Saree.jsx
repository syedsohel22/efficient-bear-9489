import React from "react";
import { useState, useEffect } from "react";
import GetProData from "../../API/GetProData";
import ProductCard from "../../Components/ProductCard";
import { SimpleGrid } from "@chakra-ui/react";

const Saree = () => {
  const [sareeData, setSareeData] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    GetProData().then((res) => {
      setSareeData(res);
      //  console.log(res);
    });
  }, []);

  //filter Product by type

  useEffect(() => {
    const data = sareeData.filter((el) => el.type === "saree");
    // console.log("id=>", data);
    setData(data);
  }, [sareeData]);
  return (
    <div>
      <SimpleGrid columns={5} spacing={5} w="80%" m="auto">
        {data?.map((el) => (
          <ProductCard
            key={el.id}
            img={el.img}
            name={el.name}
            price={el.price}
            oriprice={el.oriprice}
            id={el.id}
          />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default Saree;
