# Error Submission HAPI framework Dicoding - Proyek Bookshelf API
https://www.dicoding.com/academies/342/discussions/371977?#comment-1869472

### Log Error Reviewer
node:internal/modules/cjs/loader:1143
  throw err;
  ^
 
Error: Cannot find module '/home/assistest/student-app/src/server.js'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1140:15)
    at Module._load (node:internal/modules/cjs/loader:981:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)
    at node:internal/main/run_main_module:28:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}
 
 
Node.js v18.20.2

### Log Error Project without node_modules included 
PS C:\javascript-projects\mrafiw2> npm run start
> mrafiw2@1.0.0 start
> node src/server.js
node:internal/modules/cjs/loader:1143
  throw err;
  ^
Error: Cannot find module '@hapi/hapi'
Require stack:
- C:\javascript-projects\mrafiw2\src\server.js
    at Module._resolveFilename (node:internal/modules/cjs/loader:1140:15)
    at Module._load (node:internal/modules/cjs/loader:981:27)
    at Module.require (node:internal/modules/cjs/loader:1231:19)
    at require (node:internal/modules/helpers:177:18)
    at Object.<anonymous> (C:\javascript-projects\mrafiw2\src\server.js:1:14)
    at Module._compile (node:internal/modules/cjs/loader:1364:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1422:10)
    at Module.load (node:internal/modules/cjs/loader:1203:32)
    at Module._load (node:internal/modules/cjs/loader:1019:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [ 'C:\\javascript-projects\\mrafiw2\\src\\server.js' ]
}
Node.js v18.20.2
