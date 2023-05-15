import styled from "styled-components";

const Image = styled.img`
  width: 350px;
  height: 250px;
  border-radius: 15px;
`;

const Title = styled.h2`
  font-size: 16px;
`;

const Contents = ({ item }) => {
  switch (item.type) {
    case "Exhibition":
      return (
        <div>
          <Image src={item.image_url} />
          <Title>{item.title}</Title>
          <div>{item.sub_title}</div>
        </div>
      );
      break;
    case "Brand":
      return (
        <div>
          <Image src={item.brand_image_url} />
          <Title>{item.brand_name}</Title>
          <div>관심 고객수</div>
          <div>{item.follower}</div>
        </div>
      );
      break;
    case "Category":
      return (
        <div>
          <Image src={item.image_url} />
          <Title>#{item.title}</Title>
        </div>
      );
      break;
    case "Product":
      return (
        <div>
          <Image src={item.image_url} />
          <Title>{item.title}</Title>
          <div>{item.discountPercentage}%</div>
          <div>{item.price}</div>
        </div>
      );
      break;
    default:
      return <div>error</div>;
      break;
  }
};

export default Contents;
