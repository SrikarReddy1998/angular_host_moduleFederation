import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
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
  {
    path: 'child-module',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        remoteName: 'angularChildModuleFederation',
        exposedModule: './childModuleAnyName',
      })
        .then((m) => m.ChildMModule)
        .catch((err) => console.log(err));
    },
  },
  {
    path: 'angularNative',
    loadComponent: () =>
      loadRemoteModule('angularNative', './Component').then(
        (m) => m.AppComponent
      ),
  },
  //   {
  //     path: 'angularNativeChild',
  //     loadComponent: () =>
  //       loadRemoteModule('angularNativeChild', './Component').then(
  //         (m) => m.AppComponent
  //       ),
  //   },
  {
    path: 'angularNativeChild',
    loadComponent() {
      return loadRemoteModule({
        remoteEntry: 'http://localhost:4223/remoteEntry.json',
        remoteName: 'angularNativeChild',
        exposedModule: './Component',
      })
        .then((m) => m.AppComponent)
        .catch((err) => console.log(err, 'component'));
    },
  },
  {
    path: 'react',
    component: WebComponentWrapper,
    data: {
      type: 'module',
      remoteEntry: 'http://localhost:4173/assets/remoteEntry.js',
      remoteName: 'components-app',
      exposedModule: './ExposingButton',
      elementName: 'react-element',
    } as WebComponentWrapperOptions,
  },
];
