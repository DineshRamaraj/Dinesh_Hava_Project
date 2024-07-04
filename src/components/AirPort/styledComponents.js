import styled from "styled-components";

export const AirPortContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px 30px 0 30px;
`;

export const AirPortHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AirPortHeading = styled.h1`
  font-size: 18px;
  font-family: "Roboto";
  color: #222222;
`;

export const AirPortAddNewButton = styled.button`
  background-color: #000000;
  color: #ffffff;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 500;
  padding: 10px 30px;
  border: 0;
  border-radius: 20px;
  cursor: pointer;
`;

export const UnOrderedAirPortList = styled.table`
  list-style-type: none;
  padding-left: 0;
`;

export const UnOrderedAirPortListItem = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 90% 5% 5%;
`;

export const EditButton = styled.button`
border: 0;
outline: none;
cursor: pointer;
background-color:transparent;
`

export const AirPortListHeadingContainer = styled.tr`
  display: flex;
  align-items: center;
  display: grid;
  grid-template-columns: 5% 50% 15% 15% 15%;
  padding: 0 15px;
  flex-grow: 1;
`;

export const AirPortListCheckBox = styled.input`
  width: 15px;
  height: 15px;
`;

export const ListTitle = styled.h1`
  font-size: 16px;
  font-family: "Roboto";
  font-weight: 500;
  color: #000000;
`;

export const ListCountry = styled.h1`
  font-size: 16px;
  font-family: "Roboto";
  font-weight: 500;
  color: #000000;
`;

export const ListCountryCode = styled.h1`
  font-size: 16px;
  font-family: "Roboto";
  font-weight: 500;
  color: #000000;
`;

export const ListTerminals = styled.h1`
  font-size: 16px;
  font-family: "Roboto";
  font-weight: 500;
  color: #000000;
`;

export const AirPortListItem = styled.td`
  display: flex;
  align-items: center;
  display: grid;
  grid-template-columns: 5% 51% 15% 15% 15%;
  border: 1px solid #d5d5d5;
  border-radius: 8px;
  padding: 0 15px;
`;

export const AirPortCheckBox = styled.input`
  width: 15px;
  height: 15px;
`;

export const AirPortListItemTitle = styled.p`
  font-size: 14px;
  font-family: "Roboto";
  color: #222222;
`;

export const AirPortListItemCountry = styled.p`
  font-size: 14px;
  font-family: "Roboto";
  color: #222222;
`;
export const AirPortListItemCode = styled.p`
  font-size: 14px;
  font-family: "Roboto";
  color: #222222;
`;
export const AirPortListItemTerminals = styled.p`
  font-size: 14px;
  font-family: "Roboto";
  color: #222222;
`;
