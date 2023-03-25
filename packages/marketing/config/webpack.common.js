module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/, // Whenever we import in a file that ends with an extension of either mjs or just js,we want it to be processed by bable.
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // The goal of a loader, is to tell Webpack to process some different files as we start to import them into our project. Babel is going to be in charge of processing all of our code, from the ES 2015, '16, '17, '18, '19, '20 and so on, and turn it into regular ES five code that can be easily executed inside of a typical browser.
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'], // So the preset of React right here, means that Babel is gonna process all the different jsx tags, so we add into our application.
            plugins: ['@babel/plugin-transform-runtime'], // is going to add in a little bit of additional code just to enable some different features for our project, inside the browser. Such as, async await syntax and some other related things.
          },
        },
      },
    ],
  },
};
