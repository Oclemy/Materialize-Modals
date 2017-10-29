/*
- Our mainClass.
- We have one method here: initializeApp().
- We initialize our modal here and handle our button callbacks
 */
var mainClass= function () {
    this.initializeApp=function()
    {
        $(document).ready(function(){
            // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
            $('.modal').modal();

            //clicks agree
            $('#agreeBtn').on('click',function(){
                alert("Alright agreed");
            });
            $('#disagreeBtn').on('click',function(){
                alert("Disagreed");
            });
        });
    }
}

//Initailize app
m=new mainClass();
m.initializeApp();





