document.getElementById("h1").style.color = "red";
document.getElementById("h1").style.fontFamily = "Tahoma,sans-serif";
document.getElementById("h1").style.textAlign = "center";

document.getElementById("h2").style.color = "red";
document.getElementById("h2").style.fontFamily = "Garamond,sans-serif";
document.getElementById("h2").style.textAlign = "center";
document.getElementById("h2").style.fontStyle = "italic";

document.getElementById("br").style.textAlign = "center";

function create() {   
    
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var personal = document.getElementById("personal").value;
    var career = document.getElementById("career").value;
    var education = document.getElementById("education").value;
    var employ1 = document.getElementById("employ1").value;
    var sDate1 = document.getElementById("StartDate1").value;
    var eDate1 = document.getElementById("EndDate1").value;
    var employ2 = document.getElementById("employ2").value;
    var sDate2 = document.getElementById("StartDate2").value;
    var eDate2 = document.getElementById("EndDate2").value;
    var employ3 = document.getElementById("employ3").value;
    var sDate3 = document.getElementById("StartDate3").value;
    var eDate3 = document.getElementById("EndDate3").value;
    var employ4 = document.getElementById("employ4").value;
    var sDate4 = document.getElementById("StartDate4").value;
    var eDate4 = document.getElementById("EndDate4").value;
    var pRef = document.getElementById("pReference").value;
    var bRef = document.getElementById("bReference").value;
    
    if (name == '')
    {
        alert("Please enter your full name!");
    }
    else if (address == '')
    {
        alert("Please enter your address!");
    }
    else if (phone == '')
    {
        alert("Please enter your phone number!");
    }
    else if (email == '')
    {
        alert("Please enter your email address!");
    }
    else if (personal == '')
    {
        alert("Please enter your personal skills!");
    }
    else if (career == '')
    {
        alert("Please enter your career objectives!");
    }
    else if (education == '')
    {
        alert("Please enter your education experience!");
    }
    else if (employ1 == '')
    {
        alert("Please enter your employment experience!");
    }
    else if (sDate1 == '')
    {
        alert("Please enter start date for 1st employment!");
    }
    else if (eDate1 == '')
    {
        alert("Please enter end date for 1st employment!");
    }
    else if (employ2 == '')
    {
        alert("Please enter your employment experience!");
    }
    else if (sDate2 == '')
    {
        alert("Please enter start date for 2nd employment!");
    }
    else if (eDate2 == '')
    {
        alert("Please enter end date for 2nd employment!");
    }
    else if (employ3 == '')
    {
        alert("Please enter your employment experience!");
    }
    else if (sDate3 == '')
    {
        alert("Please enter start date for 3rd employment!");
    }
    else if (eDate3 == '')
    {
        alert("Please enter end date for 3rd employment!");
    }
    else if (employ4 == '')
    {
        alert("Please enter your employment experience!");
    }
    else if (sDate4 == '')
    {
        alert("Please enter start date for 4th employment!");
    }
    else if (eDate4 == '')
    {
        alert("Please enter end date for 4th employment!");
    }    
    else if ((isNaN(phone) == true) || ((phone.length < 10) || (phone.length > 10)))
    {        
       alert("Please enter valid phone number!");                
    }
    else if (email.includes("@") == false)
    {
       alert("Please enter valid email address!");
    }
    else
    {
        var hc = '';
        hc = ('<html>\n<head>\n<title>Welcome</title>\n<link rel="stylesheet" type="text/css" href="style.css" />\n<link href="https://fonts.googleapis.com/css?family=Comfortaa|Righteous" rel="stylesheet">\n<body>\n');

        hc += ('<h3>' + name + '</h3>\n<p>' + address + ' / ' + phone + '</p>\n<p>' + email + '</p>\n');
        hc += ('<hr id="line" color="black" size="5" width="513px">\n');
        hc += ('<p id="left">CAREER\nOBJECTIVES</p>\n<p id="right">' + career + '</p>\n');
        hc += ('<p id="left">PERSONAL\nSKILLS</p>\n<p id="right">' + personal + '</p>\n');
        hc += ('<p id="left">EDUCATION</p>\n<p id="right">' + education + '</p>\n');
        hc += ('<p id="left">EMPLOYMENT\nEXPERIENCE</p>\n');
        hc += ('<p id="left">' + sDate1 + ' - ' + eDate1 + '</p>\n<p id="right">' + employ1 + '</p>');
        hc += ('<p id="left">' + sDate2 + ' - ' + eDate2 + '</p>\n<p id="right">' + employ2 + '</p>');
        hc += ('<p id="left">' + sDate3 + ' - ' + eDate3 + '</p>\n<p id="right">' + employ3 + '</p>');
        hc += ('<p id="left">' + sDate4 + ' - ' + eDate4 + '</p>\n<p id="right">' + employ4 + '</p>');
        if (pRef == "")
            {
                hc += ('<p id="left">PERSONAL\nREFERENCE</p>\n<p id="right">Upon Request</p>');
            }
        else{
                hc += ('<p id="left">PERSONAL\nREFERENCE</p>\n<p id="right">' + pRef + '</p>');    
            }

        if (bRef == "")
            {
                hc += ('<p id="left">BUSINESS\nREFERENCE</p>\n<p id="right">Upon Request</p>');
            }
        else{
                hc += ('<p id="left">BUSINESS\nREFERENCE</p>\n<p id="right">' + bRef + '</p>');    
            }    

        hc += ("</body>\n</html>"); 

        var flyWindow = window.open('about:blank','myPop','width=550,height=1000,left=200,top=200');
        flyWindow.document.write(hc);
        //window.location.href=window.location.href;        
    }    
}