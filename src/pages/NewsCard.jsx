import { Container, Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import FiltersBlock from "../components/FiltersBlock";
import ProductCard from "../components/ProductCard";
import ProductsPagination from "../components/ProductsPagination";
import { ClientContext } from "../contexts/ClientProvider";

const NewsCard = () => {
  const { getProducts, products } = useContext(ClientContext);
  useEffect(() => {
    getProducts();
  }, []);
  if (!products) {
    return <h2>Loading...</h2>;
  }
  return (
    <div style={{ marginTop: "10%" }}>
      <Container>
        <FiltersBlock />
        <Grid container spacing={4}>
          {products.map((item) => (
            <Grid xs={12} sm={6} md={4} item key={item.id}>
              <ProductCard item={item} />
            </Grid>
          ))}
        </Grid>
        <ProductsPagination />
      </Container>
    </div>
  );
};

export default NewsCard;
