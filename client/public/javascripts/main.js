// Create a closure
(function ($) {
  "use strict"; // Start of use strict

  $(document).ready(function () {

    // For mainNav:

    $('.image-container').find('img').each(function () {
      var imgClass = (this.width / this.height > 1) ? 'wide' : 'tall';
      $(this).addClass(imgClass);
    })

    $('[data-toggle="tooltip"]').tooltip();
  });

})(jQuery); // End of use strict
