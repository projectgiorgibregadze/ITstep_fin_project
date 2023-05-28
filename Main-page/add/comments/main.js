$(document).ready(function() {
    $('.comment-form').submit(function(event) {
      event.preventDefault();
      
      var name = $('#nameInput').val();
      var comment = $('#commentInput').val();
      
      if (name && comment) {
        var currentDate = new Date().toLocaleDateString();
        var newComment = '<li class="comment"><div class="name">' + name + '</div><div class="date">' + currentDate + '</div><p>' + comment + '</p></li>';
        
        $('.comment-list').prepend(newComment);
        

        $('#nameInput').val('');
        $('#commentInput').val('');
      }
    });
  });