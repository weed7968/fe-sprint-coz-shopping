import styled from "styled-components";

const Content = styled.div`
  margin-top: 30px;
`;

const Image = styled.img`
  width: 350px;
  height: 250px;
  border-radius: 15px;
`;

const Title = styled.h2`
  font-size: 16px;
`;

const Discount = styled.span`
  color: #452cdd;
  font-size: 16px;
  font-weight: 1000;
  float: right;
`;

const Price = styled.span`
  font-size: 16px;
  font-weight: 600;
  float: right;
`;

const Follow = styled.span`
  font-size: 16px;
  font-weight: 1000;
  float: right;
`;

const Follower = styled.span`
  font-size: 16px;
  font-weight: 600;
  float: right;
`;

const Contents = ({ item }) => {
  switch (item.type) {
    case "Exhibition":
      return (
        <Content>
          <Image src={item.image_url} />
          <Title>{item.title}</Title>
          <div>{item.sub_title}</div>
        </Content>
      );
    case "Brand":
      return (
        <Content>
          <Image src={item.brand_image_url} />
          <Title>
            {item.brand_name}
            <Follow>관심 고객수</Follow>
          </Title>
          <Follower>{item.follower.toLocaleString()}</Follower>
        </Content>
      );
    case "Category":
      return (
        <Content>
          <Image src={item.image_url} />
          <Title>#{item.title}</Title>
        </Content>
      );
    case "Product":
      return (
        <Content>
          <Image src={item.image_url} />
          <Title>
            {item.title}
            <Discount>{item.discountPercentage}%</Discount>
          </Title>
          <Price>{Number(item.price).toLocaleString()}원</Price>
        </Content>
      );
    default:
      return <div>error</div>;
  }
};

export default Contents;
