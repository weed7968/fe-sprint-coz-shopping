import styled from "styled-components";
import Contents from "../components/contents";

const Maincont = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Main = ({ data }) => {
  const list = data.map((item) => {
    return <Contents item={item} />;
  });

  return <Maincont>{list}</Maincont>;
};

export default Main;
