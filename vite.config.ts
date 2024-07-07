import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/main.ts',
      userscript: {
        // https://www.tampermonkey.net/documentation.php?locale=en
        icon: 'https://vitejs.dev/logo.svg',
        namespace: 'impossible98/press-slash-to-search',
        match: [
          'https://search.bilibili.com/*',
          'https://www.bilibili.com/*',
        ],
        name: 'Press Slash to Search',
        description: 'After pressing slash, you can enter slash to search.',
        author: 'impossible98',
        homepageURL:
        'https://github.com/impossible98/press-slash-to-search-extension',
      license: 'MIT',
      // https://greasyfork.org/en/scripts/499942-press-slash-to-search
      },
    }),
  ],
});
