import React from "react";
import styled from "styled-components";
import bookmarkOn from "../img/bookmarkOn.png";
import bookmarkOff from "../img/bookmarkOff.png";

const ButtonBookmark = styled.img``;

export const Button = ({ primary, label, ...rest }) => {
  const Bookmarked = primary ? bookmarkOn : bookmarkOff;
  return <ButtonBookmark src={Bookmarked} />;
};
