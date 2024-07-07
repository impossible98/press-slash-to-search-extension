import { handleEsc, handleKeydown } from './handle';

function handleSlash() {
  // https://search.bilibili.com/all
  if (location.href.includes('search.bilibili.com/')) {
    handleKeydown('input.search-input-el');
  }
  // https://www.bilibili.com/video/BV17Z421p7vd/
  else if (location.href.includes('www.bilibili.com')) {
    handleKeydown('input.nav-search-input');
  }
}

function main() {
  handleSlash();
  handleEsc();
}

main();
