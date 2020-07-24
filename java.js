var name,pass;
var name="deepakdeedar",pass1=12345678;
        $(document).ready(function(){
            $("#log").click(function(){
        name=document.getElementById("user").value;
                pass=document.getElementById("pwd").value;
                if(name=='deepakdeedar' && pass==12345678)
                    {
                        window.open("home.html");
                        window.close("firstpage.html");
                    }
                else if(name!='deepakdeedar')
                    {
                        alert("Username Not Found");
                    }
                else
                    {
                        alert("Password Incorrect");
                    }
            });
        });