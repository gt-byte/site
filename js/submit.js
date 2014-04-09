var invite_email = "";

$(document).ready(function() {
        fixHeaderHeight();

        $('#submit-button').click(function(){
                var email_field = document.getElementById("input-email");
                var value =  email_field.form.email.value;
                submit(value);
        });
        $('#input-email').keypress(function(e){
                if(e.keyCode == 13){
                        var email_field = document.getElementById("input-email");
                        var value =  email_field.form.email.value;
                        submit(value);
                }     
        });

});


function submit(email){
        $.ajax({
                url: 'php/insertEmail.php', //url: 'http://datbyte.com/insertEmail.php',
                type: 'post',
                data: {"email":email},
                success: function(data, success) {
                        showResponse(data);
                },
                error: function (error) {
                        showResponse(-1);
                }
        });
}

function showResponse(data){
        if(data==='1'){
                var response = "<br>You will be notified when Byte is up and running! <br>" + "In the mean time, invite your friends.";
                document.getElementById("server-response").innerHTML = response ; //+ "<br>"+ data;
                document.getElementById("server-response").style.color = "#59E817" ;
                //showShareLink();
        }else if(data==='2'){
                var response = "<br>This email is already registered! <br>" + "In the mean time, invite your friends.";
                document.getElementById("server-response").innerHTML = response ;// + "<br>" + data;
                document.getElementById("server-response").style.color = "#59E817";
                //showShareLink();
        }else if(data==='0'){
                var response = "<br>This email is not valid! <br>" + "Please enter a valid email address.";
                document.getElementById("server-response").innerHTML = response; //+ "<br>"  + data;
                document.getElementById("server-response").style.color = "#F70D1A";
        }else{
                var response = "<br>Error connecting to server! <br>" + "Please try again in a bit.";
                document.getElementById("server-response").innerHTML = response; //+ "<br>"  + data;
                document.getElementById("server-response").style.color = "#FDD017";
        }
        fixHeaderHeight();
        scrollToResponse();
}      

function showShareLink(){
        document.getElementById("share-link").innerHTML = "www.datbyte.com"; //+ "<br>"  + data;
        document.getElementById("share-link").style.color = "#1F45FC";
}

function fixHeaderHeight(){
        var offset = $(window).height()- document.getElementById("header").offsetHeight;
        document.getElementById("header").style.minHeight = document.getElementById("header").offsetHeight + offset + "px";
}

function scrollToResponse(){
        var offset = document.getElementById("header").offsetHeight - $(window).height();
        if(offset > 0){
                $('html, body').animate({
                        scrollTop: offset,
                        scrollLeft: 0
                }, 600);
        }
}
