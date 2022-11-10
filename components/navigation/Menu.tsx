import { useEffect, useState } from "react";
import MenuListButton from "../ui/buttons/menu-list-item/MenuListButton";
import ToggleMenu from "../ui/buttons/toggle-menu/ToggleMenu";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscPress = ({ key }: any) => {
      if (key === "Escape" && isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscPress);
    return () => {
      window.removeEventListener("keydown", handleEscPress);
    };
  }, [isMenuOpen]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`flex flex-col items-end ${
        isMenuOpen &&
        "fixed top-0 h-screen w-full max-w-[1620px] pr-[3.4rem] bg-white transition-[background-color] duration-150 ease-in"
      }`}
    >
      <ToggleMenu isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick} />
      <menu
        className={`${
          isMenuOpen
            ? "flex flex-col items-end justify-center h-[90vh] text-right -translate-x-[40px]"
            : "h-0 w-0 invisible"
        }`}
      >
        <MenuListButton text="About" isMenuOpen={isMenuOpen} />
        <MenuListButton text="Projects" isMenuOpen={isMenuOpen} />
        <MenuListButton text="Skills" isMenuOpen={isMenuOpen} />
        <MenuListButton text="Contact" isMenuOpen={isMenuOpen} />
        <MenuListButton text="Dark Mode" isMenuOpen={isMenuOpen} />
      </menu>
    </div>
  );
};

export default Menu;