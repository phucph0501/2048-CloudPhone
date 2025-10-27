# 2048 Game for CloudFone Platform

🎮 **Live Demo**: [https://phucph0501.github.io/2048-CloudPhone/](https://phucph0501.github.io/2048-CloudPhone/)

A classic 2048 puzzle game specifically optimized for CloudFone feature phones with small screens and keyboard navigation.

![2048 CloudFone Game](https://img.shields.io/badge/CloudFone-Optimized-green)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-blue)
![HTML5](https://img.shields.io/badge/HTML5-CSS3-orange)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2023-yellow)

## 🚀 Features

- **CloudFone Optimized**: Designed for QQVGA (128x160) and QVGA (240x320) screens
- **Keyboard Navigation**: Full support for arrow keys and CloudFone soft keys
- **Responsive Design**: Adapts to different screen sizes automatically
- **Offline Support**: Works without internet connection using Service Worker
- **Local Storage**: Saves best score locally
- **Touch Support**: Works on devices that support touch input
- **Progressive Web App**: Can be installed on devices

## 🎯 Controls

### CloudFone Devices
- **Arrow Keys**: Move tiles (↑↓←→)
- **Left Soft Key**: Start new game
- **Right Soft Key**: Exit game
- **Escape Key**: Exit game

### Touch Devices (if supported)
- **Swipe**: Swipe in any direction to move tiles

## 🎲 Game Rules

1. Use arrow keys to move tiles
2. When two tiles with the same number touch, they merge into one
3. Try to create a tile with the number 2048 to win
4. The game ends when you can't make any more moves

## 🛠 Technical Features

- **HTML5/CSS3/JavaScript**: Built with web standards supported by CloudFone
- **ES2023 Compatible**: Uses modern JavaScript features available on CloudFone
- **Service Worker**: Provides offline functionality
- **Web Manifest**: Progressive Web App support
- **Responsive CSS**: Optimized for small screens with media queries
- **Keyboard Event Handling**: Proper CloudFone key mapping

## 📱 CloudFone Specific Optimizations

- Small screen layout (optimized for 128px-240px width)
- Keyboard-first navigation
- Soft key bar integration
- Reduced font sizes and spacing for small screens
- Touch event prevention for better keyboard experience
- CloudFone user agent detection

## 🌐 GitHub Pages Deployment

This game is automatically deployed to GitHub Pages and can be accessed at:
**[https://phucph0501.github.io/2048-CloudPhone/](https://phucph0501.github.io/2048-CloudPhone/)**

### Deployment Process:
1. Code is hosted on GitHub: [https://github.com/phucph0501/2048-CloudPhone](https://github.com/phucph0501/2048-CloudPhone)
2. Automatically deployed via GitHub Pages
3. Optimized for web delivery with PWA features

## 📂 File Structure

```
2048-CloudPhone/
├── index.html          # Main HTML file
├── style.css           # Responsive CSS styles
├── script.js           # Game logic and CloudFone optimizations
├── sw.js               # Service Worker for offline support
├── manifest.json       # Web App Manifest
├── docs.html           # GitHub Pages optimized version
├── .gitignore          # Git ignore file
└── README.md           # This file
```

## 🔧 Development

### Local Development:
```bash
# Clone the repository
git clone https://github.com/phucph0501/2048-CloudPhone.git

# Navigate to the directory
cd 2048-CloudPhone

# Start a local server
python -m http.server 8000

# Open browser and go to http://localhost:8000
```

### CloudFone Testing:
1. Upload to CloudFone developer platform
2. Test using CloudFone Simulator
3. Deploy to CloudFone devices

## 🌍 Browser Compatibility

- CloudFone devices (primary target)
- Chrome/Chromium-based browsers
- Modern mobile browsers with keyboard support
- Progressive Web App compatible browsers

## 📄 License

Open source - feel free to modify and distribute.

## 👨‍💻 Author

**phucph0501** - *Developer focused on CloudFone platform optimization*

- GitHub: [@phucph0501](https://github.com/phucph0501)
- Project: [2048-CloudPhone](https://github.com/phucph0501/2048-CloudPhone)

---

**Được tạo cho CloudFone Platform** - Game 2048 tối ưu cho điện thoại phím bấm với màn hình nhỏ và điều khiển bàn phím.