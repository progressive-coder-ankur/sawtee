import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Link from "../../atoms/link";
import { decode } from "frontity";

export const PostCategory = (props) => (
  <Box
    px={3}
    py={1}
    className="primary-link category"
    bg={useColorModeValue("rgb(230 247 255/1)", "rgb(88,175,223,.1)")}
    fontSize="sm"
    fontWeight="700"
    rounded="md"
    zIndex={50}
    cursor="pointer"
    {...props}
  />
);

export const PostCategories = ({
  categories,
  limit = 3,
  color = "white",
  ...props
}) => {
  const limitCategories =
    categories.length > limit
      ? categories.filter((_, idx) => idx < limit)
      : categories;

  return (
    <Flex flexWrap="wrap" w="max-content" mt="12px" {...props}>
      {limitCategories.map((category) => (
        <PostCategory key={category.id} mr="6px" mb="6px">
          <Link
            link={category.link}
            dangerouslySetInnerHTML={{ __html: decode(category.name) }}
          />
        </PostCategory>
      ))}
    </Flex>
  );
};

export default PostCategories;
