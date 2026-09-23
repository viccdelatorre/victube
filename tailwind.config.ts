import type { Config } from 'tailwindcss';

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",

    ], //these will change once we add folders to src
    theme: {
        extend: {
            colors: {
                primary: "var(--background)",
                secondary: 'var(--foreground)',
            },
        },
    },
    plugins: [],
} satisfies Config;
