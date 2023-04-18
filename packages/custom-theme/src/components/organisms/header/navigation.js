import { Box, Stack, useColorModeValue } from "@chakra-ui/react";
import { connect, styled } from "frontity";
import React from "react";
import FrontityLink from "../../atoms/link";

const MenuLink = styled(FrontityLink)`
  position: relative;
  text-decoration: none;
  font-weight: bold;

  &:after {
    transition: bottom ease 0.25s, background-color ease 0.25s;
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: transparent;
  }

  &:hover {
    &:after {
      bottom: -5px;
      background-color: ${(p) => p.theme.colors.accent[400]};
    }
  }
`;

export const SiteMenu = (props) => (
  <Stack
    m="0"
    ml="50px"
    spacing="50px"
    as="ul"
    listStyleType="none"
    alignItems="center"
    direction="row"
    color="white"
    justifyContent={"center"}
    {...props}
  />
);

const SiteMenuItem = ({ item, ...props }) => {
  return (
    <Box
      as="li"
      m="0"
      color={useColorModeValue("rgb(8 126 164/1)", "whiteAlpha.900")}
      fontSize={{ base: "sm", lg: "md" }}
      fontWeight="medium"
      textTransform="uppercase"
      position="relative"
      cursor="pointer"
      letterSpacing={"1px"}
      {...props}
    >
      <MenuLink textDecoration={"none"} link={item.url}>
        {item.title}
      </MenuLink>
    </Box>
  );
};

const Navigation = ({ state, menu, ...props }) => {
  const menuItems = state.source.get("/menus/primary/").items;


  return (
    <Box
      as="nav"
      width="100%"
      display={{ base: "none", lg: "block" }}
      {...props}
    >
      <SiteMenu>
        {menuItems &&
          Object.entries(menuItems).map(([key, item]) => {
            return <SiteMenuItem key={key} item={item} />;
          })}
      </SiteMenu>
    </Box>
  );
};

export default connect(Navigation);
