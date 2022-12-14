"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import MenuListButton from "../ui/buttons/menu-list-item/MenuListButton";
import ToggleMenu from "../ui/buttons/toggle-menu/ToggleMenu";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkBtnText, setDarkBtnText] = useState("");
  const { theme, setTheme }: any = useTheme();

  useEffect(() => {
    setDarkBtnText(theme);
  }, [theme]);

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

  const handleDarkModeClick = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
    setIsMenuOpen(false);
    if (darkBtnText === "light") {
      setDarkBtnText("dark");
    } else {
      setDarkBtnText("light");
    }
  };

  return (
    <div
      className={`z-10 flex flex-col items-end ${
        isMenuOpen &&
        "fixed top-0 h-screen w-full max-w-[1620px] pr-[1.7rem] bg-white dark:bg-[#272b32] transition-[background-color] duration-150 ease-in"
      }`}
    >
      <ToggleMenu isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick} />
      <menu
        className={`${
          isMenuOpen
            ? "flex flex-col items-end justify-center h-[90vh] text-right -translate-x-[40px]"
            : "w-0 h-0 overflow-hidden"
        }`}
      >
        <MenuListButton text="About" isMenuOpen={isMenuOpen} />
        <MenuListButton text="Projects" isMenuOpen={isMenuOpen} />
        <MenuListButton text="Skills" isMenuOpen={isMenuOpen} />
        <MenuListButton text="Contact" isMenuOpen={isMenuOpen} />
        <MenuListButton
          text="Dark Mode"
          darkBtnText={darkBtnText}
          isMenuOpen={isMenuOpen}
          darkModeBtn={true}
          handleDarkModeClick={handleDarkModeClick}
        />
      </menu>
    </div>
  );
};

export default Menu;
