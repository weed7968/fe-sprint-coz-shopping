import { useState } from "react";
import styled from "styled-components";

const Content = styled.div`
  margin-top: 30px;
  &:hover {
    cursor: pointer;
  }
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

const Modalbg = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.open ? "none" : null)};
  overflow: hidden;
`;

const Modal = styled.div`
  width: 970px;
  height: 600px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: fixed;
  display: flex;
  align-items: flex-end;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${(props) => (props.open ? "none" : null)};
`;

const ModalTitle = styled.h2`
  color: white;
`;

const Contents = ({ item }) => {
  const [open, setOpen] = useState(true);
  const OpenModal = () => {
    setOpen(false);
  };

  const clickModalbg = () => {
    setOpen(true);
  };

  switch (item.type) {
    case "Exhibition":
      return (
        <>
          <Modalbg open={open} onClick={clickModalbg} />
          <Modal open={open} img={item.image_url}>
            <ModalTitle>{item.title}</ModalTitle>
          </Modal>
          <Content onClick={OpenModal}>
            <Image src={item.image_url} />
            <Title>{item.title}</Title>
            <div>{item.sub_title}</div>
          </Content>
        </>
      );
    case "Brand":
      return (
        <>
          <Modalbg open={open} onClick={clickModalbg} />
          <Modal open={open} img={item.brand_image_url}>
            <ModalTitle>{item.brand_name}</ModalTitle>
          </Modal>
          <Content onClick={OpenModal}>
            <Image src={item.brand_image_url} />
            <Title>
              {item.brand_name}
              <Follow>관심 고객수</Follow>
            </Title>
            <Follower>{item.follower.toLocaleString()}</Follower>
          </Content>
        </>
      );
    case "Category":
      return (
        <>
          <Modalbg open={open} onClick={clickModalbg} />
          <Modal open={open} img={item.image_url}>
            <ModalTitle>#{item.title}</ModalTitle>
          </Modal>
          <Content onClick={OpenModal}>
            <Image src={item.image_url} />
            <Title>#{item.title}</Title>
          </Content>
        </>
      );
    case "Product":
      return (
        <>
          <Modalbg open={open} onClick={clickModalbg} />
          <Modal open={open} img={item.image_url}>
            <ModalTitle>#{item.title}</ModalTitle>
          </Modal>
          <Content onClick={OpenModal}>
            <Image src={item.image_url} />
            <Title>
              {item.title}
              <Discount>{item.discountPercentage}%</Discount>
            </Title>
            <Price>{Number(item.price).toLocaleString()}원</Price>
          </Content>
        </>
      );
    default:
      return <div>error</div>;
  }
};

export default Contents;
