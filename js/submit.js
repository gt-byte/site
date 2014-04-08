var invite_email = "";

$(document).ready(function() {
        $('#submit-button').click(function(){
                var email_field = document.getElementById("input-email");
                var value =  email_field.form.email.value;
                submit(value);
                ///};
        });
});


function submit(email){
        $.ajax({
                url: 'http://localhost/email.php', // name of script which sends the mail
                type: 'post',
                data: {"email":email},
                success: function(data, success) {
                        //alert(data);
                        var response = data;
                        document.getElementById("server-response").innerHTML = response;
                },
                error: function (error) {
                        var response = "error:" + error.Message;
                        document.getElementById("server-response").innerHTML = response;
                }
        });
}
