// used in _includes/masthead.html
// duplicate menu to avoid rebuild js min
$(document).ready(function() {
    const clonedElement = $('#yyw_menu_items').clone();
    $('#duplicate_menu_2').append(clonedElement);
});