import {
  SideHeaderContainer,
  UnOrderedList,
  ListItem,
  ListImage,
  ListHeading,
  ListTitle,
} from "./styledComponents";
import { v4 as uuidv4 } from "uuid";

const menuList = [
  {
    id: uuidv4(),
    text: "Home",
    imageUrl:
      "https://res.cloudinary.com/dhwz560kk/image/upload/v1720110731/qoxohspgluswai2spfyn.png",
  },
  {
    id: uuidv4(),
    text: "Dashboard",
    imageUrl:
      "https://res.cloudinary.com/dhwz560kk/image/upload/v1720110816/oim9atp44bj2piy9knpy.png",
  },
];

const servicesList = [
  {
    id: uuidv4(),
    text: "Airports",
  },
  {
    id: uuidv4(),
    text: "Videos",
  },
];

const othersList = [
  {
    id: uuidv4(),
    text: "List1",
  },
  {
    id: uuidv4(),
    text: "List2",
  },
  {
    id: uuidv4(),
    text: "List3",
  },
];

const SideHeader = () => (
  <SideHeaderContainer>
    <UnOrderedList>
      {menuList.map((eachItem) => (
        <ListItem key={eachItem.id}>
          <ListImage src={eachItem.imageUrl} alt={eachItem.text} />
          <ListTitle>{eachItem.text}</ListTitle>
        </ListItem>
      ))}
    </UnOrderedList>
    <UnOrderedList>
        <ListHeading>Services</ListHeading>
      {servicesList.map((eachItem) => (
        <ListItem key={eachItem.id}>
          <ListTitle>{eachItem.text}</ListTitle>
        </ListItem>
      ))}
    </UnOrderedList>
    <UnOrderedList>
        <ListHeading>Others</ListHeading>
      {othersList.map((eachItem) => (
        <ListItem key={eachItem.id}>
          <ListTitle>{eachItem.text}</ListTitle>
        </ListItem>
      ))}
    </UnOrderedList>
    
  </SideHeaderContainer>
);

export default SideHeader;
