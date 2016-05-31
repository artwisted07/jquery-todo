(function ($) {

  var url ="list.json";
  
  $.getJSON(url + '/posts', function(data){
  
      var items = [];
     
    });
 

  

  $.fn.greenify = function (options) {

    this.each(function () {

      var settings = $.extend({
        link: $(this),
        color: "red"
      }, options);

      //HIDE FUNCTION
      var hide = function (e) {
        e.preventDefault()
        settings.link.detach();
        console.log(settings.link);
      }

      settings.link.css("color", settings.color);
      settings.link.on('click.greenify', hide);
    })



  }

  $('button').greenify()




})(jQuery)


