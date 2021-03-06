Package.describe({
  name: "lentan:factory",
  summary: "Factories for Meteor (with beforeHooks)",
  version: "0.3.15",
  git: "https://github.com/lentan1029/meteor-factory.git"
});

Package.on_use(function(api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use(["minimongo", "underscore", "ejson", "random"]);
  api.add_files("lib/factory.js", ["client", "server"]);
  api.export("Factory", ["client", "server"]);
});

Package.on_test(function(api) {
  api.use(["tinytest", "lentan:factory"]);
  api.add_files("lib/factory_tests.js", "server");
});
