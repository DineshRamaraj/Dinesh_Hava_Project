import { MainAppContainer, HomeContainer } from "./styledComponents";
import MainHeader from "../MainHeader";
import SideHeader from '../SideHeader';
import AirPort from '../AirPort';

const Home = () => (
  <MainAppContainer>
    <MainHeader />
    <HomeContainer>
        <SideHeader/>
        <AirPort/>
    </HomeContainer>
  </MainAppContainer>
);

export default Home;
