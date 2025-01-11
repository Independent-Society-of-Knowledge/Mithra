import { reactive } from 'vue';

export const themeStore = reactive({
    // Text Styles
    p: {
        color: '#ffffff',
        fontSize: '16px',
        fontWeight: 400,
        fontFamily: 'IBM Plex Sans, Arial, sans-serif',
        lineHeight: '1.5',
        backgroundColor: 'transparent',
    },

    // hs
    h1: {
        color: '#ffffff',
        fontSize: '32px',
        fontWeight: 700,
        fontFamily: 'IBM Plex Sans, Arial, sans-serif',
        lineHeight: '1.2',
        backgroundColor: 'transparent',
        backgroundImage: '',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '10px',
    },
    h2: {
        color: '#ffffff',
        fontSize: '28px',
        fontWeight: 600,
        fontFamily: 'IBM Plex Sans, Arial, sans-serif',
        lineHeight: '1.2',
        backgroundColor: 'transparent',
        backgroundImage: '',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '8px',
    },
    h3: {
        color: '#ffffff',
        fontSize: '24px',
        fontWeight: 600,
        fontFamily: 'IBM Plex Sans, Arial, sans-serif',
        lineHeight: '1.2',
        backgroundColor: 'transparent',
        backgroundImage: '',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '6px',
    },
    h4: {
        color: '#ffffff',
        fontSize: '20px',
        fontWeight: 400,
        fontFamily: 'IBM Plex Sans, Arial, sans-serif',
        lineHeight: '1.2',
        backgroundColor: 'transparent',
        backgroundImage: '',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '4px',
    },
    h5: {
        color: '#ffffff',
        fontSize: '18px',
        fontWeight: 400,
        fontFamily: 'IBM Plex Sans, Arial, sans-serif',
        lineHeight: '1.2',
        backgroundColor: 'transparent',
        backgroundImage: '',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '4px',
    },
    h6: {
        color: '#ffffff',
        fontSize: '16px',
        fontWeight: 400,
        fontFamily: 'IBM Plex Sans, Arial, sans-serif',
        lineHeight: '1.2',
        backgroundColor: 'transparent',
        backgroundImage: '',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '4px',
    },

    // Emphasis
    b: {
        color: '#ffffff',
        fontWeight: 700,
        backgroundColor: 'transparent',
    },
    i: {
        color: '#ffffff',
        fontStyle: 'italic',
        backgroundColor: 'transparent',
    },

    // Links and References
    a: {
        color: '#ffffff',
        textDecoration: 'underline',
        fontWeight: 400,
        backgroundColor: 'transparent',
        hoverColor: '#cccccc',
    },
    reference: {
        color: '#ffffff',
        fontSize: '14px',
        fontWeight: 400,
        backgroundColor: 'transparent',
    },

    // Code Elements
    inlineLatex: {
        color: '#ffffff',
        backgroundColor: 'transparent',
        fontFamily: 'KaTeX_Math, Times New Roman, serif',
        fontSize: '16px',
    },
    inlineCode: {
        color: '#ffffff',
        backgroundColor: '#333333',
        fontFamily: 'Consolas, Monaco, monospace',
        fontSize: '14px',
        padding: '2px 4px',
        borderRadius: '3px',
    },
    codeBlock: {
        color: '#ffffff',
        backgroundColor: '#333333',
        fontFamily: 'Consolas, Monaco, monospace',
        fontSize: '14px',
        padding: '16px',
        borderRadius: '4px',
        lineHeight: '1.4',
    },

    // Block Elements
    blockQuote: {
        backgroundColor: '#333333',
        borderLeft: '4px solid #ffffff',
        padding: '16px',
        margin: '16px 0',
        textColor: '#ffffff',
        fontSize: '16px',
        fontStyle: 'italic',
        backgroundImage: '',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },

    // Table Styles
    table: {
        borderColor: '#ffffff',
        borderWidth: '1px',
        borderStyle: 'solid',
    },

    // Global Styles
    global: {
        backgroundColor: '#000000',
        fontFamily: 'IBM Plex Sans, Arial, sans-serif',
        backgroundImage: '',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },

    // Theme Update Method
    updateTheme(newTheme) {
        // Deep merge function to handle nested objects
        const deepMerge = (target, source) => {
            for (const key in source) {
                if (source[key] instanceof Object && !Array.isArray(source[key])) {
                    if (!target[key]) Object.assign(target, { [key]: {} });
                    deepMerge(target[key], source[key]);
                } else {
                    Object.assign(target, { [key]: source[key] });
                }
            }
            return target;
        };

        deepMerge(this, newTheme);
    }
});