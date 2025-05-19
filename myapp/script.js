document.addEventListener('DOMContentLoaded', function() {
    // Initialize chart
    initComparisonChart();
    
    // Initialize number animation
    initStatCounters();
    
    // Add scroll animations
    initScrollAnimations();
});

// Initialize comparison chart
function initComparisonChart() {
    const ctx = document.getElementById('comparisonChart');
    
    if (!ctx) return;
    
    const chart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Storage Efficiency', 'Outfit Recommendation Accuracy', 'Space Utilization', 'Maintenance Cost (Inverse)', 'Lifespan'],
            datasets: [
                {
                    label: 'Traditional Wardrobe',
                    data: [30, 0, 40, 20, 20],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'
                },
                {
                    label: 'Basic Smart Wardrobe',
                    data: [60, 70, 75, 50, 40],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                },
                {
                    label: 'Neural Network Wardrobe',
                    data: [95, 98, 99, 80, 100],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgb(75, 192, 192)',
                    pointBackgroundColor: 'rgb(75, 192, 192)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(75, 192, 192)'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            },
            plugins: {
                legend: {
                    position: 'bottom',
                },
                title: {
                    display: true,
                    text: 'Wardrobe Technology Performance Comparison'
                }
            }
        }
    });
}

// Initialize counter animations
function initStatCounters() {
    const counters = document.querySelectorAll('.stat-value');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // Animation duration (milliseconds)
        const step = target / (duration / 16); // Increment per 16ms
        
        let current = 0;
        const updateCounter = () => {
            if (current < target) {
                // Use exponential growth for large numbers, linear for small ones
                if (target > 1000) {
                    current += Math.ceil(step * (current / target + 0.2));
                } else {
                    current += step;
                }
                
                if (current > target) current = target;
                
                // Format number display (use k for large numbers)
                if (target > 1000 && current >= 1000) {
                    counter.textContent = (current / 1000).toFixed(1) + 'k';
                } else {
                    counter.textContent = Math.floor(current);
                }
                
                requestAnimationFrame(updateCounter);
            }
        };
        
        // Start animation when element enters viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        }, {threshold: 0.5});
        
        observer.observe(counter);
    });
}

// Initialize scroll animations
function initScrollAnimations() {
    const elements = document.querySelectorAll('.card, .layer, .algorithm, .process-step, .memory-card, .membership-feature, .testimonial, .ar-image-container, .resource-column');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {threshold: 0.1});
    
    elements.forEach(element => {
        // Set initial state
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        
        observer.observe(element);
    });
}

// QR code effect
function initQREffect() {
    const qrCode = document.querySelector('.qr-inner');
    if (!qrCode) return;
    
    qrCode.addEventListener('mouseover', () => {
        qrCode.style.animation = 'pulse 1.5s infinite';
    });
    
    qrCode.addEventListener('mouseout', () => {
        qrCode.style.animation = 'none';
    });
}

// Add dynamic pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

// Page scroll handling
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Fixed navigation bar (if needed)
    if (scrollTop > 100) {
        // Add fixed navbar logic
    } else {
        // Remove fixed navbar logic
    }
});

// Initialize QR code effect
document.addEventListener('DOMContentLoaded', initQREffect); 