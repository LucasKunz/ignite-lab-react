import classNames from "classnames";
import { Logo } from "./Logo";

interface HeaderProps {
  handleMenu: ( arg0: boolean ) => void;
  isMenuOpen: boolean;
}

export function Header({ handleMenu, isMenuOpen}: HeaderProps) {

  function handleOpenMenu() {
    handleMenu(!isMenuOpen)
  }


  return (
    <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600 lg:flex lg:justify-around">
      <Logo />
      <div className="hidden lg:flex items-center">
        <p className="mr-3">Aulas</p>
        <button type="button" onClick={handleOpenMenu}>
          <span className={classNames("w-6 h-[2px] bg-blue-500 block rounded-md", {
            "rotate-45 translate-y-2": isMenuOpen
          })}></span>
          <span className={classNames("w-6 h-[2px] bg-blue-500 block rounded-md	my-[7px]", {
            "opacity-0": isMenuOpen
          })}></span>
          <span className={classNames("w-6 h-[2px] bg-blue-500 block rounded-md", {
            "rotate-[-45deg] translate-y-[-10px]": isMenuOpen
          })}></span>
        </button>
      </div>
    </header>
  )
}
