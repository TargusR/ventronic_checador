# Checador

> Applicación para revisar información de productos, precio y existencias en base a código de barras en tienda. Construída con Backbone + Electron mediante Bozon.

## Serverside Script Example

In _resources/serverscript_test_ you'll find an example _serverdemo.php_ that can be mounted to query product data.
It contains only four products registered in arrays, and recieves one GET parameter wich refers to barcode. It will alwas return a JSON object with a product (of the four available) refered to any barcode number given.


## Dev

```
$ npm install
```

### Run

```
$ bozon start
```

### Package

```
$ bozon package
```

Builds the app for OS X, Linux, and Windows, using [electron-builder](https://github.com/electron-userland/electron-builder).


## License

The MIT License (MIT) © Josue Martin 2017
