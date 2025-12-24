import tailwindcssConfig from '@olinc/tailwind-config';

export default {
  ...tailwindcssConfig,
  content: [
    ...tailwindcssConfig.content,
    '.vitepress/**/*.{js,mts,ts,vue}',
    'src/demos/**/*.{js,mts,ts,vue}',
    'src/**/*.md',
  ],
};
