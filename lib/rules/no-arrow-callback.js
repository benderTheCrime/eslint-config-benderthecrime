module.exports = {
    meta: {
        docs: {
            description: 'Disallow arrow callbacks',
            category: 'Stylistic Issues',
            recommended: false
        },
        schema: []
    },
    create(context) {
        return {
            ArrowFunctionExpression(node) {
                if (
                    node.parent.type === 'CallExpression' &&
                    !context.getSourceCode().getText(node)
                        .includes('this.')
                ) {
                    context.report(node, 'Do not use arrow callbacks');
                }
            }
        };
    }
};