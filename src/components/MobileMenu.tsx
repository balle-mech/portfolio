interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div
      id="mobile-menu"
      className={`fixed top-24 right-8 z-40 w-80 origin-top-right rounded-2xl border border-gray-700/50 bg-gray-900/95 shadow-2xl backdrop-blur-lg transition-all duration-300 ease-out md:hidden ${
        isOpen
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-95 translate-y-2 pointer-events-none"
      }`}
    >
      <div className="py-3">
        <a
          href="#output"
          onClick={handleLinkClick}
          className="mobile-menu-link hover:text-selected-text group mx-3 flex items-center rounded-xl px-6 py-4 text-white transition-all duration-200 hover:bg-gray-800/50"
        >
          <i className="fa-solid fa-briefcase group-hover:text-selected-text w-5 text-gray-400 transition-colors duration-200"></i>
          <span className="ml-4 text-lg font-medium">アウトプット</span>
        </a>
        <a
          href="#skills"
          onClick={handleLinkClick}
          className="mobile-menu-link hover:text-selected-text group mx-3 flex items-center rounded-xl px-6 py-4 text-white transition-all duration-200 hover:bg-gray-800/50"
        >
          <i className="fa-solid fa-code group-hover:text-selected-text w-5 text-gray-400 transition-colors duration-200"></i>
          <span className="ml-4 text-lg font-medium">スキル一覧</span>
        </a>
        <div className="mx-3 mt-3 border-t border-gray-700/30 pt-3">
          <a href="#contact" onClick={handleLinkClick} className="mobile-menu-link block px-3 py-2">
            <button className="button w-full transform">
              <i className="fa-solid fa-envelope mr-2"></i>
              お問い合わせ
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
