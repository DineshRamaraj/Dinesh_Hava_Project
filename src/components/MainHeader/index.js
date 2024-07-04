import {MainHeaderContainer, MainHeaderHeading, MainHeaderImage} from './styledComponents'

const MainHeader = () => {
  return (
    <MainHeaderContainer>
      <MainHeaderHeading>hava havai</MainHeaderHeading>
      <MainHeaderImage
        src="https://res.cloudinary.com/dhwz560kk/image/upload/v1720108621/ydg8pvbneepdnykr0an5.png"
        alt="website logo"
        className="main-header-image"
      />
    </MainHeaderContainer>
  );
};

export default MainHeader;
