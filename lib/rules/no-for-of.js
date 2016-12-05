module.exports = {
    meta: {
        docs: {
            description: 'disallow for...of',
            category: 'Stylistic Issues',
            recommended: false
        },
        schema: []
    },
    create(context) {
        return {
            ForOfStatement(node) {
                context.report(node, 'Do not use for...of');
            }
        };
    }
};