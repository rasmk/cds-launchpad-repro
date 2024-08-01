# Repro for CDS launchpad plugin problem

Minimal repro for <https://github.com/geert-janklaps/cds-launchpad-plugin/pull/38>

## Steps to reproduce

* npm install
* npm start
* open launchpad in a browser  (<http://localhost:4004/$launchpad#Shell-home>)

## Experienced problem

When launchpad is opened in a browser, the server crashes with:

```console
[cds] - ❗️Uncaught Error: ENOENT: no such file or directory, open '/some_path/minimal-repro/main/app/tslaunchpadplugin/webapp/Component.js'
    at async open (node:internal/fs/promises:639:25)
    at async Object.readFile (node:internal/fs/promises:1249:14)
    at async Promise.all (index 1)
    at async _componentPreload (/some_path/minimal-repro/main/node_modules/cds-launchpad-plugin/src/index.ts:55:39)
    at async /some_path/minimal-repro/main/node_modules/cds-launchpad-plugin/src/index.ts:70:93 {
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: '/some_path/minimal-repro/main/app/tslaunchpadplugin/webapp/Component.js'
```

## Expected result

Both JS and TS launchpad plugins should initialize correctly.

The console in browser should show:

```text
JS plugin component init
TS plugin component init
```

## Proposed solution

Change line

```javascript
url: name + "/webapp",
```

to

```javascript
url: component, // name + "/webapp",
```

in [cds-launchpad-plugin/src/index.ts](https://github.com/geert-janklaps/cds-launchpad-plugin/blob/main/src/index.ts).
