/**
 * System configuration and launch for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {

// Use global packagePath if defined
var pkgPath =  global.packagePath || 'node_modules/'; // path to packages
var ng = pkgPath + '@igorminar/';              // path to angular2 packages

System.config({
  map: {
    "@igorminar/common":                   ng + "common/common.umd.js",
    "@igorminar/compiler":                 ng + "compiler/compiler.umd.js",
    "@igorminar/core":                     ng + "core/core.umd.js",
    "@igorminar/facade":                   ng + "facade/facade.js",
    "@igorminar/http":                     ng + "http/http.umd.js",
    "@igorminar/meta-package":             ng + "meta-package/meta-package.js",
    "@igorminar/platform-browser":         ng + "platform-browser/platform-browser.umd.js",
    "@igorminar/platform-browser-dynamic": ng + "platform-browser-dynamic/platform-browser-dynamic.umd.js",
    "@igorminar/platform-server":          ng + "platform-server/platform-server.umd.js",
    "@igorminar/router":                   ng + "router/router.umd.js",
    "@igorminar/tesing":                   ng + "tesing/testing.umd.js",
    "@igorminar/upgrade":                  ng + "upgrade/upgrade.umd.js",

    // Todo: make this package conform to the `@` package standard
    //       then remove its script from all index.html
    "angular2-in-memory-web-api":          pkgPath + "angular2-in-memory-web-api",
  },
  packages: {
    app: {
      format: 'register',
      defaultExtension: 'js'
    },

    // Todo: See above
    'angular2-in-memory-web-api': {
      format: 'register',
      defaultExtension: 'js'
    }
  }
});
System.import('app/main')
      .then(null, console.error.bind(console));


})(this);
