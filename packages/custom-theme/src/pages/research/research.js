import {
  Box,
  useColorModeValue,
  Image,
  Heading,
  Divider,
  Button,
  GridItem,
  Grid,
  useBreakpointValue,
} from "@chakra-ui/react";
import { connect } from "frontity";
import { LightPatternBox } from "../../components/styles/pattern-box";
import Section from "../../components/styles/section";
import Sidebar from "../../components/organisms/archive/sidebar";
import Loading from "../../components/atoms/loading";
import Publication1 from "../../assets/publications-1.jpg";
import ResearchList from "./researchList";
import { useArchiveInfiniteScroll } from "@frontity/hooks";
import React from "react";
import { formatCPTData } from "../../components/helpers";
import SawteeInMediaWidget from "../../components/atoms/sawteeInMediaWidget";
import GlassBox from "../../components/atoms/glassBox";
import TwitterTimeline from "../../components/atoms/twitterTimeline";
import SubscriptionCard from "../../components/atoms/subscriptionCard";

const ResearchArchive = ({ state, categories }) => {
  // Get the data of the current list.
  const postData = state.source.get(state.router.link);
  const linkColor = state.theme.colors.linkColor;
  const { pages, isFetching, isLimit, isError, fetchNext } =
    useArchiveInfiniteScroll({ limit: 3 });
  const [news, setNews] = React.useState([]);
  const newsData = state.source.get("/sawtee-in-media");

  const size = useBreakpointValue(["sm", "md", "lg", "huge"]);

  React.useEffect(() => {
    let newsArray = [];
    if (newsData.isReady) {
      newsData.items.forEach((item) => {
        const post = state.source[item.type][item.id];
        newsArray.push(formatCPTData(state, post, categories));
      });
    }
    if (newsArray.length > 0) {
      setNews(newsArray);
    }
  }, [newsData]);

  // Once the post has loaded in the DOM, prefetch both the
  // home posts and the list component so if the user visits
  // the home page, everything is ready and it loads instantly.

  // Load the post, but only if the data is ready.
  if (!postData.isReady) return null;
  return (
    <LightPatternBox
      bg={useColorModeValue("whiteAlpha.300", "gray.800")}
      showPattern={state.theme.showBackgroundPattern}
      pt="0"
    >
      <Box pb={{ base: "2rem", lg: "50px" }} pos="relative">
        <Box
          as="figure"
          mt={4}
          height="350px"
          _after={{
            display: "block",
            content: '""',
            width: "100%",
            height: "350px",
            background: "rgba(0,0,0,0.4)",
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
        >
          <Box as={Image} boxSize="100%" objectFit="cover" src={Publication1} />
        </Box>

        <Box
          textAlign="center"
          mt={{ base: "20px", lg: "4rem" }}
          px={{ base: "32px", md: "0" }}
          color={"whiteAlpha.900"}
          position="absolute"
          bottom="15%"
          left="15%"
        >
          <Heading
            fontWeight="bold"
            size={"2xl"}
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            mt="30px"
            mb={{ base: "20px", lg: "32px" }}
            textTransform="capitalize"
          >
            {postData.type}
          </Heading>
        </Box>
      </Box>
      <Section
        pb="80px"
        px={{ base: "32px", md: "0" }}
        size={size}
        pt="50px"
        fontSize={["md", "lg", "xl"]}
      >
        <Grid
          templateColumns={{ base: "1fr", lg: "repeat(5, 1fr)" }}
          gap="10"
          pos={"relative"}
        >
          <GridItem colSpan={3}>
            {pages.map(({ key, link, isLast, Wrapper }) => (
              <Wrapper key={key}>
                <ResearchList link={link} />
                {isLast && <Divider h="10px" mt="10" />}
                <Box w="full" mb="40px" textAlign={"center"}>
                  {isFetching && <Loading />}
                  {isLimit && (
                    <Button onClick={fetchNext}>Load Next Page</Button>
                  )}
                  {isError && (
                    <Button onClick={fetchNext}>
                      Something failed - Retry
                    </Button>
                  )}
                </Box>
              </Wrapper>
            ))}
          </GridItem>
          <GridItem colSpan={2} display={"flex"}>
            <Sidebar>
              <GlassBox py="4" px="8" rounded="2xl" height="max-content">
                <SawteeInMediaWidget news={news} linkColor={linkColor} />
              </GlassBox>
              <GlassBox
                rounded="2xl"
                height="max-content"
                display="flex"
                justifyContent="center"
                alignItems="center"
                id="twitter-wrapper"
              >
                <TwitterTimeline
                  handle="sawteenp"
                  width={"100%"}
                  height="700px"
                  maxH={"700px"}
                  rounded="xl"
                />
              </GlassBox>
              <GlassBox
                py="4"
                px="8"
                rounded="2xl"
                height="max-content"
                position={"sticky"}
                top={"8.5rem"}
              >
                <SubscriptionCard />
              </GlassBox>
            </Sidebar>
          </GridItem>
        </Grid>
        {/* <Pagination mt="56px" /> */}
      </Section>
    </LightPatternBox>
  );
};

export default connect(ResearchArchive);