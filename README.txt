================================================================================
KIDDLE - EARLY CHILDHOOD EDUCATION & KINDERGARTEN MULTI-PAGE WEBSITE TEMPLATE
================================================================================

Welcome to the Kiddle Preschool & Kindergarten Website Template!
This is a modern, responsive, playful, and high-performance multi-page
web application designed specifically for preschools, daycares, kindergartens,
and early learning academies.

--------------------------------------------------------------------------------
1. PROJECT STRUCTURE
--------------------------------------------------------------------------------

Project1/
│
├── css/
│   └── style.css           # Core styling, responsive design tokens & animations
│
├── img/
│   ├── favicon.svg         # SVG vector site icon
│   └── (Add your images here)
│
├── js/
│   └── main.js             # Interactive JavaScript logic & UI controllers
│
├── lib/
│   └── (Optional libraries) # Placeholder for extra external vendor libraries
│
├── 404.html                # Friendly "Page Out For Recess" 404 error page
├── about.html              # School history, pedagogy pillars, safety & mission
├── appointment.html        # Interactive school tour & appointment booking system
├── call-to-action.html     # Admissions open, enrollment steps & tuition discounts
├── classes.html            # Development programs catalog with dynamic age filters
├── contact.html            # Campus address, direct phones, form & interactive map
├── facility.html           # Campus walkthrough, smart classrooms & safety standards
├── index.html              # Homepage with hero, features, previews & statistics
├── team.html               # Certified educators, bios, credentials & career banner
├── testimonial.html        # Parent stories, 5-star ratings & review submission form
│
└── README.txt              # This comprehensive documentation file

--------------------------------------------------------------------------------
2. KEY FEATURES & FUNCTIONALITY
--------------------------------------------------------------------------------

- Fully Responsive Layout:
  Optimized for ultra-wide desktops, laptops, tablets, and mobile devices.

- Playful & Joyful Design Aesthetics:
  Custom curated color palette (Warm Coral #FE5D37, Sunny Gold #FFBA00,
  Forest Green #198754, Playful Indigo #103741) paired with modern rounded
  typography (Fredoka and Quicksand from Google Fonts).

- Interactive UI Components:
  * Sticky Navigation Bar with active path recognition and mobile drawer menu
  * Animated Statistics Counters on scroll (using IntersectionObserver)
  * Dynamic Class Filtering by age category (Toddlers, Preschool, Kindergarten, STEAM)
  * Interactive Campus Tour & Appointment Booking Form with custom confirmation modal
  * Interactive Parent Review Submission Form with instant toast alerts
  * Collapsible FAQ Accordions with animated transitions
  * Smooth Back-to-Top button
  * Interactive Contact Form with input validation

- Fast & Lightweight:
  Built with clean Semantic HTML5, pure Vanilla CSS, and modular Vanilla JS.
  Zero heavy framework dependencies required.

--------------------------------------------------------------------------------
3. HOW TO RUN / PREVIEW
--------------------------------------------------------------------------------

Option A: Direct File Opening
- Simply double-click "index.html" in your file explorer to open it in any modern
  web browser (Chrome, Edge, Firefox, Safari).

Option B: Local Web Server (Recommended)
- Using VS Code: Right-click "index.html" and select "Open with Live Server".
- Using Python:
    python -m http.server 8000
    Then visit http://localhost:8000 in your browser.
- Using Node.js:
    npx serve .
    Then open the provided localhost URL.

--------------------------------------------------------------------------------
4. CUSTOMIZATION GUIDE
--------------------------------------------------------------------------------

1. Brand Colors:
   Open "css/style.css" and update the CSS variables in the :root selector:
   --primary: #FE5D37;
   --secondary: #198754;
   --accent-yellow: #FFBA00;
   --dark: #103741;

2. School Name & Details:
   Update the title, contact telephone, email, and campus address across the
   HTML files.

3. Replacing Images:
   Drop your school's actual photography inside the "img/" directory and update
   the <img> src attributes in the HTML files.

--------------------------------------------------------------------------------
5. CREDITS & ASSETS
--------------------------------------------------------------------------------
- Typography: Fredoka & Quicksand (Google Fonts)
- Icons: Font Awesome 6 Free (CDN)
- Imagery: High-resolution child education photography (Unsplash)
- Architecture & Design: Modern HTML5 & CSS3 Design System

© 2026 Kiddle Early Childhood Academy. All Rights Reserved.
