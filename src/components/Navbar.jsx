import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="flex select-none  flex-row items-center justify-between xxs:px-4 xxs:py-2 sm:px-12 sm:py-4 lg:px-28">
      {/* LOGO */}
      <img src={logo} alt="Logo" />

      {/* NAVIGATION */}
      <ul className="flex-row text-xl font-medium uppercase text-[#2E2E2E] xxs:hidden sm:flex sm:gap-8 lg:gap-14">
        <li className="cursor-pointer decoration-red-600 decoration-[2px] underline-offset-8 hover:underline">
          Menu
        </li>
        <li className="cursor-pointer decoration-red-600 decoration-[2px] underline-offset-8 hover:underline">
          Location
        </li>
        <li className="cursor-pointer decoration-red-600 decoration-[2px] underline-offset-8 hover:underline">
          About
        </li>
        <li className="cursor-pointer decoration-red-600 decoration-[2px] underline-offset-8 hover:underline">
          Contact
        </li>
      </ul>

      {/* BUTTON */}
      <button className="xxs:text-md bg-[#D01C28] px-4 py-1 text-white hover:bg-[#f52e3c] sm:text-lg">
        Login
      </button>
    </div>
  );
}

export default Navbar;
