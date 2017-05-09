const app = require('express')();
const webpack = require('webpack');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const nunjucks = require('nunjucks');
const config = require('./config/');
const pkg = require('./package.json');

mongoose.connect(config.mongodb);

app
  .use(cookieParser())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({
    extended: true
  }))

if (config.env === 'dev') {
  require('./dev-server.js')(app)
}

require('./routes/')(app);

nunjucks.configure(path.join(__dirname, 'src/entries/'), {
  autoescape: true,
  express: app
});

app.set('view engine', 'html');

// 输出不同环境的 publicPath
let publicPath = '';
if (config.env !== 'dev') {
  publicPath = `${config.cdn}/${pkg.name}/${pkg.version}`;
}

app.get('*', function(req, res) {
  res.render('index.html', { publicPath });
})

app.listen(config.port, function(err) {
  if (!err) {
    console.log(`app start at ${config.port}`)
  }
})
