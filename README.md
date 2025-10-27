# 2048 Game for CloudFone Platform

A classic 2048 puzzle game specifically optimized for CloudFone feature phones with small screens and keyboard navigation.

## Features

- **CloudFone Optimized**: Designed for QQVGA (128x160) and QVGA (240x320) screens
- **Keyboard Navigation**: Full support for arrow keys and CloudFone soft keys
- **Responsive Design**: Adapts to different screen sizes automatically
- **Offline Support**: Works without internet connection using Service Worker
- **Local Storage**: Saves best score locally
- **Touch Support**: Works on devices that support touch input

## Controls

### CloudFone Devices
- **Arrow Keys**: Move tiles (↑↓←→)
- **Left Soft Key**: Start new game
- **Right Soft Key**: Show help
- **Escape Key**: Start new game

### Touch Devices (if supported)
- **Swipe**: Swipe in any direction to move tiles

## Game Rules

1. Use arrow keys to move tiles
2. When two tiles with the same number touch, they merge into one
3. Try to create a tile with the number 2048 to win
4. The game ends when you can't make any more moves

## Technical Features

- **HTML5/CSS3/JavaScript**: Built with web standards supported by CloudFone
- **ES2023 Compatible**: Uses modern JavaScript features available on CloudFone
- **Service Worker**: Provides offline functionality
- **Web Manifest**: Progressive Web App support
- **Responsive CSS**: Optimized for small screens with media queries
- **Keyboard Event Handling**: Proper CloudFone key mapping

## File Structure

```
2048 Game/
├── index.html          # Main HTML file
├── style.css           # Responsive CSS styles
├── script.js           # Game logic and CloudFone optimizations
├── sw.js               # Service Worker for offline support
├── manifest.json       # Web App Manifest
└── README.md           # This file
```

## Deployment to CloudFone

1. Upload all files to your CloudFone developer account
2. Test using the CloudFone Simulator
3. Deploy to CloudFone devices

## Browser Compatibility

- CloudFone devices (primary target)
- Chrome/Chromium-based browsers
- Modern mobile browsers with keyboard support

## CloudFone Specific Optimizations

- Small screen layout (optimized for 128px-240px width)
- Keyboard-first navigation
- Soft key bar integration
- Reduced font sizes and spacing for small screens
- Touch event prevention for better keyboard experience
- CloudFone user agent detection

## Development

The game is built using vanilla HTML, CSS, and JavaScript following CloudFone development best practices:

- No external dependencies
- Lightweight and fast loading
- Keyboard accessibility
- Small screen optimization
- Offline-first approach

## License

Open source - feel free to modify and distribute.

---

**Tạo cho CloudFone Platform** - Game 2048 tối ưu cho điện thoại phím bấm với màn hình nhỏ và điều khiển bàn phím.