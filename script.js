// 2048 Game for CloudFone Platform
// Optimized for keyboard navigation and small screens

class Game2048 {
    constructor() {
        this.grid = [];
        this.score = 0;
        this.size = 4;
        this.tileContainer = document.getElementById('tile-container');
        this.scoreDisplay = document.getElementById('score');
        this.bestDisplay = document.getElementById('best');
        this.messageContainer = document.getElementById('game-message');
        
        this.init();
        this.setupEventListeners();
        this.loadBestScore();
    }

    init() {
        // Initialize empty grid
        this.grid = [];
        for (let i = 0; i < this.size; i++) {
            this.grid[i] = [];
            for (let j = 0; j < this.size; j++) {
                this.grid[i][j] = 0;
            }
        }
        
        // Clear tiles
        this.tileContainer.innerHTML = '';
        
        // Add initial tiles
        this.addRandomTile();
        this.addRandomTile();
        
        // Update display
        this.updateDisplay();
    }

    setupEventListeners() {
        // Keyboard navigation for CloudFone devices
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowUp':
                    e.preventDefault();
                    this.move('up');
                    break;
                case 'ArrowDown':
                    e.preventDefault();
                    this.move('down');
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    this.move('left');
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    this.move('right');
                    break;
                // CloudFone specific keys
                case 'Escape':
                    e.preventDefault();
                    this.exitGame();
                    break;
                // CloudFone soft keys simulation
                case 'F1': // Left soft key
                case 'SoftLeft':
                    e.preventDefault();
                    this.newGame();
                    break;
                case 'F2': // Right soft key  
                case 'SoftRight':
                case 'Backspace':
                    e.preventDefault();
                    this.exitGame();
                    break;
            }
        });

        // Soft key buttons for CloudFone
        document.getElementById('soft-key-left').addEventListener('click', () => {
            this.newGame();
        });

        document.getElementById('soft-key-right').addEventListener('click', () => {
            this.exitGame();
        });

        // Retry button
        document.querySelector('.retry-button').addEventListener('click', (e) => {
            e.preventDefault();
            this.newGame();
        });

        // Touch support for devices that have it
        let startX, startY;
        this.tileContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });

        this.tileContainer.addEventListener('touchend', (e) => {
            if (!startX || !startY) return;
            
            let endX = e.changedTouches[0].clientX;
            let endY = e.changedTouches[0].clientY;
            
            let diffX = startX - endX;
            let diffY = startY - endY;
            
            if (Math.abs(diffX) > Math.abs(diffY)) {
                if (diffX > 0) this.move('left');
                else this.move('right');
            } else {
                if (diffY > 0) this.move('up');
                else this.move('down');
            }
            
            startX = null;
            startY = null;
        });
    }

    addRandomTile() {
        let emptyCells = [];
        
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (this.grid[i][j] === 0) {
                    emptyCells.push({x: i, y: j});
                }
            }
        }
        
        if (emptyCells.length > 0) {
            let randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            let value = Math.random() < 0.9 ? 2 : 4;
            this.grid[randomCell.x][randomCell.y] = value;
            
            this.createTile(randomCell.x, randomCell.y, value, true);
        }
    }

    createTile(x, y, value, isNew = false) {
        let tile = document.createElement('div');
        tile.className = `tile tile-${value} tile-position-${x + 1}-${y + 1}`;
        if (isNew) {
            tile.classList.add('tile-new');
        }
        tile.textContent = value;
        tile.dataset.value = value;
        tile.dataset.x = x;
        tile.dataset.y = y;
        
        this.tileContainer.appendChild(tile);
        
        // Remove animation class after animation completes
        if (isNew) {
            setTimeout(() => {
                tile.classList.remove('tile-new');
            }, 200);
        }
    }

    updateDisplay() {
        // Clear all tiles
        this.tileContainer.innerHTML = '';
        
        // Recreate tiles based on grid
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (this.grid[i][j] !== 0) {
                    this.createTile(i, j, this.grid[i][j]);
                }
            }
        }
        
        // Update score
        this.scoreDisplay.textContent = this.score;
        
        // Update best score
        let best = parseInt(localStorage.getItem('best2048') || '0');
        if (this.score > best) {
            best = this.score;
            localStorage.setItem('best2048', best.toString());
        }
        this.bestDisplay.textContent = best;
    }

    move(direction) {
        let moved = false;
        let newGrid = JSON.parse(JSON.stringify(this.grid));
        
        switch(direction) {
            case 'left':
                for (let i = 0; i < this.size; i++) {
                    let row = newGrid[i].filter(val => val !== 0);
                    for (let j = 0; j < row.length - 1; j++) {
                        if (row[j] === row[j + 1]) {
                            row[j] *= 2;
                            this.score += row[j];
                            row.splice(j + 1, 1);
                        }
                    }
                    while (row.length < this.size) {
                        row.push(0);
                    }
                    newGrid[i] = row;
                }
                break;
                
            case 'right':
                for (let i = 0; i < this.size; i++) {
                    let row = newGrid[i].filter(val => val !== 0);
                    for (let j = row.length - 1; j > 0; j--) {
                        if (row[j] === row[j - 1]) {
                            row[j] *= 2;
                            this.score += row[j];
                            row.splice(j - 1, 1);
                            j--;
                        }
                    }
                    while (row.length < this.size) {
                        row.unshift(0);
                    }
                    newGrid[i] = row;
                }
                break;
                
            case 'up':
                for (let j = 0; j < this.size; j++) {
                    let column = [];
                    for (let i = 0; i < this.size; i++) {
                        if (newGrid[i][j] !== 0) {
                            column.push(newGrid[i][j]);
                        }
                    }
                    for (let i = 0; i < column.length - 1; i++) {
                        if (column[i] === column[i + 1]) {
                            column[i] *= 2;
                            this.score += column[i];
                            column.splice(i + 1, 1);
                        }
                    }
                    while (column.length < this.size) {
                        column.push(0);
                    }
                    for (let i = 0; i < this.size; i++) {
                        newGrid[i][j] = column[i];
                    }
                }
                break;
                
            case 'down':
                for (let j = 0; j < this.size; j++) {
                    let column = [];
                    for (let i = 0; i < this.size; i++) {
                        if (newGrid[i][j] !== 0) {
                            column.push(newGrid[i][j]);
                        }
                    }
                    for (let i = column.length - 1; i > 0; i--) {
                        if (column[i] === column[i - 1]) {
                            column[i] *= 2;
                            this.score += column[i];
                            column.splice(i - 1, 1);
                            i--;
                        }
                    }
                    while (column.length < this.size) {
                        column.unshift(0);
                    }
                    for (let i = 0; i < this.size; i++) {
                        newGrid[i][j] = column[i];
                    }
                }
                break;
        }
        
        // Check if grid changed
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (this.grid[i][j] !== newGrid[i][j]) {
                    moved = true;
                    break;
                }
            }
        }
        
        if (moved) {
            this.grid = newGrid;
            this.updateDisplay();
            
            setTimeout(() => {
                this.addRandomTile();
                this.checkGameStatus();
            }, 150);
        }
    }

    checkGameStatus() {
        // Check for 2048 win
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (this.grid[i][j] === 2048) {
                    this.showMessage('You Win!', 'game-won');
                    return;
                }
            }
        }
        
        // Check for game over
        if (!this.canMove()) {
            this.showMessage('Game Over!', 'game-over');
        }
    }

    canMove() {
        // Check for empty cells
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (this.grid[i][j] === 0) {
                    return true;
                }
            }
        }
        
        // Check for possible merges
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                let current = this.grid[i][j];
                if ((i < this.size - 1 && this.grid[i + 1][j] === current) ||
                    (j < this.size - 1 && this.grid[i][j + 1] === current)) {
                    return true;
                }
            }
        }
        
        return false;
    }

    showMessage(text, className) {
        this.messageContainer.querySelector('p').textContent = text;
        this.messageContainer.style.display = 'block';
        document.body.classList.add(className);
    }

    hideMessage() {
        this.messageContainer.style.display = 'none';
        document.body.classList.remove('game-won', 'game-over');
    }

    newGame() {
        this.hideMessage();
        this.score = 0;
        this.init();
    }

    exitGame() {
        if (confirm('Are you sure you want to exit the game?')) {
            // For CloudFone, try to close the widget/app
            if (window.close) {
                window.close();
            } else {
                // Fallback: show exit message
                this.showMessage('Thanks for playing!', 'game-over');
                setTimeout(() => {
                    // Try alternative exit methods
                    if (navigator.app && navigator.app.exitApp) {
                        navigator.app.exitApp();
                    } else if (window.history && window.history.length > 1) {
                        window.history.back();
                    } else {
                        // Last resort: reload to main page
                        window.location.href = 'about:blank';
                    }
                }, 2000);
            }
        }
    }

    showHelp() {
        alert('2048 Game Help:\n\n' +
              'Goal: Combine tiles to reach 2048!\n\n' +
              'Controls:\n' +
              '• Arrow keys to move tiles\n' +
              '• Left menu key: New Game\n' +
              '• Right menu key: Exit\n' +
              '• Escape key: Exit Game\n\n' +
              'When two tiles with the same number touch, they merge into one!');
    }

    loadBestScore() {
        let best = parseInt(localStorage.getItem('best2048') || '0');
        this.bestDisplay.textContent = best;
    }
}

