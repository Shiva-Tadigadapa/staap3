// <!-- <script>
// document.addEventListener("DOMContentLoaded", () => {
//   const modeButtons = document.querySelectorAll(".mode-options span");
//   const iframe = document.querySelector(".iframe-section4");

//   modeButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//       const mode = button.dataset.mode;
//       iframe.src = `./projects.html?theme=${mode}`;
//     });
//   });
// });
// </script>
// <script>
// document.addEventListener("DOMContentLoaded", () => {
//   const modeButtons = document.querySelectorAll(".mode-options span");
//   const iframe = document.querySelector(".iframe-section6");

//   modeButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//       const mode = button.dataset.mode;
//       iframe.src = `./about.html?theme=${mode}`;
//     });
//   });
// });
// </script>
// <script>
// document.addEventListener("DOMContentLoaded", () => {
//   const modeButtons = document.querySelectorAll(".mode-options span");
//   const iframe = document.querySelector(".iframe-section5");

//   modeButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//       const mode = button.dataset.mode;
//       iframe.src = `./publication.html?theme=${mode}`;
//     });
//   });
// });
// </script>
// <script>
// document.addEventListener("DOMContentLoaded", () => {
//   gsap.registerPlugin(ScrollTrigger);
//   gsap.registerPlugin(ScrollToPlugin);
//   const container = document.querySelector(".container");
//   const sections = gsap.utils.toArray("section");
//   const emailLink = document.querySelector(".email-link");
//   const modeOptions = document.querySelector(".mode-options");
//   const modeButtons = document.querySelectorAll(".mode-options span");
//   const verticalSection = document.querySelector(".section-5");
//   const iframes = document.querySelectorAll("iframe");
//   let currentMode = "dark";
 
//   // Theme switching functionality
//   modeButtons.forEach((button) => {
//     button.addEventListener("mouseenter", () => {
//       const mode = button.dataset.mode;
//       document.body.className = `${mode}-mode`;
//     });

//     button.addEventListener("mouseleave", () => {
//       document.body.className = `${currentMode}-mode`;
//     });

//     button.addEventListener("click", () => {
//       currentMode = button.dataset.mode;
//       document.body.className = `${currentMode}-mode`;

//     });
//   });


//   // Update just the scrollTween configuration
//   const scrollTween = gsap.to(container, {
//     x: () =>
//       -(container.scrollWidth - document.documentElement.clientWidth),
//     ease: "power2.out", // Changed for smoother movement
//     scrollTrigger: {
//       trigger: container,
//       pin: true,
//       scrub: 1.5, // Increased from 1 for smoother scrolling
//       end: () => "+=" + container.offsetWidth,
//       invalidateOnRefresh: true,
//     },
//   });
//   verticalSection.addEventListener("wheel", (event) => {
//     const isAtTop = verticalSection.scrollTop === 0;
//     const isAtBottom =
//       verticalSection.scrollHeight - verticalSection.scrollTop ===
//       verticalSection.clientHeight;

//     // Check if user is at the top or bottom of the vertical section
//     if ((event.deltaY < 0 && isAtTop) || (event.deltaY > 0 && isAtBottom)) {
//       event.preventDefault(); // Prevent default scroll behavior

//       // Trigger horizontal scrolling based on the direction
//       gsap.to(container, {
//         scrollTo: {
//           x: isAtBottom
//             ? container.scrollLeft + container.clientWidth // Move right
//             : container.scrollLeft - container.clientWidth, // Move left
//         },
//         duration: 1,
//         ease: "power2.inOut",
//       });
//     }
//   });
//   // Function to update navigation content
//   function updateNavContent(sectionIndex) {
//     if (sectionIndex === 0) {
//       emailLink.style.display = "block";
//       modeOptions.style.display = "none";
//     } else {
//       emailLink.style.display = "none";
//       modeOptions.style.display = "flex";
//     }
//   }

//   // Function to check section visibility
//   function getSectionVisibility(section) {
//     const bounds = section.getBoundingClientRect();
//     const windowWidth = window.innerWidth;
//     const visibleWidth =
//       Math.min(bounds.right, windowWidth) - Math.max(bounds.left, 0);
//     return visibleWidth / windowWidth;
//   }

//   // Update just the snapToSection function
//   function snapToSection(index) {
//     const progress =
//       (index / (sections.length - 1)) *
//       (container.scrollWidth - document.documentElement.clientWidth);

//     gsap.to(window, {
//       scrollTo: {
//         x: progress,
//       },
//       duration: 0.8, // Increased from 0.2 for smoother transition
//       ease: "power2.inOut",
//       onComplete: () => updateNavContent(index),
//     });
//   }

//   // Create scroll triggers for each section
//   sections.forEach((section, i) => {
//     ScrollTrigger.create({
//       trigger: section,
//       start: "left center",
//       end: "right center",
//       horizontal: true,
//       onEnter: () => {
//         if (getSectionVisibility(section) >= 0.75) {
//           snapToSection(i);
//         }
//       },
//       onEnterBack: () => {
//         if (getSectionVisibility(section) >= 0.75) {
//           snapToSection(i);
//         }
//       },
//       onUpdate: (self) => {
//         if (getSectionVisibility(section) >= 0.75) {
//           updateNavContent(i);
//         }
//       },
//     });
//   });

//   // Add scroll event listener for continuous checking
//   window.addEventListener(
//     "scroll",
//     () => {
//       sections.forEach((section, i) => {
//         if (getSectionVisibility(section) >= 0.75) {
//           snapToSection(i);
//         }
//       });
//     },
//     { passive: true }
//   );

//   // Initial check for visible section
//   window.addEventListener("load", () => {
//     sections.forEach((section, i) => {
//       if (getSectionVisibility(section) >= 0.75) {
//         updateNavContent(i);
//       }
//     });
//     // Set initial theme
//     document.body.className = `${currentMode}-mode`;
//   });
// });
// </script> -->