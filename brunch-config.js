// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': /^app/
    }
  },
  stylesheets: {joinTo: 'app.css'}
};

exports.plugins = {
  babel: {presets: ['latest']}
};

exports.modules = {
  autoRequire: {
    'app.js': ['jQuery', 'popper', 'bootstrap', 'jquery.easing', "scrollreveal", "magnific-popup"]
  },
};

exports.npm = {
  globals: {
    jQuery: 'jquery',
    $: 'jquery',
    bootstrap: 'bootstrap',
  },
  styles: {
    bootstrap: ['dist/css/bootstrap.css'],
    "font-awesome": ['css/font-awesome.css'],
    "magnific-popup": ['dist/magnific-popup.css'],
  },
};
