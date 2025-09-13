import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/dom';

describe('Mobile Menu', () => {
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

    require('../js/main.js');
  });

  test('メニューボタンクリックでメニューが開く', () => {
    const button = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');

    fireEvent.click(button);

    expect(menu).toHaveClass('opacity-100', 'scale-100', 'translate-y-0');
  });

  test('メニューリンククリックでメニューが閉じる', () => {
    const link = document.querySelector('.mobile-menu-link');
    const menu = document.getElementById('mobile-menu');

    fireEvent.click(link);

    expect(menu).toHaveClass('opacity-0', 'scale-95', 'translate-y-2');
  });

  test('外部クリックでメニューが閉じる', () => {
    const menu = document.getElementById('mobile-menu');

    // メニューを開く
    fireEvent.click(document.getElementById('mobile-menu-button'));
    // 外部をクリック
    fireEvent.click(document.body);

    expect(menu).toHaveClass('opacity-0', 'scale-95', 'translate-y-2');
  });

  test('Escapeキーでメニューが閉じる', () => {
    const menu = document.getElementById('mobile-menu');

    // メニューを開く
    fireEvent.click(document.getElementById('mobile-menu-button'));
    // Escapeキーを押す
    fireEvent.keyDown(document, { key: 'Escape' });

    expect(menu).toHaveClass('opacity-0', 'scale-95', 'translate-y-2');
  });
});
