import styled from "styled-components";

export const SideHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  max-width: 30%;
  padding: 20px;
  box-shadow: 0 10px 10px 0px #00000033;
  min-height: 90vh;
  padding-left: 30px;
`;

export const UnOrderedList = styled.ul`
  padding-left: 0;
  list-style: none;
  margin: 10px 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px ;
`;

export const ListImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 7px;
`;

export const ListHeading = styled.h1`
font-size: 18px;
font-weight: 500;
font-family: "Roboto";
color: #000000;
`

export const ListTitle = styled.p`
  font-family: "Roboto";
  font-size: 16px;
  color: #222222;
  margin: 0;
`;
