module.exports = {
    parser: 'babel-eslint',
    plugins: [
        'react'
    ],
    parserOptions: {
        ecmaFeatures: {
            modules: true,
            decorators: true,
             experimentalObjectRestSpread: true,
            jsx: true
        }
    },
    env: {
        node: true,
        browser: true
    },
    rules: {
        'comma-dangle': 2,
        'no-cond-assign': 2,
        'no-console': [ 2, { allow: [ 'warn', 'error' ] } ],
        'no-constant-condition': 2,
        'no-control-regex': 2,
        'no-debugger': 2,
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty': [ 2, { allowEmptyCatch: true } ],
        'no-empty-character-class': 2,
        'no-ex-assign': 2,
        'no-extra-boolean-cast': 2,
        'no-extra-parens': 0,
        'no-extra-semi': 2,
        'no-func-assign': 2,
        'no-inner-declarations': 2,
        'no-invalid-regexp': 2,
        'no-irregular-whitespace': 2,
        'no-negated-in-lhs': 2,
        'no-obj-calls': 2,
        'no-prototype-builtins': 0,
        'no-regex-spaces': 2,
        'no-sparse-arrays': 2,
        'no-unexpected-multiline': 2,
        'no-unreachable': 2,
        'no-unsafe-finally': 2,
        'use-isnan': 2,

        // TODO:
        'valid-jsdoc': 0,
        'valid-typeof': 2,
        'accessor-pairs': 2,
        'array-callback-return': 2,
        'block-scoped-var': 0,
        complexity: 0,
        'consistent-return': [ 2, { treatUndefinedAsUnspecified: true } ],
        curly: 2,
        'default-case': 2,
        'dot-location': [ 2, 'property' ],
        'dot-notation': [ 2, { allowKeywords: true } ],
        eqeqeq: [ 2, 'always' ],
        'guard-for-in': 0,
        'no-alert': 2,
        'no-caller': 2,
        'no-case-declarations': 2,
        'no-div-regex': 2,
        'no-else-return': 2,
        'no-empty-function': 0,
        'no-empty-pattern': 2,
        'no-eq-null': 2,
        'no-eval': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-extra-label': 2,
        'no-fallthrough': 2,
        'no-floating-decimal': 2,
        'no-implicit-coercion': 0,
        'no-implicit-globals': 2,
        'no-implied-eval': 2,
        'no-invalid-this': 0,
        'no-iterator': 2,
        'no-labels': 2,
        'no-lone-blocks': 0,
        'no-loop-func': 2,
        'no-magic-numbers': 0,
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        'no-native-reassign': 2,
        'no-new': 2,
        'no-new-func': 2,
        'no-new-wrappers': 2,
        'no-octal': 2,
        'no-octal-escape': 2,
        'no-param-reassign': [ 2, { props: false } ],
        'no-proto': 2,
        'no-redeclare': [ 2, { builtinGlobals: true } ],
        'no-return-assign': [ 0, 'except-parens' ],
        'no-script-url': 2,
        'no-self-assign': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-throw-literal': 2,
        'no-unmodified-loop-condition': 2,
        'no-unused-expressions': 2,
        'no-unused-labels': 2,
        'no-useless-call': 2,
        'no-useless-concat': 2,
        'no-useless-escape': 2,
        'no-void': 2,
        'no-warning-comments': [ 1, { terms: [ 'todo', 'fixme', 'xxx', 'note' ] } ],
        'no-with': 2,
        radix: 0,
        'vars-on-top': 2,
        'wrap-iife': [ 2, 'inside' ],
        yoda: 2,
        strict: [ 2, 'never' ],
        'init-declarations': 0,
        'no-catch-shadow': 2,
        'no-delete-var': 2,
        'no-label-var': 2,
        'no-restricted-globals': 2,
        'no-shadow': 0,
        'no-shadow-restricted-names': 2,
        'no-undef': 2,
        'no-undef-init': 2,
        'no-undefined': 0,
        'no-unused-vars': 2,
        'no-use-before-define': [ 2, { functions: false, classes: false } ],
        'callback-return': 0,
        'global-require': 2,
        'handle-callback-err': 0,
        'no-mixed-requires': [ 2, { grouping: false, allowCall: true } ],
        'no-new-require': 2,
        'no-path-concat': 2,
        'no-process-env': 0,
        'no-process-exit': 0,
        'no-restricted-modules': 0,
        'no-sync': 0,
        'array-bracket-spacing': [ 2, 'always' ],
        'block-spacing': [ 2, 'never' ],
        'brace-style': [ 2, '1tbs', { allowSingleLine: false } ],
        camelcase: [ 2, { properties: 'always' } ],
        'comma-spacing': [ 2, { before: false, after: true } ],
        'comma-style': [ 2, 'last', { exceptions: { ArrayExpression: true, ObjectExpression: true } } ],
        'computed-property-spacing': [ 2, 'always' ],
        'consistent-this': [ 2, 'self' ],
        'eol-last': 0,
        'func-names': 0,
        'func-style': 0,
        'id-blacklist': 0,
        'id-length': 0,
        'id-match': 0,
        indent: [
            2,
            4
        ],
        'jsx-quotes': [ 2, 'prefer-double' ],
        'key-spacing': [ 2, { afterColon: true, mode: 'strict' } ],
        'keyword-spacing': 2,
        'linebreak-style': [ 2, 'unix' ],
        'lines-around-comment': [ 2, { beforeLineComment: true, beforeBlockComment: true, allowObjectStart: false, allowObjectEnd: false, allowArrayStart: false, allowArrayEnd: false } ],
        'max-depth': [ 2, { max: 4 } ],
        'max-len': [ 2, 80, 4, { ignoreUrls: true, ignoreComments: false, ignoreTrailingComments: false, ignorePattern: '^(import.*|const\s.*\s=\srequire.*|export(\sdefault)?.*)' } ],
        'max-lines': [ 2, { max: 250, skipBlankLines: true, skipComments: true } ],
        'max-nested-callbacks': [ 2, { max: 3 } ],
        'max-params': [ 2, 8 ],
        'max-statements': 0,
        'max-statements-per-line': 2,
        'new-cap': 0,
        'new-cap-alt': [ 2, { newIsCap: true, newIsCapExceptionsPattern: '[^a-z]', properties: false } ],
        'new-parens': 2,
        'newline-after-var': [ 2, 'always' ],
        'newline-before-return': 2,
        'newline-per-chained-call' : 0,
        'no-array-constructor': 2,
        'no-bitwise': [ 2, { allow: [ '~' ] } ],
        'no-continue': 0,
        'no-inline-comments': 2,
        'no-lonely-if': 2,
        'no-mixed-operators': 2,
        'no-mixed-spaces-and-tabs': 2,
        'no-multiple-empty-lines': [ 2, { max: 1, maxEOF: 0 } ],
        'no-negated-condition': 2,
        'no-nested-ternary': 2,
        'no-new-object': 2,
        'no-plusplus': 0,
        'no-restricted-syntax': [ 2, 'WithStatement' ],
        'no-spaced-func': 2,
        'no-ternary': 0,
        'no-trailing-spaces': [ 2, { skipBlankLines: false } ],
        'no-underscore-dangle': 0,
        'no-unneeded-ternary': 2,
        'no-whitespace-before-property': 2,
        'object-curly-newline': 0,
        'object-curly-spacing': [ 2, 'always' ],
        'object-property-newline': [ 2, { allowMultiplePropertiesPerLine: true } ],
        'one-var': [ 2, { var: 'always', let: 'always', const: 'never' } ],
        'one-var-declaration-per-line': [ 2, 'always' ],
        'operator-assignment': [ 2, 'always' ],
        'operator-linebreak': [ 2, 'after' ],
        'padded-blocks': 0,
        'quote-props': [ 2, 'as-needed', { keywords: true } ],
        quotes: [ 2, 'single', { avoidEscape: true, allowTemplateLiterals: true } ],
        'require-jsdoc': 1,
        semi: [ 2, 'always' ],
        'semi-spacing': [ 2, { before: false, after: true } ],
        'sort-vars': 0,
        'space-before-blocks': [ 2, 'always' ],
        'space-before-function-paren': [ 2, 'never' ],
        'space-in-parens': [ 2, 'never' ],
        'space-infix-ops': 2,
        'space-unary-ops': [ 2, { words: true, nonwords: false } ],
        'spaced-comment': [ 2, 'always' ],
        'unicode-bom': [ 2, 'never' ],
        'wrap-regex': 0,
        'arrow-body-style': [ 2, 'as-needed' ],
        'arrow-parens': [ 2, 'as-needed' ],
        'arrow-spacing': [ 2, { before: true, after: true } ],
        'constructor-super': 2,
        'generator-star-spacing': [ 2, { before: false, after: true } ],
        'no-class-assign': 2,
        'no-confusing-arrow': 0,
        'no-const-assign': 2,
        'no-dupe-class-members': 2,
        'no-duplicate-imports': [ 2, { includeExports: true } ],
        'no-new-symbol': 2,
        'no-restricted-imports': 0,
        'no-this-before-super': 2,
        'no-useless-computed-key': 2,
        'no-useless-constructor': 2,
        'no-useless-rename': [ 2, { ignoreImport: false, ignoreExport: false, ignoreDestructuring: false } ],
        'no-var': 2,
        'object-shorthand': [ 2, 'always', { avoidQuotes: false, ignoreConstructors: false } ],
        'prefer-arrow-callback': 0,
        'prefer-const': 2,
        'prefer-reflect': 0,
        'prefer-rest-params': 0,
        'prefer-spread': 2,
        'prefer-template': 2,
        'require-yield': 2,
        'rest-spread-spacing': [ 2, 'never' ],
        'sort-imports': 0,
        'template-curly-spacing': [ 2, 'never' ],
        'yield-star-spacing': [ 2, { before: true, after: false } ]
    }
};