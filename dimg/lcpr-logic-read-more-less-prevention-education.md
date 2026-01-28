<style>
    .readmorelessbg-btn, .readmorelessbg-btn1, .readmorelessbg-btn2, .readmorelessbg-btn3, .readmorelessbg-btn4, .readmorelessbg-btn5, .readmorelessbg-btn6, .readmorelessbg-btn7, .readmorelessbg-btn8, .readmorelessbg-btn9, .readmorelessbg-btn10, .readmorelessbg-btn11, .readmorelessbg-btn12, .readmorelessbg-btn13, .readmorelessbg-btn14, .readmorelessbg-btn15, .readmorelessbg-btn16, .readmorelessbg-btn17{
        display: inline-block;
        /*transition: all 0.4s ease;*/
        transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
        cursor: pointer; /* Added cursor pointer for better UX */
    }
    .truncatecontainer, .truncatecontainer1, .truncatecontainer2, .truncatecontainer3, .truncatecontainer4, .truncatecontainer5, .truncatecontainer6, 
    .truncatecontainer7, .truncatecontainer8, .truncatecontainer9, .truncatecontainer10, .truncatecontainer11, .truncatecontainer12, .truncatecontainer13, .truncatecontainer14, .truncatecontainer15,.truncatecontainer16, .truncatecontainer17{
        overflow: hidden;
        max-height: 60px;
       /* transition: max-height 0.4s ease; /* Added transition for smooth expansion */
         transition: max-height 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
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
        max-height: none; /* Changed 'auto' to 'none' for better compatibility */
    }
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
