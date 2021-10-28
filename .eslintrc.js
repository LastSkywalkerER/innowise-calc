'use sttrict';

export default {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["eslint:recommended", "prettier"],
    "parserOptions": {
        "ecmaVersion": 16,
        "sourceType": "module"
    },
    "rules": {},
    "plugins": [
        "prettier"
    ]
};