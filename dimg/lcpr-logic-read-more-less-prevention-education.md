<style>
    /* Buttons */
.readmorelessbg-btn,
.readmorelessbg-btn1, .readmorelessbg-btn2, .readmorelessbg-btn3, .readmorelessbg-btn4,
.readmorelessbg-btn5, .readmorelessbg-btn6, .readmorelessbg-btn7, .readmorelessbg-btn8,
.readmorelessbg-btn9, .readmorelessbg-btn10, .readmorelessbg-btn11, .readmorelessbg-btn12,
.readmorelessbg-btn13, .readmorelessbg-btn14, .readmorelessbg-btn15, .readmorelessbg-btn16,
.readmorelessbg-btn17 {
    display: inline-block;
    cursor: pointer;
    transition: color 0.3s ease;
}

/* Base arrow */ .readmorelessbg-btn::after, .readmorelessbg-btn1::after, .readmorelessbg-btn2::after, .readmorelessbg-btn3::after, .readmorelessbg-btn4::after, .readmorelessbg-btn5::after, .readmorelessbg-btn6::after, .readmorelessbg-btn7::after, .readmorelessbg-btn8::after, .readmorelessbg-btn9::after, .readmorelessbg-btn10::after, .readmorelessbg-btn11::after, .readmorelessbg-btn12::after, .readmorelessbg-btn13::after, .readmorelessbg-btn14::after, .readmorelessbg-btn15::after, .readmorelessbg-btn16::after, .readmorelessbg-btn17::after { 
    content: "▾"; /* down arrow */ 
    display: inline-block; 
    margin-left: 6px; 
    transition: transform 0.3s ease; 
    font-size: 0.9em; }

/* Truncated containers */
.truncatecontainer,
.truncatecontainer1, .truncatecontainer2, .truncatecontainer3, .truncatecontainer4,
.truncatecontainer5, .truncatecontainer6, .truncatecontainer7, .truncatecontainer8,
.truncatecontainer9, .truncatecontainer10, .truncatecontainer11, .truncatecontainer12,
.truncatecontainer13, .truncatecontainer14, .truncatecontainer15, .truncatecontainer16,
.truncatecontainer17 {
    position: relative;
    overflow: hidden;
    max-height: 60px;
    transition: max-height 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* Fade overlay */
.truncatecontainer::after,
.truncatecontainer1::after, .truncatecontainer2::after, .truncatecontainer3::after,
.truncatecontainer4::after, .truncatecontainer5::after, .truncatecontainer6::after,
.truncatecontainer7::after, .truncatecontainer8::after, .truncatecontainer9::after,
.truncatecontainer10::after, .truncatecontainer11::after, .truncatecontainer12::after,
.truncatecontainer13::after, .truncatecontainer14::after, .truncatecontainer15::after,
.truncatecontainer16::after, .truncatecontainer17::after {
    content: "";
    position: absolute;
    bottom: 0; left: 0;
    width: 100%;
    height: 40px;
    background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1));
    pointer-events: none;
    transition: opacity 0.3s ease;
}

/* Expanded state */
.truncatecontainer.expanded,
.truncatecontainer1.expanded, .truncatecontainer2.expanded, .truncatecontainer3.expanded,
.truncatecontainer4.expanded, .truncatecontainer5.expanded, .truncatecontainer6.expanded,
.truncatecontainer7.expanded, .truncatecontainer8.expanded, .truncatecontainer9.expanded,
.truncatecontainer10.expanded, .truncatecontainer11.expanded, .truncatecontainer12.expanded,
.truncatecontainer13.expanded, .truncatecontainer14.expanded, .truncatecontainer15.expanded,
.truncatecontainer16.expanded, .truncatecontainer17.expanded {
    max-height: 2000px;
}

/* Arrow when button is in expanded state */
.readmorelessbg-btn.expanded::after,
.readmorelessbg-btn1.expanded::after, .readmorelessbg-btn2.expanded::after, .readmorelessbg-btn3.expanded::after,
.readmorelessbg-btn4.expanded::after, .readmorelessbg-btn5.expanded::after, .readmorelessbg-btn6.expanded::after,
.readmorelessbg-btn7.expanded::after, .readmorelessbg-btn8.expanded::after, .readmorelessbg-btn9.expanded::after,
.readmorelessbg-btn10.expanded::after, .readmorelessbg-btn11.expanded::after, .readmorelessbg-btn12.expanded::after,
.readmorelessbg-btn13.expanded::after, .readmorelessbg-btn14.expanded::after, .readmorelessbg-btn15.expanded::after,
.readmorelessbg-btn16.expanded::after, .readmorelessbg-btn17.expanded::after {
    transform: rotate(180deg);
}


