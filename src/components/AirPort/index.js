import { v4 as uuidv4 } from "uuid";
import Edit from "@spectrum-icons/workflow/Edit";
import Delete from "@spectrum-icons/workflow/Delete";
import {
  AirPortContainer,
  AirPortHeadingContainer,
  AirPortHeading,
  AirPortAddNewButton,
  UnOrderedAirPortList,
  UnOrderedAirPortListItem,
  EditButton,
  AirPortListHeadingContainer,
  AirPortListCheckBox,
  ListTitle,
  ListCountry,
  ListCountryCode,
  ListTerminals,
  AirPortCheckBox,
  AirPortListItem,
  AirPortListItemTitle,
  AirPortListItemCountry,
  AirPortListItemCode,
  AirPortListItemTerminals,
} from "./styledComponents";

const airportsList = [
  {
    id: uuidv4(),
    title: "Indira Gandhi International Airport",
    country: "India",
    code: "DEL",
    terminals: 3,
  },
  {
    id: uuidv4(),
    title: "Dubai International Airport",
    country: "UAE",
    code: "DXB",
    terminals: 5,
  },
  {
    id: uuidv4(),
    title: "Heathrow Airport",
    country: "England",
    code: "LHR",
    terminals: 6,
  },
  {
    id: uuidv4(),
    title: "Istanbul Airport",
    country: "Turkey",
    code: "IST",
    terminals: 3,
  },
  {
    id: uuidv4(),
    title: "Rajiv Gandhi International Airport",
    country: "Texas",
    code: "DFW",
    terminals: 14,
  },
];

const AirPort = () => (
  <AirPortContainer>
    <AirPortHeadingContainer>
      <AirPortHeading>Airports</AirPortHeading>
      <AirPortAddNewButton>+ Add new</AirPortAddNewButton>
    </AirPortHeadingContainer>
    <UnOrderedAirPortList>
      <UnOrderedAirPortListItem>
        <AirPortListHeadingContainer>
          <AirPortListCheckBox type="checkbox" />
          <ListTitle>All Airports</ListTitle>
          <ListCountry>Country</ListCountry>
          <ListCountryCode>Code</ListCountryCode>
          <ListTerminals>Terminals</ListTerminals>
        </AirPortListHeadingContainer>
      </UnOrderedAirPortListItem>
      {airportsList.map((eachItem) => (
        <UnOrderedAirPortListItem>
          <AirPortListItem>
            <AirPortCheckBox type="checkbox" />
            <AirPortListItemTitle>{eachItem.title}</AirPortListItemTitle>
            <AirPortListItemCountry>{eachItem.country}</AirPortListItemCountry>
            <AirPortListItemCode>{eachItem.code}</AirPortListItemCode>
            <AirPortListItemTerminals>
              {eachItem.terminals}
            </AirPortListItemTerminals>
          </AirPortListItem>
          <EditButton type="text">
            <Edit width="20px" />
          </EditButton>
          <EditButton type="text">
            <Delete width="20px" />
          </EditButton>
        </UnOrderedAirPortListItem>
      ))}
    </UnOrderedAirPortList>
  </AirPortContainer>
);

export default AirPort;
