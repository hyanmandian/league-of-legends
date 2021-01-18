const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const rootWebpackConfig = require('../../../.storybook/webpack.config');

/**
 * Export a function. Accept the base config as the only param.
 *
 * @param {Parameters<typeof rootWebpackConfig>[0]} options
 */
module.exports = async ({ config, mode }) => {
  config = await rootWebpackConfig({ config, mode });

  const tsPaths = new TsConfigPathsPlugin({
    configFile: './tsconfig.base.json',
  });

  config.resolve.plugins
    ? config.resolve.plugins.push(tsPaths)
    : (config.resolve.plugins = [tsPaths]);

  const svgRuleIndex = config.module.rules.findIndex((rule) => {
    const { test } = rule;

    return test.toString().startsWith('/\\.(svg|ico');
  });
  config.module.rules[
    svgRuleIndex
  ].test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/;

  config.module.rules.push(
    {
      test: /\.(png|jpe?g|gif|webp)$/,
      loader: require.resolve('url-loader'),
      options: {
        limit: 10000,
        name: '[name].[hash:7].[ext]',
      },
    },
    {
      test: /\.svg$/,
      oneOf: [
        {
          issuer: {
            test: /\.[jt]sx?$/,
          },
          use: [
            '@svgr/webpack?-svgo,+titleProp,+ref![path]',
            {
              loader: require.resolve('url-loader'),
              options: {
                limit: 10000,
                name: '[name].[hash:7].[ext]',
                esModule: false,
              },
            },
          ],
        },
        {
          use: [
            {
              loader: require.resolve('url-loader'),
              options: {
                limit: 10000,
                name: '[name].[hash:7].[ext]',
              },
            },
          ],
        },
      ],
    }
  );

  return config;
};
