// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBRSd0RXXOsZS_8GNfI2hR9c8tCsnvZEo8",
    authDomain: "teamasterapp.firebaseapp.com",
    databaseURL: "https://teamasterapp.firebaseio.com",
    projectId: "teamasterapp",
    storageBucket: "teamasterapp.appspot.com",
    messagingSenderId: "362935659328"

  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
