Package.describe({
    name:"natestrauser:select2",
    summary: "Select2 is a jQuery based replacement for select boxes.",
  version: "3.5.1",
  git: "https://github.com/nate-strauser/meteor-select2.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
    api.use("jquery", "client");

    api.add_files([
        "lib/select2/select2.js"
    ], "client", {bare: true});

    api.add_files([
        "lib/select2/select2.css",
        "lib/select2/select2.png",
        "lib/select2/select2x2.png",
        "lib/select2/select2-spinner.gif"
    ], "client");
});
