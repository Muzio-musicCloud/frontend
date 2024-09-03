const Header = ({children}) => {
  return(
    <>
      <div>
        <div>Muzio</div>
        <input type="search"></input>
        <div></div>
      </div>
      {children}
    </>
  )
}

export default Header;