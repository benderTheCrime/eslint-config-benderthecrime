module.exports = {
    meta: {
        docs: {
            description: 'disallow while loops',
            category: 'Stylistic Issues',
            recommended: false
        },
        schema: []
    },
    create(context) {
        return {
            WhileStatement(node) {
                context.report(node, 'Do not use while loops');
            }
        };
    }
};