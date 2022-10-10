import { Box, Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAPICall from "../CustomHooks/useAPICall";
import { getProducts, getInfiniteProducts } from "../Redux/Products/action";
import Product from "./Product";
import InfiniteScroll from "react-infinite-scroll-component";

export default function ListOfProducts() {
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
    <Box>
      AllProducts
      {loading ? (
        <h1>Loading......</h1>
      ) : error ? (
        <h1>error......</h1>
      ) : (
        <Container>
          <InfiniteScroll
            style={{ overflowY: "hidden" }}
            dataLength={products.length}
            next={getMoreProducts}
            hasMore={total !== products.length}
            loader={<h4>Loading...</h4>}
            scrollThreshold="100%"
          >
            <Container>
              {products.map((product) => (
                <Product key={product.id} {...product} />
              ))}
            </Container>
          </InfiniteScroll>
        </Container>
      )}
    </Box>
  );
}
