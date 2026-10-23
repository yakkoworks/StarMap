import { defineMarkdocConfig } from '@astrojs/markdoc/config';
import starlightMarkdoc from '@astrojs/starlight-markdoc';

// VS CodeのLanguage ServerにStarlightのコンポーネントを無理やり認識させるためのダミー定義
const starlightVsCodeTags = {
  aside: {
    attributes: {
      type: { type: String, default: 'note', matches: ['note', 'tip', 'caution', 'danger'] },
      title: { type: String }
    }
  },
  tabs: {},
  tabitem: {
    attributes: {
      label: { type: String, required: true },
      icon: { type: String }
    }
  },
  card: {
    attributes: {
      title: { type: String, required: true },
      icon: { type: String }
    }
  },
  cardgrid: {
    attributes: {
      stagger: { type: Boolean }
    }
  },
  steps: {},
  filetree: {},
  linkcard: {
    attributes: {
      title: { type: String, required: true },
      href: { type: String, required: true },
      description: { type: String }
    }
  }
};

export default defineMarkdocConfig({
  extends: [starlightMarkdoc()],
  // Astroのビルド時はextendsが優先されますが、VS Codeの拡張機能はここを直接読みに行きます
  tags: starlightVsCodeTags,
});
