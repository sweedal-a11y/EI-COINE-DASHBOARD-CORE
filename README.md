# EI-COINS - Emireq Account Creation

A responsive React application for creating an Emireq account with email confirmation, reCAPTCHA verification, and comprehensive user activity tracking.

## Features

- ✅ **Pixel-perfect design** matching Figma specifications
- ✅ **Email validation** with real-time feedback
- ✅ **Google reCAPTCHA** integration for bot prevention
- ✅ **Comprehensive activity tracking** including:
  - Cursor position tracking
  - Click events
  - Scroll behavior
  - Keyboard interactions
  - Form interactions
  - Page visibility changes
  - Network status monitoring
  - Performance metrics
- ✅ **Fully responsive** design for all screen sizes
- ✅ **Accessibility** features with ARIA labels and keyboard navigation
- ✅ **Dark mode** support (respects system preferences)
- ✅ **Loading states** and smooth animations
- ✅ **Cross-browser** compatibility

## Tech Stack

- **React 18.2** - UI library
- **Vite 5.0** - Build tool and dev server
- **Vanilla CSS** - Styling with modern features
- **Google reCAPTCHA** - Bot protection

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

2. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Build

3. Build for production:
```bash
npm run build
```

### Preview Production Build

4. Preview the production build:
```bash
npm run preview
```

## Project Structure

```
EI-COINS/
├── index.html           # HTML entry point
├── main.jsx            # React entry point
├── App.jsx             # Main App component
├── CreateAccount.jsx   # Account creation component
├── CreateAccount.css   # Component styles
├── index.css           # Global styles
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── README.md          # Documentation
```

## Component Features

### CreateAccount Component

- **Email Validation**: Real-time validation with regex pattern
- **reCAPTCHA**: Google reCAPTCHA v2 integration
- **Activity Tracking**: Logs all user interactions to console
- **Error Handling**: User-friendly error messages
- **Loading States**: Visual feedback during submission
- **Keyboard Support**: 
  - Enter to submit
  - Escape to clear form
  - Tab navigation

## Activity Tracking

The component tracks and logs:
- Page load and unload events
- Email input changes
- Form submissions
- Cursor movements (debounced)
- Click events with coordinates
- Scroll position and percentage
- Window resize events
- Element focus events
- Page visibility changes
- Network status (online/offline)
- Performance metrics
- Touch events (mobile)
- Copy/paste events

All activities are logged to the browser console and can be sent to analytics services.

## Responsive Breakpoints

- **Large Desktop**: 1440px+
- **Desktop**: 1024px - 1439px
- **Tablet**: 769px - 1024px
- **Mobile**: 481px - 768px
- **Small Mobile**: 380px - 480px
- **Extra Small**: < 380px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- ARIA labels for form elements
- Keyboard navigation support
- Focus visible indicators
- Screen reader friendly
- High contrast mode support
- Reduced motion support

## Customization

### Colors

The color scheme uses Google Material Design colors:
- Primary: `#4285f4` (Blue)
- Secondary: `#fbbc05` (Yellow)
- Error: `#ea4335` (Red)
- Text: `#202124` (Dark Gray)
- Background: `#f5f7fa` (Light Gray)

### reCAPTCHA

Update the site key in `CreateAccount.jsx`:
```jsx
data-sitekey="YOUR_RECAPTCHA_SITE_KEY"
```

## Performance

- Optimized with Vite for fast builds
- Lazy loading and code splitting
- Debounced event handlers
- CSS animations with GPU acceleration
- Minimal bundle size

## Security

- Input sanitization
- reCAPTCHA bot protection
- HTTPS recommended for production
- CSP headers recommended

## License

© 2026 Emireq. All rights reserved.

## Support

For issues or questions, contact: support@emireq.com
