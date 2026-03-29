import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/dom";
import { renderHook, act } from "@testing-library/react";
import { useHamburgerMenu } from "../hooks/useHamburgerMenu";

describe("useHamburgerMenu Hook", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button id="mobile-menu-button">
        <div class="hamburger-icon">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </div>
      </button>
      <div id="mobile-menu" class="opacity-0 scale-95 translate-y-2">
        <a href="#" class="mobile-menu-link">Link</a>
      </div>
    `;
  });

  test("toggleMenu関数でメニューの開閉が切り替わる", () => {
    const { result } = renderHook(() => useHamburgerMenu());

    expect(result.current.isMenuOpen).toBe(false);

    act(() => {
      result.current.toggleMenu();
    });

    expect(result.current.isMenuOpen).toBe(true);

    const menu = document.getElementById("mobile-menu");
    expect(menu).toHaveClass("opacity-100", "scale-100", "translate-y-0");
  });

  test("closeMenu関数でメニューが閉じる", () => {
    const { result } = renderHook(() => useHamburgerMenu());

    // まず開く
    act(() => {
      result.current.toggleMenu();
    });

    expect(result.current.isMenuOpen).toBe(true);

    // 閉じる
    act(() => {
      result.current.closeMenu();
    });

    expect(result.current.isMenuOpen).toBe(false);

    const menu = document.getElementById("mobile-menu");
    expect(menu).toHaveClass("opacity-0", "scale-95", "translate-y-2");
  });

  test("外部クリックでメニューが閉じる", () => {
    const { result } = renderHook(() => useHamburgerMenu());

    // メニューを開く
    act(() => {
      result.current.toggleMenu();
    });

    expect(result.current.isMenuOpen).toBe(true);

    // 外部をクリック
    act(() => {
      fireEvent.click(document.body);
    });

    expect(result.current.isMenuOpen).toBe(false);
  });

  test("Escapeキーでメニューが閉じる", () => {
    const { result } = renderHook(() => useHamburgerMenu());

    // メニューを開く
    act(() => {
      result.current.toggleMenu();
    });

    expect(result.current.isMenuOpen).toBe(true);

    // Escapeキーを押す
    act(() => {
      fireEvent.keyDown(document, { key: "Escape" });
    });

    expect(result.current.isMenuOpen).toBe(false);
  });
});
