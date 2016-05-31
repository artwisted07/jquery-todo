(function ($) {

  $.fn.checkit = function () {

    this.each(function () {
      var item = $(this);
      console.log(item)
      //CHECKBOX:CHECKED FUNCTION
      var checkState = function () {

        if (item.find('input[type="checkbox"]').is(":checked")) {
          item.append("<button class='remove'>X</button>")
        } else {
          item.find('.remove').remove();
        }

      }

      // REMOVE TASK FUNCTION
      var removeIt = function (e) {
        e.preventDefault();
        item.remove();
        checkAmount();
      }

      item.on('click', 'button.remove', removeIt); // -- remove selected li
      item.on('change', 'input[type="checkbox"]', checkState); // -- keeping track of checkbox interaction on li


    })
  }

  var taskInput = $('input[name="task"]');

  
  //APPEND THE TASK IF THERE IS TEXT IN THE FIELD
  var addTask = function (e) {
    e.preventDefault();
    if (taskInput.val() != "") {
      $("ul#tasks").append("<li class='task-item'><label><input type='checkbox'>" + taskInput.val() + "</label></li>");
      $('li.task-item').checkit();
      taskInput.val("");
      taskInput.css("border", "none").attr("placeholder", "ADD TASK");
      checkAmount();
    } else {
      taskInput.css("border", "3px solid red").attr("placeholder", "PLEASE FILL OUT THIS FIELD");
    }
  }

  //CHECKING THE AMOUNT OF TASKS  
  function checkAmount() {
    var childrenA = $('ul#tasks').children().length;
    if (childrenA == 1) {
      $('ul#tasks p.add').slideDown();
    } else {
      $('ul#tasks p.add').hide();
    }
  }


  $('li.task-item').checkit();

  $('#submit').on('click', addTask);


})(jQuery)
