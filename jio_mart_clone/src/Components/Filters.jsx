import {
  Box,
  Checkbox,
  Container,
  Divider,
  Heading,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  useRangeSlider,
} from "@chakra-ui/react";
import React from "react";

const filterList = {
  Top_Deals: ["Trending"],
  Electronics: [
    "Mobile and Tablet",
    "TV",
    "Iron",
    "Home Appliances",
    "Kitchen Appliances",
    "Computers",
    "Cameras",
    "Personal Care and Grooming",
  ],
  fruitsNvegies: ["Trending"],
  mens: ["Trending"],
  kitchenware: [
    "container",
    "basket",
    "storage",
    "Blender",
    "Lunch Box",
    "Bowl",
    "Strainer",
  ],
  makeup: ["Lipcare", "Cosmetics", "accessories", "Skincare"],
};

export default function Filters() {
  // const slider = useRangeSlider();
  const filters = filterList["makeup"];

  // console.log(slider);
  return (
    <Container mt={10} bg={"white"} pt={5} pb={5} width="90%" borderRadius={10}>
      <Heading size="md" fontWeight={"medium"} pb={4}>
        Filters
      </Heading>
      <Divider />
      <Box>
        <Heading size="sm" fontWeight={"medium"} pt={6} pb={4}>
          Availability
        </Heading>
        <Box>
          <Checkbox>InStock Products</Checkbox>
        </Box>
      </Box>
      <Box>
        <Heading size="sm" fontWeight={"medium"} pt={4} pb={4}>
          Categories
        </Heading>
        <Box height={40} overflowY={"scroll"}>
          {filters.map((filter) => (
            <Box
              borderBottom={"1px"}
              pt={2}
              pb={2}
              borderColor={"gray.100"}
              key={filter}
            >
              <Checkbox>{filter}</Checkbox>
            </Box>
          ))}
        </Box>
      </Box>
      <Box>
        <Heading size="sm" fontWeight={"medium"} pt={4} pb={4}>
          Price
        </Heading>
        <RangeSlider defaultValue={[55, 99848]} min={0} max={100000} step={10} onChangeEnd={(val) => console.log(val)}>
          <RangeSliderTrack bg="red.100">
            <RangeSliderFilledTrack bg="tomato" />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={6} index={0} />
          <RangeSliderThumb boxSize={6} index={1} />
        </RangeSlider>
      </Box>
      <Box>
        <Heading size="sm" fontWeight={"medium"} pt={4} pb={4}>
          Discount
        </Heading>
        <RangeSlider defaultValue={[5, 20]} min={0} max={100} step={1} onChangeEnd={(val) => console.log(val)}>
          <RangeSliderTrack bg="red.100">
            <RangeSliderFilledTrack bg="tomato" />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={6} index={0} />
          <RangeSliderThumb boxSize={6} index={1} />
        </RangeSlider>
      </Box>
    </Container>
  );
}
