module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential'],
  rules: {
    quotes: [2, 'single', 'avoid-escape'],
    'no-console': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/default': 0,
    'import/no-duplicates': 0,
    'import/named': 0,
    'import/namespace': 0,
    'import/no-unresolved': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'import/newline-after-import': 0,
    'import/no-mutable-exports': 0,
    'import/no-absolute-path': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-amd': 0,
    'import/first': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'import/no-webpack-loader-syntax': 0,
    'import/no-named-default': 0,
    'global-require': 0,
    'class-methods-use-this': 0,
    'prefer-arrow-callback': 0,
    'prefer-template': 0
  }
};
