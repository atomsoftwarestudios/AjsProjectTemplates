Place external (and 3rd party) .js libraries to this folder.

To ensure dependencies between used libraries will be fullfilled (they are loaded and executed in correct order) use the numeric prefix for the file name i.e.:

- 01-ui-core.js
- 02-ui-controls.js

Libraries will be compiled together with the libinit to a single JavaScript file loadable from index.html or by the application code.

If libraries need to be explixitly initialized by calling some initialization function, place this function to the libinit.ts file, init function.