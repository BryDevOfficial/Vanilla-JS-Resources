<style>
    .readmorelessbg-btn, .readmorelessbg-btn1, .readmorelessbg-btn2, .readmorelessbg-btn3, .readmorelessbg-btn4, .readmorelessbg-btn5, .readmorelessbg-btn6, .readmorelessbg-btn7, .readmorelessbg-btn8, .readmorelessbg-btn9, .readmorelessbg-btn10, .readmorelessbg-btn11, .readmorelessbg-btn12, .readmorelessbg-btn13, .readmorelessbg-btn14, .readmorelessbg-btn15, .readmorelessbg-btn16, .readmorelessbg-btn17{
        display: inline-block;
        /*transition: all 0.4s ease;*/
        transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
        cursor: pointer; /* Added cursor pointer for better UX */
    }
    .truncatecontainer, .truncatecontainer1, .truncatecontainer2, .truncatecontainer3, .truncatecontainer4, .truncatecontainer5, .truncatecontainer6, 
    .truncatecontainer7, .truncatecontainer8, .truncatecontainer9, .truncatecontainer10, .truncatecontainer11, .truncatecontainer12, .truncatecontainer13, .truncatecontainer14, .truncatecontainer15,.truncatecontainer16, .truncatecontainer17{
        position: relative;
        overflow: hidden;
        max-height: 60px;
        transition: max-height 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
        
    }
    
    /* Fade overlay */ 
    .truncatecontainer1::after, .truncatecontainer2::after, .truncatecontainer3::after, .truncatecontainer4::after, .truncatecontainer5::after, .truncatecontainer6::after, .truncatecontainer7::after, .truncatecontainer8::after, .truncatecontainer9::after, .truncatecontainer10::after, .truncatecontainer11::after, .truncatecontainer12::after, .truncatecontainer13::after, .truncatecontainer14::after, .truncatecontainer15::after, .truncatecontainer16::after, .truncatecontainer17::after { 
        content: ""; 
        position: absolute; 
        bottom: 0; left: 0; 
        width: 100%; 
        height: 40px; /* fade height */ 
        background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1)); 
        pointer-events: none; transition: 
        opacity 0.3s ease; 
        
    }
    
    
    .truncatecontainer.expanded,
    .truncatecontainer1.expanded, 
    .truncatecontainer2.expanded,
    .truncatecontainer3.expanded,
    .truncatecontainer4.expanded,
    .truncatecontainer5.expanded,
    .truncatecontainer6.expanded,
    .truncatecontainer7.expanded,
    .truncatecontainer8.expanded,
    .truncatecontainer9.expanded,
    .truncatecontainer10.expanded,
    .truncatecontainer11.expanded,
    .truncatecontainer12.expanded,
    .truncatecontainer13.expanded,
    .truncatecontainer14.expanded,
    .truncatecontainer15.expanded,
    .truncatecontainer16.expanded,
    .truncatecontainer17.expanded {
        max-height: 2000px;
    }
    
    /* Hide fade when expanded */ .truncatecontainer1.expanded::after, .truncatecontainer2.expanded::after, .truncatecontainer3.expanded::after, .truncatecontainer4.expanded::after, .truncatecontainer5.expanded::after, .truncatecontainer6.expanded::after, .truncatecontainer7.expanded::after, .truncatecontainer8.expanded::after, .truncatecontainer9.expanded::after, .truncatecontainer10.expanded::after, .truncatecontainer11.expanded::after, .truncatecontainer12.expanded::after, .truncatecontainer13.expanded::after, .truncatecontainer14.expanded::after, .truncatecontainer15.expanded::after, .truncatecontainer16.expanded::after, .truncatecontainer17.expanded::after { opacity: 0; }
</style>

    <script> 
    document.addEventListener('DOMContentLoaded', function() {

  // Wait for Elementor to finish rendering widgets
  jQuery(window).on('elementor/frontend/init', function() {

    for (let i = 1; i <= 17; i++) {
      const readMoreLink = document.querySelector('.readmorelessbg-btn' + i);
      const truncateContainerTxt = document.querySelector('.truncatecontainer' + i);

      if (!readMoreLink || !truncateContainerTxt) continue;

      readMoreLink.addEventListener('click', function(event) {
        event.preventDefault();

        truncateContainerTxt.classList.toggle('expanded');

        readMoreLink.textContent = truncateContainerTxt.classList.contains('expanded')
          ? 'Show less'
          : 'Read more';
      });
    }

  });

});

    </script>
