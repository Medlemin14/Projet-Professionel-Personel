// Navigation functionality
function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll(".content-section")
  sections.forEach((section) => {
    section.classList.remove("active")
  })

  // Show selected section
  const targetSection = document.getElementById(sectionId)
  if (targetSection) {
    targetSection.classList.add("active")
  }

  // Update navigation buttons
  const navButtons = document.querySelectorAll(".nav-btn")
  navButtons.forEach((btn) => {
    btn.classList.remove("active")
  })

  const activeButton = document.querySelector(`[data-section="${sectionId}"]`)
  if (activeButton) {
    activeButton.classList.add("active")
  }

  // Scroll to top of content
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  // Show intro section by default
  showSection("intro")

  // Add smooth scrolling for all internal links
  const links = document.querySelectorAll('a[href^="#"]')
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      showSection(targetId)
    })
  })

  // Add animation on scroll for cards
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe all cards for animation
  const cards = document.querySelectorAll(
    ".card, .project-card, .experience-card, .education-card, .skill-category, .reference-card",
  )
  cards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(card)
  })
})

// Add keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.altKey) {
    switch (e.key) {
      case "1":
        e.preventDefault()
        showSection("intro")
        break
      case "2":
        e.preventDefault()
        showSection("projects")
        break
      case "3":
        e.preventDefault()
        showSection("experiences")
        break
      case "4":
        e.preventDefault()
        showSection("skills")
        break
      case "5":
        e.preventDefault()
        showSection("cv")
        break
    }
  }
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0"
  document.body.style.transition = "opacity 0.5s ease"

  setTimeout(() => {
    document.body.style.opacity = "1"
  }, 100)
})

// Add hover effects for interactive elements
document.addEventListener("DOMContentLoaded", () => {
  const interactiveElements = document.querySelectorAll(".social-btn, .nav-btn, .project-link, .download-btn")

  interactiveElements.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)"
    })

    element.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })
})
