# CodingDojo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.3.0 .

To initialise or create workspace, install first

```$> npm i npx```

Then 

```$> npx -p  @angular/cli@14.2.12 ng new coding-dojo --no-create-application```

## Node.js and nvm

To use multiple version of node.js

Install nvm


For cURL, run the following on your terminal:

```$> curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.35.2/install.sh | bash```

Or with Wget:

```wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.35.2/install.sh | bash```


Then see version compatibilty for Angular Version : https://angular.io/guide/versions

Install version of node you need

``` nvm install 14.20.1```

Fortunately, when installing a new Node.js version, you can reinstall the npm global packages from a specific version. For example:

```nvm install v14.20.0 --reinstall-packages-from=18.15.0```

By running the above, nvm will install Node.js version 12.14.1, the corresponding npm version, and reinstall the global npm packages you had installed for the 18.15.0 version.

If you’re not sure what the latest version is, you can use the node alias:

```nvm install node```
This will currently pull in version latest.

Or you can install the most recent LTS release, using:

```nvm install --lts```

You can also uninstall any instance you no longer think is useful, by running:

```nvm uninstall v14.20```

Switch to Node.js version 14.15.0:

```nvm use 14.20```

Switch to the latest Node.js version:

```nvm use node```

Switch to the latest LTS version:

```nvm use --lts```

## Applications disponible

* **dojo-dsfr** : application blanche pour conception et mise en place de design systeme de l'état : https://www.systeme-de-design.gouv.fr/

    * Bibliothèque système design de l'état : https://www.npmjs.com/package/@gouvfr/dsfr

    ! Necessite Angular >= V14
    * Bibliothèque Angular DSFR : https://www.npmjs.com/package/@edugouvfr/ngx-dsfr
    * Aide Angular DSFR : https://foad.phm.education.gouv.fr/edugouvfr/ngx-dsfr/1-1-1/

## Code scaffolding

Run `ng generate component component-name --project=nameofapp` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Run `ng generate application <application-name> --prefix=<prefixforapplication>` to generate a new application inside folder project.
## Build

Run `ng build <nameofapp>` to build the project app. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test <nameofapp>` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
