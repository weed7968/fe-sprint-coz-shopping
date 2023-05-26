import React from "react";
import styled from "styled-components";
import bookmarkOn from "../img/bookmarkOn.png";
import bookmarkOff from "../img/bookmarkOff.png";

const ButtonBookmark = styled.img`
  src: ${props.primary ? bookmarkOn : bookmarkOff};
`;

export const Button = ({ primary, label, ...rest }) => {
  return <ButtonBookmark primary={primary} />;
};
