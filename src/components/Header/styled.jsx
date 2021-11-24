import styled from "styled-components";
import { primaryColor, defaultDarkColor } from "../../config/colors";

export const Nav = styled.div`
  color: ${defaultDarkColor};
  font-size: 18px;
  display: flex;
  flex-direction: row;

  background: ${primaryColor};
  justify-content: space-between;
  a {
    margin: 0 10px 0;
    font-weight: bold;
    color: ${defaultDarkColor};
    font-size: 18px;
  }
`;
export const Headers = styled(Nav)`
  padding: 15px;
`;
export const Home = styled(Nav)`
  justify-content: flex-start;
  padding: 15px;
`;
