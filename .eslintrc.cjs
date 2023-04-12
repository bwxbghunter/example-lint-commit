module.exports = {
    "env": {
        "node": true,
        "browser": true,
        "commonjs": true,
        "amd": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        'comma-spacing': [
            2,
            {
              before: false,
              after: true,
            },
        ],
    }
}
