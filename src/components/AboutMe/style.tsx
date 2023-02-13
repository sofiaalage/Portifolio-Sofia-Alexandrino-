import { styled } from "@/styles/stitches.config";
import { Container, Flex } from "@/styles/Global";

export const AboutMe = styled("div", {
  
  backgroundColor: "$grey4",
  padding: "9rem 0",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "left top 8rem",
  "& a": {
    margin: "0 !important",
  },
  "@tablet": {
    backgroundPosition: "center top 1rem",
  },
 
  [`& ${Container}`]: {
    display: "flex",
    fontSize: "1rem",
    justifyContent: "space-between",
    alignItems: "center",
    "@mobile": {
      flexDirection: "column",
      [`& ${Flex}:first-child`]: {
        marginBottom: "$5",
        flexDirection: "column",
        textAlign: "center",
        [`& img`]: {
          marginBottom: "$2",
        },
      },
    },
  },
});
