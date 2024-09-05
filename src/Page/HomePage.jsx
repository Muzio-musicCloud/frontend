import Header from "../component/header";
import Home from "../component/Home";
import SideBar from "../component/sideBar";

const HomePage = ({children}) => {
  return(
    <SideBar>
      <Header>
        <Home/>
      </Header>
    </SideBar>
    
  )
}

export default HomePage;