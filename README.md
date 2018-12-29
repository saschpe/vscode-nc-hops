[![](https://vsmarketplacebadge.apphb.com/version-short/saschpe.nc-hops.svg)](https://marketplace.visualstudio.com/items?itemName=saschpe.nc-hops)
[![](https://vsmarketplacebadge.apphb.com/installs-short/saschpe.nc-hops.svg)](https://marketplace.visualstudio.com/items?itemName=saschpe.nc-hops)
[![](https://vsmarketplacebadge.apphb.com/rating-short/saschpe.nc-hops.svg)](https://marketplace.visualstudio.com/items?itemName=saschpe.nc-hops)

# NC-HOPS support for Visual Studio Code

Syntax support for the HOPS CAM language.

## Features

* Syntax highlighting

## Installation
You can install the plugin by searching for [HOPS Language extension](https://marketplace.visualstudio.com/items?itemName=saschpe.nc-hops) in the extensions market place, or by entering

```
ext install nc-hops language
```

in to the command palette.

## Contributing
We welcome any contributions to help make the extension better. There are several ways you can contribute.

1. By reporting [issues](https://github.com/saschpe/vscode-nc-hops/issues)
2. Making feature [requests](https://github.com/saschpe/vscode-nc-hops/issues)
3. Or by contributing code

> Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.

### Convert tmLanguage YAML to JSON
```
npm install js-yaml
npx js-yaml syntaxes/hops.tmLanguage.yaml > syntaxes/hops.tmLanguage.json
```

## Credits
* [Visual Studio Code](https://code.visualstudio.com/)
* [vscode-docs on GitHub](https://github.com/Microsoft/vscode-docs)
* [NC HOPS](https://www.dps-software.de/cam/nc-hops)
