'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        plugins: [
          {
            module: require('postcss-import'),
            options: {
              path: ['node_modules'],
            },
          },
          require('tailwindcss')('./tailwind.config.js'),
        ],
        cacheInclude: [/.*\.(css|scss|hbs)$/, /.tailwind\.config\.js$/],
      },
    },
  });
  app.import('vendor/sc.js', {
    using: [{ transformation: 'amd', as: 'soundcloud-api' }],
  });
  return app.toTree();
};
