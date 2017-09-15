const fs = require('fs');

module.exports = function (Handlebars) {
  Handlebars.registerHelper('currentYear', function () {
    return (new Date()).getFullYear();
  });

  Handlebars.registerHelper('log', function (a) {
    console.log(a);
  });

  Handlebars.registerHelper('getPartial', function (name, context) {
    var template = fs.readFileSync('./app/assets/pages/partials/' + name + ".html", 'utf8');
    var options = {
      noEscape: true,
    };
    var compiled = Handlebars.compile(template, options);
    return compiled(context.root);
  });
};
