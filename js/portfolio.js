// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

// ===== PORTFOLIO FILTER =====
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Initialize portfolio items with transition
portfolioItems.forEach(item => {
    item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
});

}); // End DOMContentLoaded

// ===== PROJECT DATA =====
const projectsData = [
    {
        title: 'LUXE. E-Commerce Website Platform',
        category: 'Tomorrow’s Web',
        description: 'I created a fashion e-commerce site, LUXE, using HTML, CSS, JavaScript, Node.js, and a RESTful API. The minimalist, multi-page web app features a full-stack backend, responsive frontend, secure authentication, shopping cart, order history, and an admin dashboard.',
        technologies: ['HTML5', 'Node.js', 'MongoDB', 'CSS3', 'JavaScript', 'Express.js'],
        duration: '3 months',
        client: 'LUXE.',
        link: 'https://luxe-ecommerce-website-live-afyw.vercel.app/'
    },
    {
        title: 'Nutribot Ai Chatbot System',
        category: 'Ai / Machine Learning',
        description: 'I built the Nutribot AI chatbot system for conversation by using Google Dialogflow to provide personalised nutrition facts and fitness guidelines to give very essential ideas to get a healthy lifestyle.',
        technologies: ['Python', 'Ai', 'Dialogflow'],
        duration: '4 months',
        client: 'Nutribot',
        link: 'https://nutribot-chatbot-1.vercel.app/'
    },
    {
        title: 'Mobile Healthy Habits App',
        category: 'Mobile Apps',
        description: 'I created the Healthy Habits App using Python and Kotlin in Android Studio to help users understand the importance and limitations of healthy versus junk food habits.',
        technologies: ['Python', 'Kotlin', 'Android Studio'],
        duration: '10 months',
        client: 'Healthy Habits App',
        link: 'https://github.com/MOHDADHIL2023/Healthy_Habits_Second_App'
    },
    {
        title: 'SmartPhone Travel App',
        category: 'UI/UX Design',
        description: 'I created a smartphone travel app for an interactive Figma prototype designed for smooth trips by keeping booking and planning and focusing on clean visual hierarchy and intuitive user journeys.',
        technologies: ['Figma', 'Prototype', 'UI/UX', 'Prototyping'],
        duration: '3 months',
        client: 'Travel App',
        link: 'https://www.figma.com/proto/zlxckeugWNgQVxPVZXuKTt/SMARTPHONE-TRAVEL-APP?page-id=0%3A1&node-id=1-6&p=f&viewport=457%2C248%2C0.07&t=RlZ3egbjWYwqdbce-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A6&show-proto-sidebar=1'
    },
    {
        title: 'Heart Disease Classification',
        category: 'UI/UX Design',
        description: 'I developed a machine learning project by using health metrics to show some cardiovascular risks through data analysis and classification algorithms.',
        technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Kaggle'],
        duration: '2 months',
        client: 'Open Source / Kaggle',
        link: 'https://www.kaggle.com/code/mohdadilhossain/heart-disease-prediction-classification-project'
    },
    {
        title: 'BSU RAK Website Redesign',
        category: 'Digital Visual Design',
        description: 'I made a comprehensive UI/UX design of the Bath Spa University RAK, UAE, website. The project shows restructuring the site information architecture to improve student accessibility by creating a modern, unique visual language and ensuring a responsive layout for all devices.',
        technologies: ['Figma', 'Prototyping', 'User Experience (UX)', 'Interface Design (UI)'],
        duration: '2 months',
        client: 'BSU Academic Project',
        link: 'https://www.figma.com/proto/KKlCFM1vlIebzXcdkN2PMo/BSU_RAK?page-id=0%3A1&node-id=1-3&p=f&viewport=460%2C260%2C0.06&t=Xn6sEoPLPd4CBDIS-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A3'
    },
    {
        title: 'Smart Location App',
        category: 'Mobile Apps',
        description: 'I developed it in Android Studio it shows applications by utilising Google Play services to provide real-time location tracking and mapping. That project focus is on handling dynamic permissions and also providing a clean user interface for geographical data visualisation.',
        technologies: ['Android Studio', 'Python', 'Kotlin', 'GPS'],
        duration: '3 months',
        client: 'App Design (Academic)',
        link: 'https://github.com/MOHDADHIL2023/Nan_Calculator_Location_App'
    },
    {
        title: 'Canadian University Dubai Project',
        category: 'Web Development',
        description: 'I developed a during-web-development project which involves building a responsive educational multi-page website for CUD. Its understanding was semantic HTML, advanced CSS layout techniques with flexbox or grid and keeping sure a user experience across mobile, tablet and desktop devices.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Github Pages'],
        duration: '3 months',
        client: 'Web Dev - 1 (Academic)',
        link: 'https://mohdadhil2023.github.io/Canadian-University-Dubai/'
    },
    {
        title: 'Travel Responsive Website',
        category: 'Web Development',
        description: 'I developed 2 web development projects, paying attention to the first mobile philosophy. Its various features added fully responsive travel landing pages with complex CSS animations with optimised images and fluid layouts that modify very smoothly from mobile devices to large desktop monitors.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Github Pages', 'Vercel Deployment'],
        duration: '2 months',
        client: 'Web Dev - 2 (Academic)',
        link: 'https://travel-responsive-website-github-io.vercel.app/'
    },
    {
        title: 'Angry Birds 2D Game',
        category: 'Game Development',
        description: 'I build it by using Unity Hub and C# for this recreation of the classic Angry Birds machines. It demonstrates my proficiency in 2D physics engines and sprite management and collision detection and event-based scripting. The game is fully playable and hosted on itch.io.',
        technologies: ['Unity Hub', 'C#', 'Scripting', '2D Physics', 'Itch.io'],
        duration: '2 months',
        client: 'Game Developer / Creative Coding Project',
        link: 'https://mohd-adil-hossain.itch.io/angry-birds'
    },
    {
        title: 'Escaping The Prison',
        category: 'Game Developer / Creative Coding',
        description: 'I created a narrative game that is still in the works and was made with the Bitsy game engine. This project looks at lo-fi aesthetics and environmental storytelling, with an emphasis on user interaction and mechanics that are based on dialogue. It shows that you can make atmospheric digital experiences even when you have to work with limited technology.',
        technologies: ['Bitsy', 'Game Design', 'Pixel Art', 'Narrative Scripting'],
        duration: '1 month',
        client: 'Game Developer / Creative Coding Project',
        link: 'https://mohd-adil-hossain.itch.io/escaping-the-prison'
    },
    {
        title: 'Hide & Seek',
        category: 'Interactive Narrative',
        description: 'I made a text-based adventure game that you can really get into using Twine. The project is all about complicated branching stories and state-based logic, where the choices users make have a big effect on how the story ends. It shows that you are good at narrative design, making logical flow charts, and telling stories from the user point of view.',
        technologies: ['Twine', 'Game Design', 'Logic Branching'],
        duration: '1 month',
        client: 'Game Developer / Creative Coding Project',
        link: 'https://mohd-adil-hossain.itch.io/hide-and-seek'
    },
    {
        title: 'Prime Marketing Website',
        category: 'Creative Industry Challenge',
        description: 'We group mates came up with this project as a solution for the Creative Industry Challenges module. It is a high-performance marketing platform. It helps creative agencies grow their online presence by focusing on conversion-centered design, professional brand storytelling, and modern web performance standards.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Github Pages', 'Vercel Deployment'],
        duration: '2 months',
        client: 'Professional Practice (Academic)',
        link: 'https://prime-marketing-two.vercel.app/'
    },
    {
        title: 'P5.JS Generative Art Gallery',
        category: 'Creative Coding',
        description: 'I made a series of creative experiments using the p5.js library from a variety of sources. These sketches look at the connection between math and art by using algorithmic patterns, interactive particle systems, and generative geometry. It shows that you really know the canvas API and how to make visuals that are based on logic.',
        technologies: ['p5.js', 'Processing', 'JavaScript', 'Generative Design'],
        duration: '2 months',
        client: 'Creative Coding (Academic/Personal)',
        link: 'https://editor.p5js.org/adil2030hossain/sketches'
    },
    {
        title: 'Machine Learning Experiment Portfolio',
        category: 'Machine Learning',
        description: 'I made a dual-study research portfolio that looks at two different ML applications. 1) Using smart home devices: Using linear regression to predict how much energy and utility the devices will use. 2) Seismic Analysis: Using Logistic Regression to figure out how likely earthquakes are to happen in Afghanistan from 1995 to 2023. This portfolio shows that you are an expert in data preprocessing, feature engineering, and predictive modelling.',
        technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Kaggle', 'Linear Regression', 'Logistic Regression'],
        duration: '4 months',
        client: 'Machine Learning (Academic/Personal)',
        link: 'https://github.com/MOHDADHIL2023/Experiment-Porftolio-Machine-Learning?tab=readme-ov-file'
    },
    {
        title: 'Python Project Software Development',
        category: 'Software Development',
        description: 'I made a complete set of Python programs that focus on GUI development and functional logic. Some of the main projects are a Student Management System that can create, read, update, and delete records, a Data-Driven Country Information app, an interactive Maths Quiz, and a simulation of a vending machine. This suite shows that you know how to use Tkinter for UI, Object-Oriented Programming (OOP), and managing data well.',
        technologies: ['Python', 'Tkinter', 'Software Developer'],
        duration: '4 months',
        client: 'Code Lab 1 & 2 (BSU)',
        link: 'https://github.com/MOHDADHIL2023/Python_Projects'
    },
    {
        title: 'Renewable Energy Visualization',
        category: 'Data Visualization (Emerging Technologies)',
        description: 'I made this project in Flourish Studio. It shows how the world is moving toward more sustainable energy sources, with a focus on how renewable power has grown over the past ten years.',
        technologies: ['Flourish Studio', 'Sustainability', 'Data Analysis'],
        duration: '1 month',
        client: 'Data Visualization (Emerging Technologies)',
        link: 'https://public.flourish.studio/story/3054531/'
    },
    {
        title: 'Discover BSU Web Design',
        category: 'Digital Visual Design',
        description: 'I created a full web design project for Bath Spa University. It has a user-centred design that is meant to make it easier for students to find information about the campus.',
        technologies: ['Canva', 'UI/UX Design', 'Visual Design'],
        duration: '1 month',
        client: 'Bath Spa University (Academic)',
        link: 'https://adilcanva24.my.canva.site/bath-spa-university-rak'
    }
];

