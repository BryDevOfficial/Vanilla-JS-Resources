<style>
    /*
     * Any element whose class contains "readmorelessbg-btn"
     * will automatically be treated as a toggle button.
     * This covers:
     * - .readmorelessbg-btn
     * - .readmorelessbg-btn1
     * - .readmorelessbg-btn2
     * - ...
     * - .readmorelessbg-btn99 (future-proof)
     */
    [class*="readmorelessbg-btn"] {
        display: inline-block;
        cursor: pointer;
        transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    /*
     * Any element whose class contains "truncatecontainer"
     * will be treated as a collapsible content box.
     * This covers:
     * - .truncatecontainer
     * - .truncatecontainer1
     * - .truncatecontainer2
     * - ...
     * - .truncatecontainer99 (future-proof)
     */
    [class*="truncatecontainer"] {
        overflow: hidden;
        max-height: 60px;
        transition: max-height 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    /*
     * Expanded state — removes height limit.
     * Applies to ANY truncatecontainer variant.
     */
    [class*="truncatecontainer"].expanded {
        max-height: none;
    }
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {

    /*
     * Select ALL read-more buttons.
     * This automatically includes numbered and non-numbered versions.
     */
    const buttons = document.querySelectorAll('[class*="readmorelessbg-btn"]');

    /*
     * Select ALL truncate containers.
     * Again, includes numbered and non-numbered versions.
     */
    const containers = document.querySelectorAll('[class*="truncatecontainer"]');

    /*
     * Pair each button with the container of the same index.
     * Example:
     * buttons[0] → containers[0]
     * buttons[1] → containers[1]
     * buttons[2] → containers[2]
     *
     * This works perfectly in Elementor because each card
     * appears in the DOM in the same order.
     */
    buttons.forEach((btn, index) => {
        const box = containers[index];
        if (!box) return; // Safety check in case counts mismatch

        btn.addEventListener('click', function(event) {
            event.preventDefault();

            // Toggle expanded state
            box.classList.toggle('expanded');

            // Update button text
            btn.textContent = box.classList.contains('expanded')
                ? 'Show less'
                : 'Read more';
        });
    });
});
</script>
