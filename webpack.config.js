module.exports = {
    entry: './app/index.ts',
   // entry:'./app/stack.ts',
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
      filename: 'js/index.js'
    },
    devServer: {
      inline: false
    }
  };