/* Hide fade when expanded */
.truncatecontainer.expanded::after,
.truncatecontainer1.expanded::after, .truncatecontainer2.expanded::after,
.truncatecontainer3.expanded::after, .truncatecontainer4.expanded::after,
.truncatecontainer5.expanded::after, .truncatecontainer6.expanded::after,
.truncatecontainer7.expanded::after, .truncatecontainer8.expanded::after,
.truncatecontainer9.expanded::after, .truncatecontainer10.expanded::after,
.truncatecontainer11.expanded::after, .truncatecontainer12.expanded::after,
.truncatecontainer13.expanded::after, .truncatecontainer14.expanded::after,
.truncatecontainer15.expanded::after, .truncatecontainer16.expanded::after,
.truncatecontainer17.expanded::after {
    opacity: 0;
}

/* Smooth fade + slide for inner text */
.truncatecontainer .elementor-widget-container,
.truncatecontainer1 .elementor-widget-container, .truncatecontainer2 .elementor-widget-container,
.truncatecontainer3 .elementor-widget-container, .truncatecontainer4 .elementor-widget-container,
.truncatecontainer5 .elementor-widget-container, .truncatecontainer6 .elementor-widget-container,
.truncatecontainer7 .elementor-widget-container, .truncatecontainer8 .elementor-widget-container,
.truncatecontainer9 .elementor-widget-container, .truncatecontainer10 .elementor-widget-container,
.truncatecontainer11 .elementor-widget-container, .truncatecontainer12 .elementor-widget-container,
.truncatecontainer13 .elementor-widget-container, .truncatecontainer14 .elementor-widget-container,
.truncatecontainer15 .elementor-widget-container, .truncatecontainer16 .elementor-widget-container,
.truncatecontainer17 .elementor-widget-container {
    opacity: 0.85;
    transform: translateY(4px);
    transition: opacity 0.35s ease, transform 0.35s ease;
}

.truncatecontainer.expanded .elementor-widget-container,
.truncatecontainer1.expanded .elementor-widget-container, .truncatecontainer2.expanded .elementor-widget-container,
.truncatecontainer3.expanded .elementor-widget-container, .truncatecontainer4.expanded .elementor-widget-container,
.truncatecontainer5.expanded .elementor-widget-container, .truncatecontainer6.expanded .elementor-widget-container,
.truncatecontainer7.expanded .elementor-widget-container, .truncatecontainer8.expanded .elementor-widget-container,
.truncatecontainer9.expanded .elementor-widget-container, .truncatecontainer10.expanded .elementor-widget-container,
.truncatecontainer11.expanded .elementor-widget-container, .truncatecontainer12.expanded .elementor-widget-container,
.truncatecontainer13.expanded .elementor-widget-container, .truncatecontainer14.expanded .elementor-widget-container,
.truncatecontainer15.expanded .elementor-widget-container, .truncatecontainer16.expanded .elementor-widget-container,
.truncatecontainer17.expanded .elementor-widget-container {
    opacity: 1;
    transform: translateY(0);
}

</style>

    <script> 
    document.addEventListener('DOMContentLoaded', function() {

  // Wait for Elementor to finish rendering widgets
  jQuery(window).on('elementor/frontend/init', function() {

  for (let i = 1; i <= 17; i++) { const readMoreLink = document.querySelector('.readmorelessbg-btn' + i); const truncateContainerTxt = document.querySelector('.truncatecontainer' + i); if (!readMoreLink || !truncateContainerTxt) continue; readMoreLink.addEventListener('click', function(event) { event.preventDefault(); const isExpanded = truncateContainerTxt.classList.toggle('expanded'); readMoreLink.classList.toggle('expanded', isExpanded); readMoreLink.textContent = isExpanded ? 'Show less' : 'Read more'; }); }

  });

});

    </script>
