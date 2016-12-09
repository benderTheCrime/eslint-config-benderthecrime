module.exports = {
    meta: {
        docs: {
            description: 'Disallow switch statements',
            category: 'Stylistic Issues',
            recommended: false
        },
        schema: []
    },
    create(context) {
        return {
            SwitchStatement(node) {
                context.report(node, 'Do not use switch statements');
            }
        };
    }
};