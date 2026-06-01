export const theme = {
  colors: {
    // Primary colors (Updated - Premium Gastronomic Identity)
    background: '#F8F4EE',
    surface: '#FFFFFF',
    primary: '#8B5E3C',
    primaryHover: '#6B4A2E',
    secondary: '#C68642',
    accent: '#D4A373',
    
    // Borders and inputs
    border: '#DCC9B6',
    inputBg: '#FBF9F6',
    
    // Text colors
    text: '#2C1810',
    textSecondary: '#6B5B53',
    textMuted: '#9B8B83',
    
    // Shadows
    shadow: '0 2px 8px rgba(44, 24, 16, 0.06)',
    shadowMedium: '0 4px 16px rgba(44, 24, 16, 0.10)',
    strongShadow: '0 8px 32px rgba(44, 24, 16, 0.15)',
    
    // Semantic
    error: '#C53030',
    warning: '#ED8936',
    success: '#38A169',
    info: '#3182CE',
  },

  spacing: {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '48px',
    xxl: '64px',
  },

  radii: {
    button: '12px',
    input: '10px',
    base: '16px',
    large: '20px',
  },

  typography: {
    fonts: {
      display: "'Playfair Display', serif",
      body: "'Poppins', sans-serif",
    },
    sizes: {
      xs: '12px',
      sm: '13px',
      base: '14px',
      lg: '16px',
      xl: '18px',
      '2xl': '20px',
      '3xl': '24px',
      '4xl': '28px',
      '5xl': '32px',
      '6xl': '44px',
      '7xl': '56px',
    },
    weights: {
      light: 400,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
  },

  transitions: {
    fast: '0.15s ease',
    base: '0.2s ease',
    smooth: '0.3s ease',
    slow: '0.4s ease',
    verySlow: '0.6s ease',
  },

  breakpoints: {
    mobile: '390px',
    tablet: '768px',
    desktop: '1024px',
    large: '1440px',
  },
}

export default theme
