// Mobile navigation toggle
const navToggler = document.getElementById('navToggler')
const topNav = document.getElementById('topNav')

navToggler.addEventListener('click', function () {
    topNav.classList.toggle('active')

    // Animate hamburger menu
    const spans = navToggler.querySelectorAll('span')
    spans.forEach((span, index) => {
        if (topNav.classList.contains('active')) {
            if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)'
            if (index === 1) span.style.opacity = '0'
            if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)'
        } else {
            span.style.transform = 'none'
            span.style.opacity = '1'
        }
    })
})

// Active navigation item
const navLinks = document.querySelectorAll('.top-nav a')
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault()

        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'))

        // Add active class to clicked link
        this.classList.add('active')

        // Close mobile menu if open
        topNav.classList.remove('active')
        const spans = navToggler.querySelectorAll('span')
        spans.forEach(span => {
            span.style.transform = 'none'
            span.style.opacity = '1'
        })
    })
})

// Close mobile menu when clicking outside
document.addEventListener('click', function (e) {
    if (!navToggler.contains(e.target) && !topNav.contains(e.target)) {
        topNav.classList.remove('active')
        const spans = navToggler.querySelectorAll('span')
        spans.forEach(span => {
            span.style.transform = 'none'
            span.style.opacity = '1'
        })
    }
})

// Smooth scroll effect for header
let lastScrollTop = 0
window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const header = document.querySelector('.header')

    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)'
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)'
    }
    lastScrollTop = scrollTop
})

// Typing animation effect (optional)
function typeWriter(element, text, speed = 100) {
    let i = 0
    element.innerHTML = ''

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i)
            i++
            setTimeout(type, speed)
        }
    }

    type()
}

// Initialize typing effect when page loads
window.addEventListener('load', function () {
    const typingElement = document.querySelector('.typing')
    if (typingElement) {
        const originalText = typingElement.textContent
        typeWriter(typingElement, originalText, 150)
    }
})

// Add smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    })
})

// Add loading animation
window.addEventListener('load', function () {
    document.body.classList.add('loaded')
})

// Intersection Observer for animations (optional)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
}

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
        }
    })
}, observerOptions)

// Observe elements for animation
document.querySelectorAll('.home-info, .home-img').forEach(el => {
    observer.observe(el)
})