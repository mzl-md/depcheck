export default [
  {
    name: 'find unused dependencies',
    module: 'bad',
    options: {
      withoutDev: true,
    },
    expected: {
      dependencies: ['optimist'],
      devDependencies: [],
      missing: {},
    },
  },
  {
    name: 'find unused dependencies in ES6 files',
    module: 'bad_es6',
    options: {
    },
    expected: {
      dependencies: ['dont-find-me'],
      devDependencies: [],
      missing: {},
    },
  },
  {
    name: 'find all dependencies',
    module: 'good',
    options: {
      withoutDev: true,
    },
    expected: {
      dependencies: [],
      devDependencies: [],
      missing: {},
    },
  },
  {
    // See `good_es6/index.js` file for more information on the unsupported ES6 import syntax, which we assert here as the expected missing import.
    name: 'find all dependencies in ES6 files',
    module: 'good_es6',
    options: {
      withoutDev: true,
    },
    expected: {
      dependencies: ['unsupported-syntax'],
      devDependencies: [],
      missing: {},
    },
  },
  {
    name: 'recognize experimental ES7 syntax enabled in Babel by default',
    module: 'good_es7',
    options: {
      withoutDev: true,
    },
    expected: {
      dependencies: [],
      devDependencies: [],
      missing: {},
    },
  },
  {
    name: 'find dependencies used in code but not declared in package.json',
    module: 'missing',
    options: {
    },
    expected: {
      dependencies: [],
      devDependencies: [],
      missing: {
        'missing-dep': ['index.js'],
      },
    },
  },
  {
    name: 'ignore the missing dependencies in nested module',
    module: 'missing_nested',
    options: {
    },
    expected: {
      dependencies: [],
      devDependencies: [],
      missing: {
        'outer-missing-dep': ['index.js'],
      },
    },
  },
  {
    name: 'find grunt dependencies',
    module: 'grunt',
    options: {
      withoutDev: true,
    },
    expected: {
      dependencies: [],
      devDependencies: [],
      missing: {},
    },
  },
  {
    name: 'find grunt task dependencies',
    module: 'grunt-tasks',
    options: {
      withoutDev: true,
    },
    expected: {
      dependencies: [],
      devDependencies: [],
      missing: {},
    },
  },
  {
    name: 'find unused package in devDependencies',
    module: 'dev',
    options: {
      withoutDev: false,
    },
    expected: {
      dependencies: [],
      devDependencies: ['unused-dev-dep'],
      missing: {},
    },
  },
  {
    name: 'recognize peer dependencies',
    module: 'peer_dep',
    options: {
    },
    expected: {
      dependencies: ['unused-dep'],
      devDependencies: [],
      missing: {},
    },
  },
  {
    name: 'recognize nested peer dependencies',
    module: 'peer_dep_nested',
    options: {
    },
    expected: {
      dependencies: ['unused-nested-dep'],
      devDependencies: [],
      missing: {},
    },
  },
  {
    name: 'recognize optional dependencies',
    module: 'optional_dep',
    options: {
    },
    expected: {
      dependencies: ['unused-dep'],
      devDependencies: [],
      missing: {},
    },
  },
  {
    name: 'recognize nested requires',
    module: 'nested',
    options: {
    },
    expected: {
      dependencies: [],
      devDependencies: [],
      missing: {},
    },
  },
  {
    name: 'handle empty JavaScript file',
    module: 'empty_file',
    options: {
    },
    expected: {
      dependencies: ['empty-package'],
      devDependencies: [],
      missing: {},
    },
  },
  {
    name: 'handle script file with node shebang',
    module: 'shebang',
    options: {
    },
    expected: {
      dependencies: ['shebang'],
      devDependencies: [],
      missing: {},
    },
  },
  {
    name: 'handle a package without any dependencies',
    module: 'empty_dep',
    options: {
    },
    expected: {
      dependencies: [],
      devDependencies: [],
      missing: {},
    },
  },
  {
    name: 'exclude bin dependencies if ignoreBinPackage equal true',
    module: 'bin_js',
    options: {
      ignoreBinPackage: true,
    },
    expected: {
      dependencies: [],
      devDependencies: [],
      missing: {},
    },
  },
  {
    name: 'report unused bin dependencies if ignoreBinPackage equal false',
    module: 'bin_js',
    options: {
      ignoreBinPackage: false,
    },
    expected: {
      dependencies: ['anybin'],
      devDependencies: [],
      missing: {},
    },
  },
  {
    name: 'handle dependencies without bin if ignoreBinPackage equal true',
    module: 'good',
    options: {
      ignoreBinPackage: true,
    },
    expected: {
      dependencies: [],
      devDependencies: [],
      missing: {},
    },
  },
  {
    name: 'not ignore bin dependencies when ignoreBinPackage is false',
    module: 'bin_js',
    options: {
      ignoreBinPackage: false,
    },
    expected: {
      dependencies: ['anybin'],
      devDependencies: [],
      missing: {},
    },
  },
  {
    name: 'handle require call without parameters',
    module: 'require_nothing',
    options: {
    },
    expected: {
      dependencies: ['require-nothing'],
      devDependencies: [],
      missing: {},
    },
  },
  {
    name: 'handle require call with dynamic expression',
    module: 'require_dynamic',
    options: {
    },
    expected: {
      dependencies: [],
      devDependencies: [],
      missing: {},
    },
  },
  {
    name: 'ignore ignoreDirs',
    module: 'bad_deep',
    options: {
      ignoreDirs: ['sandbox'],
    },
    expected: {
      dependencies: ['module_bad_deep'],
      devDependencies: [],
      missing: {},
    },
  },
  {
    name: 'ignore ignoreMatches',
    module: 'bad',
    options: {
      ignoreMatches: ['o*'],
    },
    expected: {
      dependencies: [],
      devDependencies: [],
      missing: {},
    },
  },
  {
    name: 'support jsx syntax',
    module: 'jsx',
    options: {
    },
    expected: {
      dependencies: [],
      devDependencies: [],
      missing: {},
    },
  },
  {
    name: 'parser jsx syntax in JavaScript file by default',
    module: 'jsx_js',
    options: {
    },
    expected: {
      dependencies: [],
      devDependencies: [],
      missing: {},
    },
  },
  {
    name: 'support CoffeeScript syntax',
    module: 'coffee_script',
    options: {
    },
    expected: {
      dependencies: ['coffee'],
      devDependencies: [],
      missing: {},
    },
  },
  {
    name: 'support scoped modules',
    module: 'scoped_module',
    options: {
    },
    expected: {
      dependencies: ['@unused/package'],
      devDependencies: [],
      missing: {},
    },
  },
  {
    name: 'ignore require number',
    module: 'ignore_number',
    options: {
    },
    expected: {
      dependencies: ['number'],
      devDependencies: [],
      missing: {},
    },
  },
];