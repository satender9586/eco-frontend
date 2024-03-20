  import React, { useEffect, useState } from "react";
  import { useParams } from "react-router-dom";
  import { Text, Box, Button, Grid, GridItem, Select } from "@chakra-ui/react";
  import Layout from "../../Components/HomeComponents/Layout";
  import constact from "../../assets/contact.png";
  import OurProductsPage from  "../HomeComponents/OurProductsPage"
  import { useSelector } from "react-redux";
  import { getSingleProductApi } from "../../Api/getApi";
  import { useDispatch } from "react-redux";
import { addItem} from "../../Redux/CartReducers/CartSlice";
import { useNavigate } from "react-router-dom";



  const AboutProduct = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const productreduxdata = useSelector((state)=>state?.AllProdcuts?.products?.products)
    
    const [singleproduct, setSingleProduct] = useState({});
    const [quantityIncDec, setQuantityIncDec] = useState(0);
    const path = useParams();
    

    const getProductDetailsFun = async(id)=>{
      try {
        const response = await getSingleProductApi(id)
        if(response.status==200){
          setSingleProduct(response?.data)
        }
      } catch (error) {
          console.log("Error", error.message)
      }
    }

    useEffect(() => {
      getProductDetailsFun(path.id);
    }, [path]);


   
    return (
      <Layout>
        <Box p={"3% 7%"} height={"90vh"}>
          <Grid templateColumns="repeat(2, 1fr)" gap={10} alignItems="center">
            <GridItem colSpan={1}>
              <img src={singleproduct.image} alt="Product" style={{ width: "100%", borderRadius: "10px",height:"400px" }} />
            </GridItem>
            <GridItem colSpan={1}>
              <Text fontSize="4xl" >{singleproduct?.name}</Text>
              <Text fontSize="2xl" color="gray.600">${singleproduct?.price}</Text>
              
              <Box mt={6}>
                <Text fontSize="xl" >Description</Text>
                <Text mt={2} fontSize={"17px"}color="gray.600">{singleproduct?.about}</Text>
              </Box>
              <Button mt={6} borderRadius={"4px"} fontSize={"14px"} colorScheme="blue" size="lg" onClick={()=> {dispatch(addItem(singleproduct)),navigate("/cart")}}>Add To Cart</Button>
            </GridItem>
          </Grid>
          
        </Box>
        <OurProductsPage/>
      </Layout>
    );
  };

  export default AboutProduct;
