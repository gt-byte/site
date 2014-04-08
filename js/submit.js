

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
                        alert(data);
                        document.write("worked:" + email);
                },
                error: function (error) {
                        document.write(error.Message);
                }
        });
}
