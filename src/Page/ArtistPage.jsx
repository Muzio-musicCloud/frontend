import Header from "../component/header";
import Home from "../component/Home";
import SideBar from "../component/sideBar";
import PlayBar from "../component/playBar";
import Artist from "../component/artist";

const ArtistPage = () => {
  return(
    <>
    <SideBar>
      <Header>
        <Artist/>
      </Header>
    </SideBar>
    </>
  )
}

export default ArtistPage;