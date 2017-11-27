# RatingsTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.
It incorporates [ngx-bootstrap v1.9.3](https://github.com/valor-software/ngx-bootstrap/blob/development/docs/getting-started/bootstrap4.md) using Bootstrap 4
It tests the [Rating component](https://valor-software.com/ngx-bootstrap/#/rating)
The same source code works as expected at this [StackBiltz](https://stackblitz.com/edit/ngx-bootstrap-ratings-xyf9ab)
This project does not work under this npm envirnoment installed by [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.
It gives the following template error for the Rating component:
Uncaught Error: Template parse errors:
Can't bind to 'ngModel' since it isn't a known property of 'rating'. ("<div class="ratings">
  <rating [max]="max" [ERROR ->][(ngModel)]="rate" ></rating>
  <b>(<i>Rate:</i> {{rate}})</b>
</div>
"): ng:///AppModule/AppComponent.html@1:22
    at syntaxError (compiler.es5.js:1694)
    at TemplateParser.webpackJsonp.../../../compiler/@angular/compiler.es5.js.TemplateParser.parse (compiler.es5.js:12791)
    at JitCompiler.webpackJsonp.../../../compiler/@angular/compiler.es5.js.JitCompiler._compileTemplate (compiler.es5.js:26994)
    at compiler.es5.js:26913
    at Set.forEach (<anonymous>)
    at JitCompiler.webpackJsonp.../../../compiler/@angular/compiler.es5.js.JitCompiler._compileComponents (compiler.es5.js:26913)
    at compiler.es5.js:26800
    at Object.then (compiler.es5.js:1683)
    at JitCompiler.webpackJsonp.../../../compiler/@angular/compiler.es5.js.JitCompiler._compileModuleAndComponents (compiler.es5.js:26799)
    at JitCompiler.webpackJsonp.../../../compiler/@angular/compiler.es5.js.JitCompiler.compileModuleAsync (compiler.es5.js:26728)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
