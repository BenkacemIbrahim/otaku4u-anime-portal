/* ==========================================================================
   Tailwind design tokens
   Shared by every page. Must be loaded right after the Tailwind CDN build.
   ========================================================================== */

tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#FF6B6B',
                secondary: '#4ECDC4',
                background: '#1A1A2E',
                text: '#FFFFFF',
            },
            fontFamily: {
                sans: ['Cairo', 'sans-serif'],
            },
        },
    },
};
