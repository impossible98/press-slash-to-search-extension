import { handleEsc, handleKeydown } from './handle';

function handleSlash() {
  // https://search.bilibili.com/all
  if (location.href.includes('https://search.bilibili.com/')) {
    handleKeydown('input.search-input-el');
  }
}

function main() {
  handleSlash();
  handleEsc();
}

main();
