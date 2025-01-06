// Work data
const workItems = [
    {
        title: "Digital Art Gallery",
        category: "Web Development",
        description: "Interactive 3D art gallery built with Three.js",
        image: "assets/work1.jpg",
        technologies: ["React", "Three.js", "WebGL"],
        link: "#"
    },
    {
        title: "AI Music Visualizer",
        category: "Creative Coding",
        description: "Real-time music visualization using AI",
        image: "assets/work2.jpg",
        technologies: ["Python", "TensorFlow", "WebAudio API"],
        link: "#"
    },
    {
        title: "NFT Marketplace",
        category: "Blockchain",
        description: "Modern NFT marketplace with unique features",
        image: "assets/work3.jpg",
        technologies: ["Solidity", "Next.js", "IPFS"],
        link: "#"
    },
    {
        title: "Smart Home App",
        category: "Mobile Development",
        description: "IoT control system with beautiful UI",
        image: "assets/work4.jpg",
        technologies: ["React Native", "Node.js", "MQTT"],
        link: "#"
    },
    {
        title: "Virtual Reality Game",
        category: "Game Development",
        description: "Immersive VR experience with stunning graphics",
        image: "assets/work5.jpg",
        technologies: ["Unity", "C#", "VR"],
        link: "#"
    },
    {
        title: "AI Chat Assistant",
        category: "Machine Learning",
        description: "Smart chatbot with natural language processing",
        image: "assets/work6.jpg",
        technologies: ["Python", "NLP", "TensorFlow"],
        link: "#"
    }
];

// Populate Work Section
const workContainer = document.querySelector('#work .grid');
workItems.forEach(item => {
    const workCard = document.createElement('div');
    workCard.className = 'glass-effect rounded-xl overflow-hidden card-hover group';
    workCard.innerHTML = `
        <div class="relative h-64 overflow-hidden">
            <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-deep-purple to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div class="p-6">
            <span class="text-neon-pink text-sm">${item.category}</span>
            <h3 class="text-xl font-space font-bold mt-2 mb-3">${item.title}</h3>
            <p class="text-gray-400 text-sm mb-4">${item.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">
                ${item.technologies.map(tech => `
                    <span class="px-3 py-1 text-xs rounded-full bg-light-purple/50">${tech}</span>
                `).join('')}
            </div>
            <a href="${item.link}" class="inline-block text-neon-blue hover:text-neon-pink transition-colors">
                View Project →
            </a>
        </div>
    `;
    workContainer.appendChild(workCard);
});

// Form submission handler
document.addEventListener('DOMContentLoaded', () => {
    // Initialize skill bars animation
    const skillBars = document.querySelectorAll('.skill-progress');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.parentElement.previousElementSibling.querySelector('span:last-child').textContent;
                const value = parseFloat(progress) / 100;
                entry.target.style.transform = `scaleX(${value})`;
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => observer.observe(bar));

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form submission handler with cyberpunk effect
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const button = form.querySelector('button');
            const originalText = button.textContent;
            
            // Add glitch effect to button
            button.style.animation = 'glitch 0.3s infinite';
            button.textContent = 'SENDING...';
            
            setTimeout(() => {
                button.style.animation = '';
                button.textContent = 'MESSAGE SENT!';
                button.style.backgroundColor = '#00F5FF';
                button.style.color = '#0A0A0A';
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.backgroundColor = '';
                    button.style.color = '';
                    form.reset();
                }, 2000);
            }, 1500);
        });
    });

    // Parallax effect for grid pattern
    document.addEventListener('mousemove', (e) => {
        const grid = document.querySelector('.grid-pattern');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        grid.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
    });

    // Glitch effect for text
    const glitchTexts = document.querySelectorAll('.glitch-text');
    glitchTexts.forEach(text => {
        text.setAttribute('data-text', text.textContent);
    });

    // Neon border effect
    const neonBorders = document.querySelectorAll('.neon-border');
    neonBorders.forEach(border => {
        border.addEventListener('mousemove', (e) => {
            const rect = border.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            border.style.setProperty('--x', `${x}px`);
            border.style.setProperty('--y', `${y}px`);
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections and work items
    document.querySelectorAll('section, .card-hover').forEach(element => {
        observer.observe(element);
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }

            try {
                const response = await fetch('https://formsubmit.co/ajax/Hamayoun.azad3@gmail.com', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        message: message
                    })
                });

                if (response.ok) {
                    alert('Message sent successfully!');
                    contactForm.reset();
                } else {
                    throw new Error('Failed to send message');
                }
            } catch (error) {
                alert('Failed to send message. Please try again later.');
                console.error('Error:', error);
            }
        });
    }
});
