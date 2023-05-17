import styled from "styled-components";
import Contents from "../components/contents";

const Maincont = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Title = styled.h2``;

const Main = ({ data }) => {
  const list = data
    .map((item) => {
      return <Contents item={item} />;
    })
    .slice(0, 4);

  return (
    <>
      <Title>상품 리스트</Title>
      <Maincont>{list}</Maincont>
      <Title>북마크 리스트</Title>
      <Maincont>{list}</Maincont>
    </>
  );
};

export default Main;
