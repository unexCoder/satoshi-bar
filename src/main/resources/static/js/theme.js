const getPreferredTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
        return savedTheme
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

// Apply theme to document
const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
}

// Initialize theme
setTheme(getPreferredTheme())

// Add toggle button functionality
document.getElementById('theme-toggle').addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme')
    setTheme(currentTheme === 'dark' ? 'light' : 'dark')
})

// Listen for OS theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light')
    }
})