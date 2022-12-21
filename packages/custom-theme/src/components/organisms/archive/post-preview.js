import { Box, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { PostImageWithOverlay } from "../../molecules/featured-post/components";
import Link from "../../atoms/link";
import PostCategories from "../post/post-categories";
import { PostOverlay } from "../../molecules/featured-post/components";
import generateGradient from "../../molecules/featured-post/genarate-gradient";
import { formatDateWithMoment } from "../../helpers";

const PostPreview = ({ data, ...rest }) => {
  const { title, excerpt, featured_media, link, categories, publishDate } =
    data;
  return (
    <Flex
      direction="column"
      position="relative"
      bg={useColorModeValue("whiteAlpha", "rgba(0,0,0,0.3)")}
      as="article"
      shadow="md"
      rounded="xl"
      {...rest}
    >
      {/* Use the frontity settings for featuredPost here */}
      {featured_media && featured_media.src && (
        <Link link={link}>
          <PostImageWithOverlay {...featured_media} />
        </Link>
      )}

      {Object.keys(featured_media).length === 0 && (
        <Link link={link}>
          <Box
            role="group"
            cursor="pointer"
            height="260px"
            width="100%"
            bgImage={generateGradient()}
            pos="relative"
          >
            <PostOverlay />
          </Box>
        </Link>
      )}

      <Flex p="40px" flexGrow="1" direction="column">
        <Heading
          fontSize="2xl"
          as="h4"
          noOfLines={"3"}
          minH="5.625rem"
          textTransform="uppercase"
        >
          <Link className="primary-link" link={link}>
            {title}
          </Link>
        </Heading>
        <Box
          my="20px"
          flex="1"
          overflow="hidden"
          textOverflow="ellipsis"
          display="-webkit-box"
          lineHeight="1.5"
          maxHeight="4.6875rem"
          color={useColorModeValue("gray.700", "whiteAlpha.800")}
          sx={{ webkitLineClamp: "3", webkitBoxOrient: "vertical" }}
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
        <Box
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
        >
          <PostCategories justify="flex-start" categories={categories} />
          <Box as="time" fontWeight={"semibold"}>
            {formatDateWithMoment(publishDate)}
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default PostPreview;
