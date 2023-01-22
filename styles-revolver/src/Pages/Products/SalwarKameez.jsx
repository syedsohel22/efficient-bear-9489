import React from "react";
import { useState, useEffect } from "react";
import GetProData from "../../API/GetProData";
import ProductCard from "../../Components/ProductCard";
import { SimpleGrid } from "@chakra-ui/react";
const SalwarKameez = () => {
  const [salwarData, setSalwarData] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    GetProData().then((res) => {
      setSalwarData(res);
      console.log(res);
    });
  }, []);

  //filter Product by type

  useEffect(() => {
    const data = salwarData.filter((el) => el.type === "salwarkameez");
    console.log("id=>", data);
    setData(data);
  }, [salwarData]);

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
          />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default SalwarKameez;
