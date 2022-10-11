import { border, Box, Button, ButtonGroup, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const intiState = {
  Popularity: true,
  desc: false,
  asc: false,
  discount: false,
  all: false,
};

const falsyState = {
  Popularity: false,
  desc: false,
  asc: false,
  discount: false,
  all: false,
};

export default function Sort() {
  const { total, products } = useSelector((state) => state);
  const [hover, setHover] = useState(intiState);
  const [active, setActive] = useState(intiState)

  const spanStyle = {
    fontSize: "18px",
    fontWeight: "bold",
  };

  const buttonStyle = {
    backgroundColor: "white",
    color: "black",
    borderRadius: "10px",
    width: "120px",
    height: "25px",
    fontSize: "12px",
  };

  const buttonStyleOnHover = {
    backgroundColor: "white",
    color: "#2EA3D6",
    border: "1px solid #2EA3D6",
    borderRadius: "10px",
    width: "120px",
    height: "25px",
    fontSize: "12px",
  };

  const handleMouseIn = (e) => setHover({ ...hover, [e.target.name]: true });
  const handleMouseOut = (e) => setHover({ ...hover, [e.target.name]: false });

  const handleClick = (e) => {
    setHover({ ...falsyState })
    setActive({ ...falsyState, [e.target.name]: true })
  };

  return (
    <Flex justify="space-between" mt={5} mb={5}>
      <Box width="30%">
        <p>
          Showing <span style={spanStyle}>{products.length}</span> of{" "}
          <span style={spanStyle}>{total}</span> items
        </p>
      </Box>
      <Box width="62%" mr={5}>
        <Box>
          Sort by:{" "}
          <ButtonGroup spacing={2}>
            <button
              style={hover.Popularity || active.Popularity ? buttonStyleOnHover : buttonStyle}
              name="Popularity"
              onMouseOver={handleMouseIn}
              onMouseOut={handleMouseOut}
              onClick={handleClick}
            >
              Popularity
            </button>
            <button
              style={hover.desc || active.desc ? buttonStyleOnHover : buttonStyle}
              name="desc"
              onMouseOver={handleMouseIn}
              onMouseOut={handleMouseOut}
              onClick={handleClick}
            >
              High to Low
            </button>
            <button
              style={hover.asc || active.asc ? buttonStyleOnHover : buttonStyle}
              name="asc"
              onMouseOver={handleMouseIn}
              onMouseOut={handleMouseOut}
              onClick={handleClick}
            >
              Low to High
            </button>
            <button
              style={hover.discount || active.discount ? buttonStyleOnHover : buttonStyle}
              name="discount"
              onMouseOver={handleMouseIn}
              onMouseOut={handleMouseOut}
              onClick={handleClick}
            >
              Discount
            </button>
            <button
              style={hover.all || active.all ? buttonStyleOnHover : buttonStyle}
              name="all"
              onMouseOver={handleMouseIn}
              onMouseOut={handleMouseOut}
              onClick={handleClick}
            >
              All Prodcuts
            </button>
          </ButtonGroup>
        </Box>
      </Box>
    </Flex>
  );
}
