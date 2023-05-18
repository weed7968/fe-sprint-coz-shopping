import { useContext } from "react";
import styled from "styled-components";
import Contents from "../components/contents";
import { AppContext } from "../App";

const Maincont = styled.main`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const Title = styled.h2``;

const Main = ({ data }) => {
  const { bookmark } = useContext(AppContext);

  const list = data
    .map((item) => {
      return <Contents item={item} />;
    })
    .slice(0, 4);

  const bookmarked = data
    .filter((el) => bookmark.includes(el.id))
    .map((item) => {
      return <Contents item={item} />;
    })
    .slice(0, 4);

  return (
    <>
      <Title>상품 리스트</Title>
      <Maincont>{list}</Maincont>
      <Title>북마크 리스트</Title>
      <Maincont>{bookmarked}</Maincont>
    </>
  );
};

export default Main;
