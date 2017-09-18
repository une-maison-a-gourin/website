exports.files = {
  javascripts: {
    joinTo: {
      'js/vendor.js': /^(?!app)/,
      'js/app.js': /^app/
    }
  },
  stylesheets: {
    joinTo: {
      'css/vendor.css': /^app\/vendor\.scss/,
      'css/app.css': /^app\/index\.scss/,
    },
    order: {
    }
  },
};

exports.paths = {
  public: 'public',
  watched: ['app', 'app/assets', 'app/partials', 'app/helpers', 'app/templates'],
}

exports.plugins = {
  babel: {
    presets: ['latest'],
    ignore: [
      /^(node_modules|vendor)/
    ]
  },
  sass: {
    options: {
      includePaths: ['./node_modules/bootstrap/scss',
                     './node_modules/font-awesome/scss',
                     './node_modules/easy-autocomplete/src/sass'],
      precision: 8
    }
  },
  jekyllish: {
    partialsDir: './app/partials',
    partialsExt: '.html',
    templatesDir: './app/templates',
    helpersDir: './app/helpers',
    compilerOptions: { noEscape: true }
  },
  copycat: {
    "fonts": [
      "./node_modules/font-awesome/fonts",
    ],
    "css": [
      "./node_modules/magnific-popup/dist/magnific-popup.css",
    ],
    verbose: true,
    onlyChanged: true
  },
  static: {
    processors: [ 'jekyllish' ],
  }
};

exports.npm = {
  enabled: true,
  globals: {
    $: 'jquery',
    jQuery: 'jquery',
    Tether: 'tether',
    ScrollReveal: 'scrollreveal',
    MagnificPopup: 'magnific-popup',
    bootstrap: 'bootstrap'
  }
}
