import Logo from "./Logo";
import Profile from "./Profile";
import Search from "./Search";

function Header() {
  return (
    <header>
          <Logo />
          <Search />
          <Profile />
    </header>
  );
}

export default Header;