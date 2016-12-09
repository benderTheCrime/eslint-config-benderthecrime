module.exports = {
    meta: {
        docs: {
            description: 'Disallow while loops',
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