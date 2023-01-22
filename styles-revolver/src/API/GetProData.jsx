const GetProData = () => {
  return fetch(`http://localhost:8080/product`).then((res) => res.json());
};

export default GetProData;
