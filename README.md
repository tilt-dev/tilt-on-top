# tilt-on-top

A little demo project on how to connect to Tilt from the OS menubar

## Run

```
node_modules/.bin/electron index.js
```

or for interactive development:

```
ls * | entr -r node_modules/.bin/electron index.js
```

## Tilt JS client

We cross-compiled this once and it was kind of a kludge. Cross-compile it again with:

```
node_modules/.bin/tsc --build tsconfig.json
```
