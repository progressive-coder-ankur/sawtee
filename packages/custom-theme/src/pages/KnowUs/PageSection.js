import {
  Box,
  Divider,
  Text,
  useColorModeValue,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const PageSection = ({ section, libraries }) => {
  const { contentRepeater, title, content, hasTabOrHasAccordian } = section;
  const tabBorderColor = useColorModeValue("gray.200", "whiteAlpha.300");

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  return (
    <Box my="4">
      <Text
        as="h3"
        fontSize={["2xl", "3xl", "4xl"]}
        fontFamily="heading"
        py={"4"}
        mb="4"
      >
        {title}
      </Text>
      {hasTabOrHasAccordian ? (
        title !== "Strategies" ? (
          <Tabs variant="enclosed" size="md" isFitted colorScheme="primary">
            <TabList borderBottom={"none"}>
              {contentRepeater.map(({ tabTitle }) => (
                <Tab key={tabTitle}>
                  <Text
                    fontSize={["lg", "xl"]}
                    fontWeight="semibold"
                    fontFamily={"heading"}
                  >
                    {tabTitle}
                  </Text>
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              {contentRepeater.map(({ tabContent }, index) => (
                <TabPanel
                  px={["5", "10"]}
                  key={index}
                  border={"1px solid"}
                  borderColor={tabBorderColor}
                  display="flex"
                  py={["2", "4"]}
                  minH="250px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Html2React html={tabContent} />
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        ) : (
          <Accordion allowToggle>
            {contentRepeater.map(({ tabTitle, tabContent }) => {
              return (
                <AccordionItem key={tabTitle} border="none">
                  <AccordionButton
                    size="lg"
                    py="4"
                    _expanded={{
                      bg: useColorModeValue(
                        "rgba(0, 0, 0, 0.1)",
                        "rgba(0,0,0,0.3)"
                      ),
                    }}
                  >
                    <Text
                      as="h4"
                      fontSize={"2xl"}
                      flex="1"
                      textAlign="left"
                      fontFamily={"roboto"}
                    >
                      {tabTitle}
                    </Text>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel px={["5", "10"]}>
                    <Html2React html={tabContent} />
                  </AccordionPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        )
      ) : (
        <Box>
          <Html2React html={content} />
        </Box>
      )}
      <Divider my="60px" />
    </Box>
  );
};

export default PageSection;