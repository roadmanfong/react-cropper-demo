require('webpack');

module.exports = {
	entry: "./main.js",
	output: {
		filename: "demo.js"
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	devtool: 'source-map',
	module: {
		loaders: [
		  {
			test: /\.jsx?$/,
			loaders: ['babel-loader?presets[]=react,presets[]=es2015'],
			exclude: /node_modules/
		  },
		  { 
			test: /\.css$/, 
			loader: "style-loader!css-loader" 
		  }
		]
	}
}