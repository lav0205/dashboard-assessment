const sidebarToggle = document.querySelector('.fa-bars.logo');
const sidebar = document.querySelector('.side-bar');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('visible');
});

// Mark the clicked status as active
const statusElements = document.querySelectorAll('.status');
statusElements.forEach(status => {
    status.addEventListener('click', () => {
        // Remove active class from all statuses
        statusElements.forEach(s => s.classList.remove('active'));
        // Add active class to the clicked status
        status.classList.add('active');
    });
});

// Show alert when "Mark as Converted" button is clicked
const markAsConvertedBtn = document.querySelector('.converted-btn');
markAsConvertedBtn.addEventListener('click', () => {
    alert('Lead marked as converted!');
});

// Form submission handling
const activityForm = document.querySelector('.activity-form');
activityForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const formData = new FormData(activityForm);
    const formObj = {};
    formData.forEach((value, key) => {
        formObj[key] = value;
    });
    console.log('Form Submitted:', formObj);
    alert('Form has been submitted successfully!');
});

// Toggle visibility of the "Upcoming & Overdue" section
const viewAllLink = document.querySelector('.view-all');
const upcomingContainer = document.querySelector('.upcoming-container');

viewAllLink.addEventListener('click', (event) => {
    event.preventDefault();
    upcomingContainer.classList.toggle('expanded');
    viewAllLink.textContent = upcomingContainer.classList.contains('expanded') ? 'Collapse All' : 'View All';
});

// Change active navigation item
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});

let varOcg = 'JavaScript logic added successfully!';
console.log(varOcg);
