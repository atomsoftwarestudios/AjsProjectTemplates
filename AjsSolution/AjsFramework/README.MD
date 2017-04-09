Ajs Framework Binary - Development version - with appropriate map and definition file
Ajs Framework Library Binary

Files are stored in bin folder of the project and are supposed to be:

- ajs.js, ajs.js.map, ajs.js.lib
   - collected by AjsWebApp project (gulpfile) during build and placed to the target /js folder

- ajs.d.ts
   - referenced from tsconfig.common.json from Application.Boot and Application projects
