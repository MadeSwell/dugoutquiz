import styled from "@emotion/styled";

export const Header = styled.header(
  {
    width: "100%",
    height: "80px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 30px"
  },
  ({ theme }) => ({
    backgroundColor: theme.colors.blackAlpha[400]
  })
);
