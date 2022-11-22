function validateText(){

    console.log("validateText() called");

    //for image_form.html
    var text_fname = document.getElementById("fname").value;
    var text_lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("mob").value;
    // var text_fname = document.forms["text_form"]["fname"].value;
    // var text_lname = document.forms["text_form"]["lname"].value;
    // var email=document.forms["text_form"]["email"].value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // var number=document.forms["text_form"]["mob"].value;
    // var text_description = document.forms["text_form"]["desc"].value;
    // //date
    // var text_date = document.forms["text_form"]["date"].value;
    // var price = document.forms["text_form"]["price"].value;
    // //category
    // var category = document.forms["text_form"]["category"].value;

    //validate
    // if(text == null || text == ""){
    //     alert("Please upload text");
    //     return false;
    // }

    console.log(text_fname);

    if(text_fname == null || text_fname == ""){
        alert("Please enter a First Name");
        return false;
    }
    if(text_lname == null || text_lname == ""){
        alert("Please enter a last Name");
        return false;
    }
    if(number.length<10 || number.length>10 ){
        alert("Please enter a valid phone number");
        return false;
    }
    if(!email.match(mailformat))
    {
        alert("Please enter a valid email");
        return false;
    }


    // if(text_description == null || text_description == ""){
    //     alert("Please enter a description");
    //     return false;
    // }

    // if(text_date == null || text_date == ""){
    //     alert("Please enter created date");
    //     return false;
    // }

    // if(price == null || price == ""){
    //     alert("Please enter a price");
    //     return false;
    // }

    // if(category == null || category == ""){
    //     alert("Please enter a category");
    //     return false;
    // }   

    return true;


}