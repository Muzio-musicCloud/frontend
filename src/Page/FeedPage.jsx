import Header from "../component/header";
import Feed from "../component/feed";
import SideBar from "../component/sideBar";
import PlayBar from "../component/playBar";

const FeedPage = ({children}) => {
  return(
    <SideBar>
      <Header>
        <Feed/>
      </Header>
      <PlayBar/>
    </SideBar>
  )
}

export default FeedPage;