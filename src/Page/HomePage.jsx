import Header from "../component/header";
import Home from "../component/Home";
import SideBar from "../component/sideBar";
import PlayBar from "../component/playBar";

const HomePage = ({children}) => {
  return(
    <SideBar>
      <Header>
        <Home/>
      </Header>
      <PlayBar/>
    </SideBar>
    
  )
}

export default HomePage;