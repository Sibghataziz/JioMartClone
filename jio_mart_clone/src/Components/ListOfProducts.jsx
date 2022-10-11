import { Box, Button, Center, Container, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAPICall from "../CustomHooks/useAPICall";
import { getProducts, getInfiniteProducts } from "../Redux/Products/action";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductItem from "./ProductItem";

export default function ListOfProducts({windowWidth}) {
  const dispatch = useDispatch();
  const { total, loading, error, products } = useSelector((state) => state);
  const { baseUrl } = useAPICall();
  const [page, setPage] = useState(1);

  const getFirstProducts = () => {
    const url = `${baseUrl}/products?_limit=20&_page=${page}&item_category=${"Electronics"}`;
    dispatch(getProducts(url));
  };

  const getScrollProducts = () => {
    const url = `${baseUrl}/products?_limit=20&_page=${
      page + 1
    }&item_category=${"Electronics"}`;
    console.log(url);
    dispatch(getInfiniteProducts(url));
  };

  const getMoreProducts = () => {
    setTimeout(() => {
      setPage(page + 1);
      getScrollProducts();
    }, 500);
  };

  useEffect(() => {
    getFirstProducts();
  }, []);

  // console.log(total!==products.length)

  return (
    <Box bg="white" p={5}>
      <h4 style={{ margin: "10px 10px" }}>ALL PRODUCTS</h4>
      {loading ? (
        <h1>Loading......</h1>
      ) : error ? (
        <h1>error......</h1>
      ) : (
        <Box>
          <InfiniteScroll
            style={{ overflowY: "hidden" }}
            dataLength={products.length}
            next={getMoreProducts}
            hasMore={total !== products.length}
            loader={<Center><Spinner/></Center>}
            scrollThreshold="100%"
          >
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} width="100%">
              {products.map((product) => (
                <ProductItem key={product.id} {...product} windowWidth={windowWidth}/>
              ))}
            </SimpleGrid>
          </InfiniteScroll>
          {total !== products.length ?<Center><Button bg='#42A8D6' colorScheme="white" mt={5}>Show More Results</Button></Center>: null}
          
        </Box>
      )}
    </Box>
  );
}