// ===== MODAL FUNCTIONS (Global scope for onclick) =====
function openModal(index) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    
    // Check if modal elements exist
    if (!modal || !modalBody) {
        console.error('Modal elements not found');
        return;
    }
    
    const project = projectsData[index];
    
    modalBody.innerHTML = `
        <h3>${project.title}</h3>
        <p class="project-category"><strong>Category:</strong> ${project.category}</p>
        <p>${project.description}</p>
        
        <h4 style="margin-top: 2rem; margin-bottom: 1rem;">Technologies Used:</h4>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.5rem;">
            ${project.technologies.map(tech => `
                <span style="padding: 0.4rem 1rem; background: var(--bg-secondary); color: var(--primary); border-radius: 20px; font-size: 0.9rem;">${tech}</span>
            `).join('')}
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin-top: 2rem;">
            <div>
                <strong>Duration:</strong><br>
                <span style="color: var(--text-light);">${project.duration}</span>
            </div>
            <div>
                <strong>Client:</strong><br>
                <span style="color: var(--text-light);">${project.client}</span>
            </div>
        </div>
        
        <div style="margin-top: 2rem;">
            <a href="${project.link}" target="_blank" class="btn btn-primary" style="text-decoration: none;">View Project</a>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    if (!modal) return;
    
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Initialize modal event listeners when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('projectModal');
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = document.getElementById('projectModal');
            if (modal && modal.classList.contains('active')) {
                closeModal();
            }
        }
    });
});

console.log('Portfolio page loaded successfully!');