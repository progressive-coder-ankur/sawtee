import { useColorModeValue, Stack, Button } from "@chakra-ui/react";
import Section from "../../components/styles/section";
import Link from "../../components/atoms/link";

const PublicationFilter = ({ categories, linkColor }) => {
  return (
    <Section
      bg={useColorModeValue("transparent")}
      size="2xl"
      h="auto"
      px={{ base: "32px", md: "0" }}
      py="6"
      display="flex"
    >
      <Stack
        spacing={[1, 5]}
        rowGap="4"
        direction={["column", "row"]}
        wrap="wrap"
        alignItems={"center"}
        justifyContent="center"
      >
        {categories &&
          categories
            .filter((category) => category.parent === 5)
            .map(({ name, id, link }) => {
              return (
                <Link link={link}>
                  <Button
                    key={id}
                    colorScheme={"primary"}
                    variant="outline"
                    size="sm"
                  >
                    {name}
                  </Button>
                </Link>
              );
            })}
      </Stack>
    </Section>
  );
};

export default PublicationFilter;
