
     //Current button ID clicked
     let buttonIdClicked = -1;


     //WIP
     let commentData = [{
         id:-1,
         comment:"test"
     }]

     let buttonIdList = [];

   
   // Loop through each button to attach click event listeners
  document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function ()  {
        // Show the modal
        buttonIdClicked = this.id
        handleButtonClick(buttonIdClicked);
        
        console.log(buttonIdClicked)
        if(!(buttonIdList.includes(buttonIdClicked))){
            console.log("true");
            buttonIdList.push(buttonIdClicked);
            commentData.push({
                id:buttonIdClicked,
                comment:""
            });
        }
        
    });
});

 //When the user clicks the buttons, it increments the counter inside the HTML
 function handleButtonClick(id){
    let count = document.getElementById(id).getAttribute("count");
    count++;
    document.getElementById(id).setAttribute("count",count)
    let buttonName = document.getElementById(id).innerHTML.split("(");
    document.getElementById(id).innerHTML = buttonName[0] + "(" + count + ")";
    console.log(commentData);

    
}


document.addEventListener('DOMContentLoaded', () => {

        // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];


    // When the user clicks on <span> (x), close the modal
    span.addEventListener('click', () => {
        document.getElementById("myModal").style.display = "none";
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener('click', (event) => {
        if (event.target ==  document.getElementById("myModal")) {
            document.getElementById("myModal").style.display = "none";
        }
    });

    // // Save the comment when the "Save" button is clicked
    // document.getElementById("saveComment").addEventListener('click', () => {
    //     const commentInput = document.getElementById("commentInput");
    //     commentInput.innerHTML = "";
    //     const comment = commentInput.value;
    //     console.log("AVC" + setCommentData(buttonIdClicked, comment))
    //     // Display the comment in an alert (you can modify this to display it differently)
    //     document.getElementById("commentPrev").innerHTML = document.getElementById("commentPrev").innerHTML + " - " + getCommentData(buttonIdClicked)
    //     document.getElementById("myModal").style.display = "none"
    // });

    // function getCommentData(keyID){
    //     let returnData = null;
    //     commentData.forEach((element,index) => {
    //         if(element.id == keyID){
    //             console.log("I AM HERE " + element.comment)
    //             returnData = element.comment
    //             return element.comment
    //         }
    //     })

    //     return returnData;
    // }


    // //NOT WORKING
    // function setCommentData(keyID, data){
    //     let returnData = -1;
    //     commentData.forEach((element,index) => {
    //         if(element.id == keyID){
    //             element.comment = data
    //             returnData = element.comment
    //             return element.comment
    //         }
    //     });
    //     return returnData;
    // }
    
});
