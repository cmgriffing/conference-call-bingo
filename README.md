# Conference Call Bingo

A simple bingo board to make conference calls a little more exciting. By gamifying conference calls, you also encourage people to be more attentive.

## Internationalization (i18n)
The goal is to make this available in as many languages as possible. If your preferred language is not currently supported, you are welcome to create a Github Issue for it. You are also encouraged to make translations yourself and submit a Pull Request.

## Contributing to i18n
The more language support, the better. So, if you are able and willing to internationalize the app into a language that it does not currently support, please do so.

The basic process is to copy `locale/messages.en.xliff` and rename it for the language of choice. After that, you are ready to begin changing the `<target>...</target>` values.

[POEditor](https://poeditor.com) is a very useful tool if you do not want to directly edit the xliff file.

## Development
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.1.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
