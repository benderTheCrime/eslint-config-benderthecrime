module.exports = {
    parser: 'babel-eslint',
    extends: 'google',
    ecmaFeatures: {
        modules: true,
        decorators: true
    },
    env: {
        node: true,
        browser: true
    },
    rules: {
        'max-len': [
            2,
            80,
            4,
            {
                ignoreUrls: true,
                ignorePattern: '^(import.*|const\s.*\s=\srequire.*)'
            }
        ],
        'eol-last': 0,
        'space-before-keywords': 0,
        'space-after-keywords': 0,
        'space-return-throw-case': 0,
        'keyword-spacing': 2,
        'no-multiple-empty-lines': [
            2,
            {
                max: 1,
                maxEOF: 0
            }
        ],
        'no-undef': 0,
        'object-curly-spacing': [
            2,
            'always'
        ],
        'array-bracket-spacing': [
            2,
            'always'
        ],
        'computed-property-spacing': [
            2,
            'always'
        ],
        indent: [
            2,
            4
        ],
        'no-multi-spaces': 0,
        'no-mixed-requires': 0,
        'one-var': [
            2,
            {
                var: 'always',
                let: 'always',
                const: 'never'
            }
        ],
        'new-cap': 0,
        'padded-blocks': 0,
        'require-jsdoc': 0,
        'valid-jsdoc': 0,
        'no-implicit-coercion': 0,
        'guard-for-in': 0,
        'accessor-pairs': 0,
        radix: 0,
        'no-empty-label': 0,
        'no-labels': 2,
        'consistent-return': 0,
        'no-return-assign': 0,
        'array-callback-return': 0
    }
};