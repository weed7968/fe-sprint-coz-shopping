import styled from "styled-components";

const Foot = styled.footer`
  text-align: center;
  color: #888888;
  box-shadow: 0 -1px 10px #aaa;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = () => {
  return (
    <Foot>
      <div>
        개인정보 처리방침 | 이용 약관
        <br />
        All rights reserved @ Codestates
      </div>
    </Foot>
  );
};

export default Footer;
