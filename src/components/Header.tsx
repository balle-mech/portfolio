import { useHamburgerMenu } from "../hooks/useHamburgerMenu";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useHamburgerMenu();

  return (
    <>
      <header className="py-6">
        <div className="container mx-auto flex items-center justify-between px-8 md:px-14 xl:px-24">
          <div className="text-lg font-bold">balle-mech</div>
          <nav className="hidden items-center space-x-12 md:flex">
            <a
              href="#output"
              className="hover:text-selected-text transition-all duration-300"
            >
              アウトプット
            </a>
            <a
              href="#skills"
              className="hover:text-selected-text transition-all duration-300"
            >
              スキル一覧
            </a>
            <a href="#contact">
              <button className="button w-full transform">お問い合わせ</button>
            </a>
          </nav>
          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              onClick={toggleMenu}
              className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-white transition-all duration-200 hover:bg-gray-800/20 focus:outline-none"
            >
              <div className="hamburger-icon flex flex-col justify-center space-y-1">
                <span
                  className="hamburger-line block h-0.5 w-6 origin-center bg-white transition-all duration-300"
                  style={{
                    transform: isMenuOpen
                      ? "rotate(45deg) translate(5px, 5px)"
                      : "rotate(0) translate(0, 0)",
                  }}
                ></span>
                <span
                  className="hamburger-line block h-0.5 w-6 origin-center bg-white transition-all duration-300"
                  style={{
                    opacity: isMenuOpen ? 0 : 1,
                  }}
                ></span>
                <span
                  className="hamburger-line block h-0.5 w-6 origin-center bg-white transition-all duration-300"
                  style={{
                    transform: isMenuOpen
                      ? "rotate(-45deg) translate(7px, -6px)"
                      : "rotate(0) translate(0, 0)",
                  }}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
};

export default Header;
