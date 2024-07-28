import { handleEsc, handleKeydown } from './handle';

function handleSlash() {
  // https://search.bilibili.com/all
  if (location.href.includes('search.bilibili.com/')) {
    handleKeydown('input.search-input-el');
  } // https://www.bilibili.com/video/BV17Z421p7vd/
  else if (location.href.includes('www.bilibili.com')) {
    handleKeydown('input.nav-search-input');
  } // https://psnine.com/psngame
  else if (location.href.includes('https://psnine.com/psngame')) {
    handleKeydown('input.btn-large');
  } // https://www.douyin.com/search/test
  else if (location.href.includes('https://www.douyin.com/search/')) {
    handleKeydown('input.igFQqPKs');
  } // https://www.douyin.com/
  else if (location.href.includes('https://www.douyin.com')) {
    handleKeydown('input.st2xnJtZ.YIde9aUh');
  }
}

function main() {
  handleSlash();
  handleEsc();
}

main();
