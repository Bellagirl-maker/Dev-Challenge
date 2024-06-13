$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            nav: true
        },
        600: {
            items: 3,
            nav: true
        },
        1000: {
            items: 4,
            nav: true,
            loop: false
        }
    }
});

function openTab(tabId) {
    // Check screen width before toggling display
    if (window.innerWidth <= 768) {
        toggleAccordion(tabId);
    } else {
        // Hide all tab contents
        var tabContents = document.querySelectorAll('.tab-content');
        tabContents.forEach(function(tabContent) {
            tabContent.classList.remove('active');
        });

        // Deactivate all tab buttons
        var tabButtons = document.querySelectorAll('.tab-button');
        tabButtons.forEach(function(tabButton) {
            tabButton.classList.remove('active');
        });

        // Show the selected tab content
        document.getElementById(tabId).classList.add('active');

        // Activate the selected tab button
        document.querySelector('[onclick="openTab(\'' + tabId + '\')"]').classList.add('active');
    }
}

// Function to toggle accordion content
function toggleAccordion(tabId) {
    // Get all accordion buttons
    var accordionButtons = document.querySelectorAll('.accordion-button');

    // Loop through each accordion button
    accordionButtons.forEach(function(button) {
        // Get the corresponding accordion content
        var accordionContent = document.querySelector('[data-tab="' + button.getAttribute('data-tab') + '"]');

        // If the current button is the one clicked, toggle its active state
        if (button.getAttribute('data-tab') === tabId) {
            button.classList.add('active');
            accordionContent.classList.add('active');
        } else {
            // Deactivate other accordion buttons and contents
            button.classList.remove('active');
            accordionContent.classList.remove('active');
        }
    });
}

// Add click event listeners to accordion buttons
var accordionButtons = document.querySelectorAll('.accordion-button');
accordionButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var tabId = this.getAttribute('data-tab');
        toggleAccordion(tabId);
    });
});


