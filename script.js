document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('projectCarousel');
    if (carousel) {
        // Show all cards initially for proper carousel display
        const cards = carousel.querySelectorAll('.project-card');
        cards.forEach(card => card.style.display = 'block');

        // Optional: Add custom slide animation if needed
        carousel.addEventListener('slid.bs.carousel', function () {
            // Trigger AOS refresh for smooth animations
            AOS.refresh();
        });
    }
});

const counters = document.querySelectorAll('.counter');

/**
 * Function to start a counter animation that increments from 0 to a target value
 * @param {HTMLElement} counter - The DOM element that displays the counter
 */
function startCounter(counter) {
    // Get the target value from the data-target attribute, default to 0 if not found
    const target = Number(counter.getAttribute('data-target')) || 0;
    let count = 0;
    const frames = 100; // smaller = faster

    /**
     * Update function that increments the count until it reaches the target value
     * Uses requestAnimationFrame for smooth animation
     */
    const update = () => {
        // Calculate the increment value based on target and frames
        const increment = target / frames;
        // Add the increment to the current count
        count += increment;

        // Check if the count has reached the target
        if (count < target) {
            // Update the counter display with the ceiling of the current count
            counter.innerText = Math.ceil(count);
            // Continue the animation by calling update again
            requestAnimationFrame(update);
        } else {
            // Display target value with a plus sign when the target is reached
            counter.innerText = target + "+";
        }
    };

    // Start the counter animation
    update();
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounter(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.6 });

if (counters && counters.length) {
    counters.forEach(counter => observer.observe(counter));
}




        
        // Auto-close navbar when a nav link is clicked
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                const navbarCollapse = document.querySelector('.navbar-collapse');
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
                bsCollapse.hide();
            });
        });

         document.addEventListener("aos-in", function(e){
            const bars = e.detail.querySelectorAll(".progress-bar");

            bars.forEach(bar  => {
                const target = bar.getAttribute("data-target");
                bar.style.width = target + "%";
            });
        })

        // Animate Bootstrap progress bars in skills section when visible
/**
 * Function to animate skill progress bars
 * Initializes progress bars with default styles and sets up animation triggers
 */
        function animateSkillProgressBars() {
  // Select all progress bars that have a data-target attribute
          document.querySelectorAll('.progress-bar[data-target]').forEach(bar => {
    // Set initial width to 0%
            bar.style.width = '0%';
    // Set transition for smooth animation with cubic-bezier easing
            bar.style.transition = 'width 2.5s cubic-bezier(0.4, 0, 0.2, 1)';
    // Set font size for the progress bar text
            bar.style.fontSize = '1.4rem';
    // Set height of the progress bar
            bar.style.height = '2.2rem';
    // Set height of the parent element to match
            bar.parentElement.style.height = '2.2rem';
    // Initialize animation flag as false
            bar._animated = false;
          });

/**
 * Animates progress bars when they become visible in the viewport
 * This function iterates through all progress bars with a data-target attribute
 * and animates them from 0% to their target value when they first appear in view
 */
          function animateVisibleBars() {
  // Select all progress bars that have a data-target attribute
            document.querySelectorAll('.progress-bar[data-target]').forEach(bar => {
    // Get the element's position relative to the viewport
              const rect = bar.getBoundingClientRect();
    // Check if the element is visible in the viewport and hasn't been animated yet
              if (rect.top < window.innerHeight && rect.bottom > 0 && !bar._animated) {
      // Get the target value from the data-target attribute
                const target = parseInt(bar.getAttribute('data-target'), 10);
                let current = 0;
      // Mark the bar as animated and initialize its display
                bar._animated = true;
                bar.textContent = '0%';
      // Calculate the step size for animation (minimum 1)
                const step = Math.max(1, Math.round(target / 50));
      // Set up interval for animation
                const interval = setInterval(() => {
        // Increment current value by step
                  current += step;
        // Ensure we don't exceed the target value
                  if (current >= target) current = target;
        // Update the bar's width and text content
                  bar.style.width = current + '%';
                  bar.textContent = current + '%';
        // Stop the animation when we reach the target
                  if (current >= target) clearInterval(interval);
                }, 50); // Update every 50ms
              }
            });
          }

  // Add event listeners for scroll and resize to trigger animation
          window.addEventListener('scroll', animateVisibleBars);
          window.addEventListener('resize', animateVisibleBars);
          animateVisibleBars(); // Initial check
        }
        document.addEventListener('DOMContentLoaded', animateSkillProgressBars);


