import styled from "styled-components";
import Contents from "../components/contents";
import { useContext, useState } from "react";
import all from "../img/All.png";
import product from "../img/Product.png";
import category from "../img/Category.png";
import exhibition from "../img/Exhibition.png";
import brand from "../img/Brand.png";
import { AppContext } from "../App";

const Maincont = styled.main`
  display: flex;
  flex-wrap: wrap;
`;

const Filter = styled.div`
  display: flex;
  justify-content: center;
`;

const Filtered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 82px;
  height: 100px;
  padding: 0 15px;
  &:hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  display: flex;
  justify-content: center;
  width: 82px;
  height: 82px;
  border-radius: 10px;
`;

const Bookmark = ({ data }) => {
  const [filtered, setFiltered] = useState(data);

  const { bookmark } = useContext(AppContext);

  const ViewAll = () => {
    setFiltered(data);
  };

  const ViewProduct = () => {
    setFiltered(data.filter((obj) => obj.type === "Product"));
  };

  const ViewCategory = () => {
    setFiltered(data.filter((obj) => obj.type === "Category"));
  };

  const ViewExhibition = () => {
    setFiltered(data.filter((obj) => obj.type === "Exhibition"));
  };

  const ViewBrand = () => {
    setFiltered(data.filter((obj) => obj.type === "Brand"));
  };

  return (
    <>
      <Filter>
        <Filtered onClick={ViewAll}>
          <Image src={all} />
          전체
        </Filtered>
        <Filtered onClick={ViewProduct}>
          <Image src={product} />
          상품
        </Filtered>
        <Filtered onClick={ViewCategory}>
          <Image src={category} />
          카테고리
        </Filtered>
        <Filtered onClick={ViewExhibition}>
          <Image src={exhibition} />
          기획전
        </Filtered>
        <Filtered onClick={ViewBrand}>
          <Image src={brand} />
          브랜드
        </Filtered>
      </Filter>
      <Maincont>
        {filtered
          .filter((el) => bookmark.includes(el.id))
          .map((item) => {
            return <Contents item={item} />;
          })}
      </Maincont>
    </>
  );
};

export default Bookmark;
