

$(function(){
var textarea = $('#textarea');
var lat1 =$('#lat1');
var lng1 =$('#lng1');
var title =$('#title');
var photo =$('#photo');
$('#submit').on('click', function(){

    var object ={
      
        comment: textarea.val(),
        photo: photo.val(),
        title: title.val(),    
        location: {lat : lat1.val() , lng: lng1.val()}
    }

$.ajax({
type: 'POST',
url: 'http://localhost:3000/map',
data: object,
success: function(newObject){
   alert("Success!");
},
error: function(){
    alert('error saving order');
}
    });
});
});




$(function(){
var url1 = 'http://localhost:3000/user';
var username = $('#username');
var password = $('#password');
var email = $('#email');
var phone = $('#phone');
$('#submit1').on('click', function(){
    var object ={
          username: username.val(),
          password: password.val(),
          email: email.val(),
          phone: phone.val()
      }

      $.ajax({
        type: 'POST',
        url: url1,
        data: object,
        success: function(newObject){
           alert("Success!");
        },
        error: function(){
            alert('error saving order');
        }
            });
});
});

$(function(){
var id = $('#idd');

var url = 'http://localhost:3000/user/';
$("#delete").click(function () {
    $.ajax({
        type: 'DELETE',
        url: url+id.val(),// 2  is id you want to delete 
        success: function (data) {
            data.remove();
          alert('sucess');
        }
      })

    })
  });

  $(function(){
    
  var id = $('#idu');

  var username = $('#username');
  var password = $('#password');
  var email = $('#email');
  var phone = $('#phone');
  $("#update").click(function () {
     
          var object ={
              
                username: username.val(),
                password: password.val(),
                email: email.val(),    
               phone: phone.val()
            }
        $.ajax({
          url: "http://localhost:3000/user/"+id.val(),
          type: "PATCH",
          data: JSON.stringify(object),
          success: function (data) {
            alert('sucess');
           
          }
        })
    
    });




ons.ready(function () {

    initTimeline();
    
        var tabar = document.querySelector('ons-tabbar');
        tabar.addEventListener('postchange', function (event) {
            if (event.index == 0) {
                initTimeline(event);
            }
        });

});


function initTimeline(event) {
    
        var url = "http://localhost:3000/map";
        $.get(url, function (data) {
            $("#timetab").attr("badge", data.length);
            $.each(data, function (index, item) {
                $.get('card.html', function (template) {
                    var rendered = Mustache.render(template, item);
                    $("#pins").append(rendered);
                });
            });
        });
    }
  });
