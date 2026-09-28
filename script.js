// Import and inject Vercel Analytics
import { inject } from '@vercel/analytics';

inject();

// Progress tracking functionality
const progress = document.querySelector('.progress [role="progressbar"] span');
const progressText = document.querySelector('.progress p');

// Check localStorage for lesson progress
function updateProgress() {
    const completed = parseInt(localStorage.getItem('lessonsCompleted') || '0');
    const total = 8;
    
    const percentage = (completed / total) * 100;
    
    if (progress) {
        progress.style.width = `${percentage}%`;
    }
    
    if (progressText) {
        progressText.textContent = `${completed} of ${total} lessons completed`;
    }
    
    const progressBar = document.querySelector('.progress [role="progressbar"]');
    if (progressBar) {
        progressBar.setAttribute('aria-valuenow', completed.toString());
    }
}

// Initialize progress on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateProgress);
} else {
    updateProgress();
}
