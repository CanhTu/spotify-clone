import Logo from "../ui/Logo";
import SearchBar from "../ui/SearchBar";
import UserProfile from "../shared/UserProfile";

export default function Header() {
  return (
    <header className="col-span-1 bg-firstBlack px-3 py-2 flex justify-between items-center text-fifthText w-full top-0 z-10">
      <Logo />
      <SearchBar />
      <UserProfile />
    </header>
  );
}