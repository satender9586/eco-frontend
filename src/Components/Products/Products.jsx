import React from "react";
import Layout from "../HomeComponents/Layout";
import OurProductsPage from "../HomeComponents/OurProductsPage";
import { Box } from "@chakra-ui/react";

const Products = () => {
  return (
    <>
      <Layout>
        <Box minH={"100vh"}>
          <OurProductsPage />
        </Box>
      </Layout>
    </>
  );
};

export default Products;
