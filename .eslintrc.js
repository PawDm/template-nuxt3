module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: ['.nuxt/', '.output/', 'dist/', 'public/', '**/*.min.js'],
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:nuxt/recommended',
    // 'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    "ecmaVersion": "latest",
    parser: "@typescript-eslint/parser",
    "sourceType": "module"
  },
  plugins: ["@typescript-eslint", "vue", "nuxt"],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/component-tags-order': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    "vue/require-default-prop": "off"
  },
}