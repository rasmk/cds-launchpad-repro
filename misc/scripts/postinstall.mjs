// fixing problems with SAP type definitions

import {resolve} from 'path';
import {rm, access, constants, rename} from 'node:fs/promises';
import { fileURLToPath } from 'url';

const pathExists = async (path) => {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
};

const metaUrl = import.meta.url;
const pathName = fileURLToPath( new URL('.', metaUrl));
const nodeModulesPath = resolve(pathName, '..', '..', 'node_modules');

// remove folder node_modules/@sapui5/types/node_modules
const sapUi5TypesPath = resolve(nodeModulesPath, '@sapui5', 'types', 'node_modules');
if (await pathExists(sapUi5TypesPath)) {
  await rm(sapUi5TypesPath, {recursive: true});
}

// remove folder node_modules/@cap-js/cds-types/scripts
const capJsTypesScriptsPath = resolve(nodeModulesPath, '@cap-js', 'cds-types', 'scripts');
if (await pathExists(capJsTypesScriptsPath)) {
  await rm(capJsTypesScriptsPath, {recursive: true});
}

// move node_modules/@cap-js/cds-types/dist/cds-types.d.ts to node_modules/@cap-js/cds-types/dist/index.d.ts
// if source file exists
const capJsTypesDistPath = resolve(nodeModulesPath, '@cap-js', 'cds-types', 'dist');
const sourceFile = resolve(capJsTypesDistPath, 'cds-types.d.ts');
const targetFile = resolve(capJsTypesDistPath, 'index.d.ts');

if (await pathExists(sourceFile)) {
  await rename(sourceFile, targetFile);
}
