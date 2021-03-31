document.getElementById("h1").style.color = "red";
document.getElementById("h1").style.fontFamily = "Tahoma,sans-serif";
document.getElementById("h1").style.textAlign = "center";

document.getElementById("h2").style.color = "red";
document.getElementById("h2").style.fontFamily = "Garamond,sans-serif";
document.getElementById("h2").style.textAlign = "center";
document.getElementById("h2").style.fontStyle = "italic";

document.getElementById("br").style.textAlign = "center";

var name = document.getElementById("name").value;
var address = document.getElementById("address").value;
var phone = document.getElementById("phone").value;
var email = document.getElementById("email").value;
var personal = document.getElementById("personal").value;
var career = document.getElementById("career").value;
var education = document.getElementById("education").value;
var employ1 = document.getElementById("employ1").value;
var date1 = document.getElementById("myDate1").value;
var date2 = document.getElementById("myDate2").value;
var employ2 = document.getElementById("employ2").value;
var date3 = document.getElementById("myDate3").value;
var date4 = document.getElementById("myDate4").value;
var employ3 = document.getElementById("employ3").value;
var date5 = document.getElementById("myDate5").value;
var date6 = document.getElementById("myDate6").value;
var employ4 = document.getElementById("employ4").value;
var date7 = document.getElementById("myDate7").value;
var date8 = document.getElementById("myDate8").value;
var pref = document.getElementById("preference").value;
var bref = document.getElementById("breference").value;

function create() {    
    hc = ('<html>\n<head>\n<title>Welcome</title>\n<link rel="stylesheet" type="text/css" href="style.css" />\n<link href="https://fonts.googleapis.com/css?family=Comfortaa|Righteous" rel="stylesheet">\n<body>\n');
    
    if (email.includes("@") != true)
    {
       alert("Please enter valid email address!");                
    }
    else
    {
        hc += ('<h3>' + name + '</h3>\n<p>' + address + ' / ' + phone + '</p>\n');
        hc += ('<hr id="line" color="black" size="5" width="513px">\n');
        hc += ('<p id="left">CAREER\nOBJECTIVES</p>\n<p id="right">' + career + '</p>\n');
        hc += ('<p id="left">PERSONAL\nDATA</p>\n<p id="right">' + personal + '</p>\n');
        hc += ('<p id="left">EDUCATION</p>\n<p id="right">' + education + '</p>\n');
        hc += ('<p id="left">EMPLOYMENT\nEXPERIENCE</p>\n');
        hc += ('<p id="left">' + date1 + ' - ' + date2 + '</p>\n<p id="right">' + employ1 + '</p>');
        hc += ('<p id="left">' + date3 + ' - ' + date4 + '</p>\n<p id="right">' + employ2 + '</p>');
        hc += ('<p id="left">' + date5 + ' - ' + date6 + '</p>\n<p id="right">' + employ3 + '</p>');
        hc += ('<p id="left">' + date7 + ' - ' + date8 + '</p>\n<p id="right">' + employ4 + '</p>');
        if (pref === "")
            {
                hc += ('<p id="left">CHARACTER\nREFERENCE</p>\n<p id="right">Upon Request</p>');
            }
        else{
                hc += ('<p id="left">CHARACTER\nREFERENCE</p>\n<p id="right">' + pref + '</p>');    
            }

        if (bref === "")
            {
                hc += ('<p id="left">BUSINESS\nREFERENCE</p>\n<p id="right">Upon Request</p>');
            }
        else{
                hc += ('<p id="left">BUSINESS\nREFERENCE</p>\n<p id="right">' + bref + '</p>');    
            }    

        hc += ("</body>\n</html>"); 


        var flyWindow = window.open('about:blank','myPop','width=550,height=1000,left=200,top=200');
        flyWindow.document.write(hc);        
    }
    
}
