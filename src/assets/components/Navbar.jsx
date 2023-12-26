import BtnPrimary from "./BtnPrimary";
import Logo from "../image/Logo.png";

export default function Navbar() {
  return (
    <nav className="flex  justify-around h-[80px] justify-center items-center">
      <ul className="inline-flex justify-between w-[529px] text-Primary font-bold">
        <img src={Logo} alt="logo" />
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Category</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contac</a>
        </li>
      </ul>
      <form action="" className="w-[497px] h-[44px] flex justify-between ">
        <input
          type="text"
          placeholder="Search something here!"
          className="w-[280px] h-[44px] rounded-full pl-5 text-[14px]"
        />
        <BtnPrimary txt="Join the conmmunity" />
      </form>
    </nav>
  );
}
