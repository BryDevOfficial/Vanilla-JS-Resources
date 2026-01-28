<style>
  /* Truncate inner content inside each container */
  .truncatecontainer1 .elementor-widget-container,
  .truncatecontainer2 .elementor-widget-container,
  .truncatecontainer3 .elementor-widget-container,
  .truncatecontainer4 .elementor-widget-container,
  .truncatecontainer5 .elementor-widget-container,
  .truncatecontainer6 .elementor-widget-container,
  .truncatecontainer7 .elementor-widget-container,
  .truncatecontainer8 .elementor-widget-container,
  .truncatecontainer9 .elementor-widget-container,
  .truncatecontainer10 .elementor-widget-container,
  .truncatecontainer11 .elementor-widget-container,
  .truncatecontainer12 .elementor-widget-container,
  .truncatecontainer13 .elementor-widget-container,
  .truncatecontainer14 .elementor-widget-container,
  .truncatecontainer15 .elementor-widget-container,
  .truncatecontainer16 .elementor-widget-container,
  .truncatecontainer17 .elementor-widget-container {
    overflow: hidden;
    max-height: 60px;
    transition: max-height 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  /* Expanded state */
  .truncatecontainer1.expanded .elementor-widget-container,
  .truncatecontainer2.expanded .elementor-widget-container,
  .truncatecontainer3.expanded .elementor-widget-container,
  .truncatecontainer4.expanded .elementor-widget-container,
  .truncatecontainer5.expanded .elementor-widget-container,
  .truncatecontainer6.expanded .elementor-widget-container,
  .truncatecontainer7.expanded .elementor-widget-container,
  .truncatecontainer8.expanded .elementor-widget-container,
  .truncatecontainer9.expanded .elementor-widget-container,
  .truncatecontainer10.expanded .elementor-widget-container,
  .truncatecontainer11.expanded .elementor-widget-container,
  .truncatecontainer12.expanded .elementor-widget-container,
  .truncatecontainer13.expanded .elementor-widget-container,
  .truncatecontainer14.expanded .elementor-widget-container,
  .truncatecontainer15.expanded .elementor-widget-container,
  .truncatecontainer16.expanded .elementor-widget-container,
  .truncatecontainer17.expanded .elementor-widget-container {
    max-height: none;
  }

  /* Read more buttons */
  .readmorelessbg-btn1,
  .readmorelessbg-btn2,
  .readmorelessbg-btn3,
  .readmorelessbg-btn4,
  .readmorelessbg-btn5,
  .readmorelessbg-btn6,
  .readmorelessbg-btn7,
  .readmorelessbg-btn8,
  .readmorelessbg-btn9,
  .readmorelessbg-btn10,
  .readmorelessbg-btn11,
  .readmorelessbg-btn12,
  .readmorelessbg-btn13,
  .readmorelessbg-btn14,
  .readmorelessbg-btn15,
  .readmorelessbg-btn16,
  .readmorelessbg-btn17 {
    display: inline-block;
    cursor: pointer;
    transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  for (let i = 1; i <= 17; i++) {
    const btn = document.querySelector('.readmorelessbg-btn' + i);
    const box = document.querySelector('.truncatecontainer' + i);

    if (!btn || !box) continue;

    btn.addEventListener('click', function(event) {
      event.preventDefault();
      box.classList.toggle('expanded');
      btn.textContent = box.classList.contains('expanded')
        ? 'Show less'
        : 'Read more';
    });
  }
});

</script>
