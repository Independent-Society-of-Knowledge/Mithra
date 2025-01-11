/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
// Colors
// --- Azure Pallet
                primary: {
                    10: '#f2e2ff',
                    20: '#d9bcf3',
                    30: '#c99eef',
                    40: '#a57ccd',
                    50: '#8159ab',
                    60: '#6f489a',
                    70: '#5d3689',
                    80: '#4b2578',
                    90: '#381366',
                    100: '#240b43'
                },
                dark: {
// --- Gray Pallet
                    10: '#606060',
                    20: '#545454',
                    30: '#484848',
                    40: '#3c3c3c',
                    50: '#303030',
                    60: '#242424',
                    70: '#181818',
                    80: '#0c0c0c',
                    90: '#060606',
                    100: '#000000'
                },
                light: {
                    10: '#ffffff',
                    20: '#fafafa',
                    30: '#f6f6f6',
                    40: '#ececec',
                    50: '#d8d8d8',
                    60: '#b0b0b0',
                    70: '#9c9c9c',
                    80: '#888888',
                    90: '#7c7c7c',
                    100: '#717171'
                },
                warning: {
                    10: '#ffdd60',
                    20: '#ffd640',
                    30: '#ffc800',
                    40: '#e8b600',
                    50: '#d3a500'
                },
                danger: {
                    10: '#d84154',
                    20: '#c42134',
                    30: '#b00014',
                    40: '#a00012',
                    50: '#910010'
                },
                success: {
                    10: '#aefcbb',
                    20: '#83d792',
                    30: '#57b269',
                    40: '#2c8d40',
                    50: '#167a2b'
                }
            },
            spacing: {
                '0px': '0px',
                '1px': '1px',
                '2px': '2px',
                '4px': '4px',
                '6px': '6px',
                '8px': '8px',
                '12px': '12px',
                '16px': '16px',
                '24px': '24px',
                '32px': '32px',
                '48px': '48px',
                '64px': '64px',
                '96px': '96px',
                '128px': '128px',
            },
            screens: {
                xs: '0px',
                sm: '320px',
                md: '672px',
                lg: '1056px',
                xl: '1312px',
                mx: '1584px',
            },
            plugins: [],
        }
    }
}
