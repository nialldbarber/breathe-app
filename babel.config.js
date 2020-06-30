module.exports = (api) => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            '@/components': './src/components',
            '@/context': './src/context',
            '@/common': './src/common',
            '@/constants': './src/constants',
            '@/hooks': './src/hooks',
            '@/layout': './src/layout',
            '@/navigation': './src/navigation',
            '@/screens': './src/screens',
            '@/styles': './src/styles',
            '@/types': './src/types',
            '@/utils': './src/utils',
            '@/assets': './assets',
          },
        },
      ],
    ],
  };
};
