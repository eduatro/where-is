// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  googleMaps: {
    apiKey: 'your-api-key'
  },
  firebase: {
    apiKey: 'api-key',
    authDomain: 'where-is-0000000000000.firebaseapp.com',
    databaseURL: 'https://where-is-0000000000000.firebaseio.com',
    projectId: 'where-is-0000000000000',
    storageBucket: 'where-is-0000000000000.appspot.com',
    messagingSenderId: '000000000000'
  }
};
