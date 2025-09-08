// Theme switcher with URL parameter persistence
(function() {
    'use strict';
    
    // Get theme from URL parameter
    function getThemeFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        const theme = urlParams.get('theme');
        return ['light', 'dark', 'cyberpunk'].includes(theme) ? theme : 'light';
    }
    
    // Set theme in URL without reloading page
    function setThemeInUrl(theme) {
        const url = new URL(window.location);
        if (theme === 'light') {
            url.searchParams.delete('theme');
        } else {
            url.searchParams.set('theme', theme);
        }
        window.history.replaceState({}, '', url);
    }
    
    // Apply theme by checking the appropriate radio button
    function applyTheme(theme) {
        // Desktop radio buttons
        const desktopRadios = document.querySelectorAll('input[name="theme"]');
        // Mobile radio buttons
        const mobileRadios = document.querySelectorAll('input[name="theme-mobile"]');
        
        desktopRadios.forEach(radio => {
            radio.checked = radio.id === `theme-${theme}`;
        });
        
        mobileRadios.forEach(radio => {
            radio.checked = radio.id === `theme-${theme}-mobile`;
        });
    }
    
    // Add theme parameter to all internal links
    function updateAllLinks() {
        const currentTheme = getThemeFromUrl();
        if (currentTheme === 'light') return; // Don't add parameter for default theme
        
        const links = document.querySelectorAll('a[href]');
        links.forEach(link => {
            const href = link.getAttribute('href');
            
            // Skip external links, anchors, and already processed links
            if (!href || 
                href.startsWith('http') || 
                href.startsWith('mailto:') || 
                href.startsWith('tel:') || 
                href.startsWith('#') ||
                href.includes('theme=')) {
                return;
            }
            
            // Skip relative links that go outside the site
            if (href.startsWith('../') && href.includes('..')) {
                return;
            }
            
            // Add theme parameter to internal links
            const separator = href.includes('?') ? '&' : '?';
            link.setAttribute('href', `${href}${separator}theme=${currentTheme}`);
        });
    }
    
    // Handle theme changes
    function handleThemeChange(event) {
        const selectedTheme = event.target.id.replace('-mobile', '').replace('theme-', '');
        setThemeInUrl(selectedTheme);
        
        // Sync the other radio buttons (desktop/mobile)
        applyTheme(selectedTheme);
        
        // Update all links with new theme
        updateAllLinks();
    }
    
    // Initialize theme system
    function initTheme() {
        const currentTheme = getThemeFromUrl();
        
        // Apply the theme from URL
        applyTheme(currentTheme);
        
        // Add event listeners to all theme radio buttons
        const allThemeRadios = document.querySelectorAll('input[name="theme"], input[name="theme-mobile"]');
        allThemeRadios.forEach(radio => {
            radio.addEventListener('change', handleThemeChange);
        });
        
        // Update all existing links
        updateAllLinks();
        
        // Watch for dynamically added content
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    updateAllLinks();
                }
            });
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTheme);
    } else {
        initTheme();
    }
})();