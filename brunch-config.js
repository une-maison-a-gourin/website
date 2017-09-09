// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'js/vendor.js': /^(?!app)/,
      'js/app.js': /^app/
    }
  },
  stylesheets: { joinTo: {
      'css/app.css': /^app/
    },
    order: {
      after: [ "css/app.css" ]
    }
  }
};

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
  copycat: {
    "fonts": [
      "./node_modules/font-awesome/fonts",
    ],
    "css": [
      "./node_modules/magnific-popup/dist/magnific-popup.css",
    ],
    verbose: true,
    onlyChanged: true
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
