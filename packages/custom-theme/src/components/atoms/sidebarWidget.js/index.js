import {
  Box,
  Divider,
  Heading,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Link from "../../atoms/link";
import Title from "../../atoms/title";
import { formatedDate } from "../../helpers";
import { decode } from "frontity";

const SidebarWidget = ({ array, linkColor, title }) => {
  return (
    <>
      <Title text={title} textAlign="center" mb={8} />
      {array.length > 0 ? (
        array.map((item, index) => {
          return (
            <Stack spacing={2} mt="6" key={item.id}>
              <Heading
                className="title"
                fontSize={["sm", "md"]}
                mb="2"
                color={useColorModeValue("gray.700", "whiteAlpha.700")}
                lineHeight={1.2}
                fontWeight="bold"
                _hover={{
                  color: linkColor ? linkColor : "primary.700",
                  textDecoration: "underline",
                }}
              >
                <Link link={item.link}>{decode(item.title)}</Link>
              </Heading>
              <Box
                display={"flex"}
                justifyContent="space-between"
                fontSize={"sm"}
                fontWeight="semibold"
                color={useColorModeValue("gray.600", "whiteAlpha.600")}
              >
                {item.categories &&
                  item.categories
                    .filter((cat) => cat.parent !== 0)
                    .map((category, idx) => {
                      return (
                        <Text
                          as="a"
                          key={idx}
                          href={category.link}
                          _hover={{ textDecor: "underline" }}
                          maxW="180px"
                          noOfLines={1}
                        >
                          {category.name}
                        </Text>
                      );
                    })}
                <Box
                  as="time"
                  dateTime={new Date(item.publishDate).toLocaleDateString()}
                >
                  {formatedDate(item.publishDate)}
                </Box>
              </Box>
              <Divider
                display={index === array.length - 1 ? "none" : "block"}
              />
            </Stack>
          );
        })
      ) : (
        <Stack spacing={6} mt="3">
          <Box display={"flex"} flexDir={"column"} gap={2}>
            <Skeleton w="full" height="15px" />
            <Box display={"flex"} justifyContent={"space-between"}>
              <Skeleton w="80px" height="10px" />
              <Skeleton w="80px" height="10px" />
            </Box>
          </Box>
          <Box display={"flex"} flexDir={"column"} gap={2}>
            <Skeleton w="full" height="15px" />
            <Box display={"flex"} justifyContent={"space-between"}>
              <Skeleton w="80px" height="10px" />
              <Skeleton w="80px" height="10px" />
            </Box>
          </Box>
          <Box display={"flex"} flexDir={"column"} gap={2}>
            <Skeleton w="full" height="15px" />
            <Box display={"flex"} justifyContent={"space-between"}>
              <Skeleton w="80px" height="10px" />
              <Skeleton w="80px" height="10px" />
            </Box>
          </Box>
        </Stack>
      )}
    </>
  );
};

export default SidebarWidget;
