import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'child-repo-component',
    loadComponent() {
      return loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        remoteName: 'angularChildModuleFederation',
        exposedModule: './child',
      })
        .then((m) => m.AppComponent)
        .catch((err) => console.log(err, 'component'));
    },
  },
  //   {
  //     path: 'child-module',
  //     loadChildren: () => {
  //       return loadRemoteModule({
  //         remoteEntry: 'http://localhost:4201/remoteEntry.js',
  //         remoteName: 'angularChild',
  //         exposedModule: './angularChild',
  //       })
  //         .then((m) => m.ChildMModule)
  //         .catch((err) => console.log(err));
  //     },
  //   },
];
