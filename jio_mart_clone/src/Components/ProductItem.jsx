import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function ProductItem({
  id,
  item_img_url,
  item_final_price,
  item_price,
  item_name,
  item_disc_price,
  windowWidth,
}) {
  const fprice =
    typeof item_final_price === "string"
      ? parseInt(item_final_price.split(",").join(""))
      : typeof item_final_price === "number"
      ? item_final_price
      : 0;
  const iprice =
    typeof item_price === "string"
      ? parseInt(item_price.split(",").join(""))
      : typeof item_price === "number"
      ? item_price
      : 0;
  const discountPercent = parseInt(
    fprice !== NaN && iprice !== NaN ? ((iprice - fprice) / iprice) * 100 : 0
  );
  // console.log(typeof item_final_price === 'string', typeof item_final_price)
  if (windowWidth <= 770) {
    return (
      <Flex p={5} position="relative" justify="space-between" m={2}>
        <Box width="25%">
          <Image
            src={
              item_img_url !== ""
                ? item_img_url
                : "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
            }
            height={120}
            width={120}
          />
        </Box>
        <Box width="75%">
          <Box mt={2} mb={2}>
            <Heading size="sm" fontWeight={"medium"}>
              {item_name}
            </Heading>
          </Box>
          <Flex>
            <Heading size="sm" fontWeight={"medium"}>
              ₹ {item_final_price}
            </Heading>
            <Text fontSize="xs" decoration="line-through" ml={2}>
              {item_price}
            </Text>
          </Flex>
        </Box>
        {item_final_price && item_price ? (
          <Box position="absolute" top="5" left={-1}>
            <Image
              src="https://www.jiomart.com/assets/version1664452279/smartweb/images/icons/offer_bg.svg"
              width={50}
              height={50}
            />
            <Text
              position="absolute"
              top={1}
              left={3}
              color="white"
              fontSize="sm"
            >
              <span style={{ width: "bold" }}>{discountPercent}</span>% OFF
            </Text>
          </Box>
        ) : null}
      </Flex>
    );
  }
  return (
    <Box
      p={5}
      position="relative"
      m={2}
      border="1px"
      borderColor="lightgray"
      borderRadius={10}
    >
      <Box>
        <Center>
          <Image
            src={
              item_img_url !== ""
                ? item_img_url
                : "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
            }
            height={180}
            width={180}
          />
        </Center>
      </Box>
      <Box mt={2} mb={2}>
        <Heading size="sm" fontWeight={"medium"}>
          {item_name.length < 20
            ? item_name
            : item_name.substring(0, 50) + "...."}
        </Heading>
      </Box>
      <Flex>
        <Heading size="sm" fontWeight={"medium"}>
          ₹ {item_final_price}
        </Heading>
        <Text fontSize="xs" decoration="line-through" ml={2}>
          {item_price}
        </Text>
      </Flex>
      {item_final_price && item_price ? (
        <Box position="absolute" top="5">
          <Image
            src="https://www.jiomart.com/assets/version1664452279/smartweb/images/icons/offer_bg.svg"
            width={50}
            height={50}
          />
          <Text
            position="absolute"
            top={1}
            left={3}
            color="white"
            fontSize="sm"
          >
            <span style={{ width: "bold" }}>{discountPercent}</span>% OFF
          </Text>
        </Box>
      ) : null}
    </Box>
  );
}
