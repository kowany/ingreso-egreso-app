// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyA7rmbu7Bv2AK28eeJwjjLtUJ8qZB5Z1g8',
    authDomain: 'ingresos-egreso-app.firebaseapp.com',
    databaseURL: 'https://ingresos-egreso-app.firebaseio.com',
    projectId: 'ingresos-egreso-app',
    storageBucket: 'ingresos-egreso-app.appspot.com',
    messagingSenderId: '462396792261'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
