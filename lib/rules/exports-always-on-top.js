module.exports = {
    meta: {
        docs: {
            description: 'Require exports to be defined at the top of a module',
            category: 'Best Practices',
            recommended: true
        },
        schema: []
    },
    create(context) {
        const acceptedTypes = {
            ImportDeclaration: true,
            ExportNamedDeclaration: true,
            VariableDeclaration: true
        };

        /**
         * Determine if the named/default export is defined at the top of the
         * module
         * @param {ASTNode} node node to report
         * @returns {void}
         */
        function validateExport(node) {
            for (const childNode of node.parent.body) {
                if (node === childNode) {
                    break;
                } else if (!acceptedTypes[ childNode.type ]) {
                    context.report({
                        node,
                        message: 'Define exports at the top of the module'
                    });
                }
            }
        }

        return {
            ExportDefaultDeclaration: validateExport,
            ExportNamedDeclaration: validateExport
        };
    }
};