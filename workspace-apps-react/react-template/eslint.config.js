
import { defineConfig } from "eslint/config";
import react from "eslint-plugin-react";
import typescript from "@typescript-eslint/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default defineConfig([
	{
        files: ["src/**/*.js", "src/**/*.jsx", "src/**/*.ts", "src/**/*.tsx"],
		ignores: ["**/*.config.js", "!**/eslint.config.js", '**/node_modules/**'],
		extends:[
            'plugin:react/recommended',
            'plugin:react-hooks/recommended',
            'plugin:@typescript-eslint/recommended',
            'plugin:import/warnings',
            'plugin:import/typescript',
            'plugin:jsx-a11y/recommended'
        ],

        parser: '@typescript-eslint/parser',
        parserOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
            ecmaFeatures: {
                jsx: true,
            },
        },

        plugins:{
            react: react,
            '@typescript-eslint': typescript,
            'import': importPlugin, 
            'jsx-a11y': jsxA11y,    

        },
        settings: {
            react: {
            version: 'detect',
            },
        },
        plugins: ['react', '@typescript-eslint'],
        settings: {
            react: {
            version: 'detect',
            },
        },

        rules: {
            'react/prop-types': 'off',
            '@typescript-eslint/no-unused-vars': ['error'],
            '@typescript-eslint/no-var-requires': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/props-types': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-empty-function': 'off',
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/no-empty-interface': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            
        },
	},
]);

/*
module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:jsx-a11y/recommended'

    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['react', '@typescript-eslint'],
    settings: {
        react: {
        version: 'detect',
        },
    },
    rules: {
        'react/prop-types': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/no-var-requires': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/props-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        
    },
}*/