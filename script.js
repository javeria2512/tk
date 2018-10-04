
function changeLang() {
    $.ajax({
        url: ` https://techkaro-test.herokuapp.com/api/v1/getdata`,
        success: function (data) {
            console.log(data);
            document.querySelector(".card-img-top").style["background-image"] = `url("imagesURL")`;
            document.querySelector(".heading").innerHTML = data.info.heading;
            document.querySelector(".card-text").innerHTML = data.description;
            document.querySelector(".nav").innerHTML = data.menuoption;
        },   
    });

    $.ajax({
        url:`https://techkaro-test.herokuapp.com/api/v1/getdata?lang=en`,
        success:function(lang){
        document.querySelector("body").innerHTML = data.lang;

        }
    })

}
