import SpotifyLogo from "../../assets/logo.png";

export default function Logo() {
  return (
    <div className="text-white ml-3 rounded-full h-8 w-8">
      <a href="">
        <img src={SpotifyLogo} alt="logo" className="w-full" />
      </a>
    </div>
  );
}