$(document).ready(function() {
        fixHeaderHeight();
        $('#submit-button').click(function(){
                var email_field = document.getElementById("input-email");
                var value =  email_field.value;
                submit(value);
        });
        $('#input-email').keypress(function(e){
                if(e.keyCode == 13){
                        var email_field = document.getElementById("input-email");
                        //var value =  email_field.form.email.value;
                        var value = email_field.value;
                        //alert(value);
                        submit(value);
                }
        });
        $('#down-arrow-holder').click(function(){
                var targetsection = document.getElementById("section-1");
                var window_offset = $(targetsection).offset().top;// - $(window).scrollTop();
                $('html, body').animate({
                        scrollTop: window_offset,
                        scrollLeft: 0
                }, 1000);

        });

});


function submit(email){
        $.ajax({
                url: 'php/insertEmail.php', 
                //url: 'http://datbyte.com/php/insertEmail.php',
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
                var response = "<span>You will be notified when Byte is up and running!  </span> In the mean time, <a href = \"http://www.facebook.com/sharer.php?u=http://www.datbyte.com\" onclick=\"window.open(this.href, 'Share Byte', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=1'); window.close(); return false;\"> <u><b><font color= \"#3B5999\">invite</font></b></u></a> your friends.";
                document.getElementById("beta-invite").innerHTML = response ; //+ "<br>"+ data;
                document.getElementById("beta-invite").style.color = "#41A317" ;
                //showShareLink();
        }else if(data==='2'){
                var response = " <span> This email is already registered!  </span>  In the mean time, <a href = \"http://www.facebook.com/sharer.php?u=http://www.datbyte.com\" onclick=\"window.open(this.href, 'Share Byte', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=1'); window.close(); return false;\"> <u><b><font color= \"#3B5999\">invite</font></b></u></a> your friends.";
                document.getElementById("beta-invite").innerHTML = response ;// + "<br>" + data;
                document.getElementById("beta-invite").style.color = "#41A317";
        }else if(data==='0'){
                var response = " <span> This email is not valid! </span> <span> Please enter a valid email address. </span>";
                document.getElementById("beta-invite").innerHTML = response; //+ "<br>"  + data;
                document.getElementById("beta-invite").style.color = "#F70D1A";
        }else{
                var response = " <span> Error connecting to server! </span> <span>Please try again in a bit.</span>";
                document.getElementById("beta-invite").innerHTML = response; //+ "<br>"  + data;
                document.getElementById("beta-invite").style.color = "#F70D1A";
        }
        fixHeaderHeight();
        scrollToResponse();
}      

function showShareLink(){
        document.getElementById("share-link").innerHTML = "www.datbyte.com"; //+ "<br>"  + data;
        document.getElementById("share-link").style.color = "#1F45FC";
}

function fixHeaderHeight(){
        var offset =  $(window).height() - document.getElementById("header").offsetHeight;
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
