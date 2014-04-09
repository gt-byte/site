var invite_email = "";

$(document).ready(function() {
        fixHeaderHeight();

        $('#submit-button').click(function(){
                var email_field = document.getElementById("input-email");
                var value =  email_field.form.email.value;
                submit(value);
                ///};
        });
});


function submit(email){
        $.ajax({
                url: 'http://ec2-54-211-14-37.compute-1.amazonaws.com/insertEmail.php', 
                type: 'post',
                data: {"email":email},
                success: function(data, success) {
                        showResponse(data);
                },
                error: function (error) {
                        var response = "Error:" + error.Message;
                        document.getElementById("server-response").innerHTML = response;
                }
        });
}

function showResponse(data){
        //data = parseInt(data);
        alert(typeof data);
        alert(data);
        if(data==="1"){
                var response = "<br>You will be notified when Byte is up and running! <br>" + "In the mean time, invite your friends:<br>";
                document.getElementById("server-response").innerHTML = response ; //+ "<br>"+ data;
                document.getElementById("server-response").style.color = "#59E817" ;
                showShare();
        }else if(data==='2'){
                var response = "<br>This email is already registered! <br>" + "In the mean time, invite your friends:<br>";
                document.getElementById("server-response").innerHTML = response ;// + "<br>" + data;
                document.getElementById("server-response").style.color = "#59E817";

        }else{
                var response = "<br>This email is not valid! <br>" + "Please enter a valid email address.<br>";
                document.getElementById("server-response").innerHTML = response; //+ "<br>"  + data;
                document.getElementById("server-response").style.color = "#F70D1A";
        }
        fixHeaderHeight();
}       

function showShare(){

}


function fixHeaderHeight(){
        var offset = $(window).height()- document.getElementById("header").offsetHeight;
        document.getElementById("header").style.minHeight = document.getElementById("header").offsetHeight + offset + "px";
}