// CloudFone specific optimizations
function optimizeForCloudFone() {
    // Detect CloudFone user agent
    const isCloudFone = navigator.userAgent.includes('Cloud Phone');
    
    if (isCloudFone) {
        // Add CloudFone specific optimizations
        document.body.classList.add('cloudfone-device');
        
        // Disable context menu for better experience
        document.addEventListener('contextmenu', e => e.preventDefault());
        
        // Optimize for small screens
        const screenWidth = window.innerWidth;
        if (screenWidth <= 160) {
            document.body.classList.add('small-screen');
        }
        
        // Handle CloudFone back button (EndCall key equivalent)
        document.addEventListener('keydown', function(e) {
            if (e.key === 'EndCall' || e.keyCode === 27) {
                e.preventDefault();
                if (window.game) {
                    window.game.exitGame();
                }
            }
        });
    }
    
    // Prevent zoom on double tap
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    
    // Prevent accidental refresh/navigation
    window.addEventListener('beforeunload', function (e) {
        e.preventDefault();
        e.returnValue = '';
        return '';
    });
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    optimizeForCloudFone();
    window.game = new Game2048();
});

// Service Worker registration for offline support (CloudFone supports this)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('sw.js').then(function(registration) {
            console.log('ServiceWorker registration successful');
        }, function(err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}