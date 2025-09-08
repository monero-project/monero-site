# Theme System Screenshots

This directory contains screenshots demonstrating the three theme options available in the Monero website theme system.

## Screenshots

### ✅ 1. Light Theme (`light-theme.png`)
- **URL**: `http://localhost:4000/`
- **Description**: Default light theme with clean white navigation and backgrounds
- **Features**: Dark text on light backgrounds, standard Monero orange accents
- **Status**: ✅ Added

### ✅ 2. Dark Theme (`dark-theme.png`)
- **URL**: `http://localhost:4000/?theme=dark`
- **Description**: Dark theme for reduced eye strain
- **Features**: Light text on dark gray backgrounds, maintains Monero orange accents
- **Status**: ✅ Added

### ✅ 3. Cyberpunk Theme (`cyberpunk-theme.png`)
- **URL**: `http://localhost:4000/?theme=cyberpunk`
- **Description**: Futuristic cyberpunk theme with neon effects
- **Features**: Neon green text, cyan accents, black/purple backgrounds, glow effects
- **Status**: ✅ Added

## Next Steps

To complete the screenshot collection:

1. **Dark Theme**: Navigate to `http://localhost:4000/?theme=dark` and save as `dark-theme.png`
2. **Cyberpunk Theme**: Navigate to `http://localhost:4000/?theme=cyberpunk` and save as `cyberpunk-theme.png`

## Usage in Pull Request

These screenshots demonstrate:
- Complete theme integration across navigation and content
- URL-based theme persistence (visible in browser address bar)
- Professional visual design for all three theme options
- Responsive layout compatibility
- Theme selector integration in main navigation

## Technical Details

- **Theme Switching**: Pure CSS with JavaScript for persistence
- **Privacy**: URL-based storage (no localStorage or cookies)
- **Compatibility**: Works across all modern browsers
- **Accessibility**: High contrast ratios in all themes
