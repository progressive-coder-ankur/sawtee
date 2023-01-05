import React from "react";
import { Box, useColorModeValue, Text, Stack, Divider } from "@chakra-ui/react";
import SubscriptionCard from "../../components/atoms/subscriptionCard";
import TwitterTimeline from "../../components/atoms/twitterTimeline";
import GlassBox from "../../components/atoms/glassBox";
import moment from "moment/moment";
import Link from "../../components/atoms/link";
import Title from "../../components/atoms/title";

export const Sidebar = ({
  data,
  title,
  showSawteeInMedia,
  showTwitterTimeline,
  showSubscriptionCard,
}) => {
  return (
    <Stack spacing={16}>
      {showSawteeInMedia && (
        <GlassBox py="4" px="8" rounded="2xl" height="max-content">
          <Title text={title} textAlign="center" />
          <Stack spacing={8} mt="6">
            {data &&
              data.map((event, index) => {
                const format = "MMMM Do YYYY";
                const formatedDate = moment(event.date).format(format);
                return (
                  <Stack key={index}>
                    <Text className="title" fontSize={["sm", "md"]}>
                      <Link className="primary-link" link={"#"}>
                        {event.title}
                      </Link>
                    </Text>
                    <Box
                      display={"flex"}
                      justifyContent="space-between"
                      fontSize={"sm"}
                      fontWeight="semibold"
                    >
                      <Text>{event.publisher}</Text>
                      <Box
                        as="time"
                        dateTime={new Date(event.date).toLocaleDateString()}
                      >
                        {formatedDate}
                      </Box>
                    </Box>
                    <Divider
                      display={index === data.length - 1 ? "none" : "block"}
                    />
                  </Stack>
                );
              })}
          </Stack>
          <Stack spacing={8} mt="6">
            {data.map((event, index) => {
              const format = "MMMM Do YYYY";
              const formatedDate = moment(event.date).format(format);
              return (
                <Stack key={index}>
                  <Text className="title" fontSize={["sm", "md"]}>
                    <Link className="primary-link" link={"#"}>
                      {event.title}
                    </Link>
                  </Text>
                  <Box
                    display={"flex"}
                    justifyContent="space-between"
                    fontSize={"sm"}
                    fontWeight="semibold"
                  >
                    <Text>{event.publisher}</Text>
                    <Box
                      as="time"
                      dateTime={new Date(event.date).toLocaleDateString()}
                    >
                      {formatedDate}
                    </Box>
                  </Box>
                  <Divider
                    display={index === data.length - 1 ? "none" : "block"}
                  />
                </Stack>
              );
            })}
          </Stack>
        </GlassBox>
      )}

      {showSubscriptionCard && (
        <GlassBox py="4" px="8" rounded="2xl" height="max-content">
          <SubscriptionCard />
        </GlassBox>
      )}

      {showTwitterTimeline && (
        <GlassBox py="4" px="8" rounded="2xl" height="max-content">
          <TwitterTimeline handle="sawteenp" width={"100%"} height="auto" />
        </GlassBox>
      )}
    </Stack>
  );
};

export default Sidebar;
