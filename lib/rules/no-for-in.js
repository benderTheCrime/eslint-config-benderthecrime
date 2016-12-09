module.exports = {
    meta: {
        docs: {
            description: 'Disallow for...in',
            category: 'Stylistic Issues',
            recommended: false
        },
        schema: []
    },
    create(context) {
        return {
            ForInStatement(node) {
                context.report(node, 'Do not use for...in');
            }
        };
    }
};