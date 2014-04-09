var invite_email = "";

$(document).ready(function() {
        var offset = $(window).height()- document.getElementById("header").offsetHeight;
        document.getElementById("header").style.minHeight = document.getElementById("header").offsetHeight + offset + "px";

        $('#submit-button').click(function(){
                var email_field = document.getElementById("input-email");
                var value =  email_field.form.email.value;
                submit(value);
                ///};
        });
});


function submit(email){
        $.ajax({
                url: 'http://ec2-54-211-14-37.compute-1.amazonaws.com/insertEmail.php', // name of script which sends the mail
                type: 'post',
                data: {"email":email},
                success: function(data, success) {
                        //alert(data);
                        showResponse(data);
                },
                error: function (error) {
                        var response = "error:" + error.Message;
                        document.getElementById("server-response").innerHTML = response;
                }
        });
}

function showResponse(data){
        var response = "<br>You will be notified when Byte is up and running! <br>" + "In the mean time, invite your friends:<br>";
        document.getElementById("server-response").innerHTML = response + "<br>" + data;
}







