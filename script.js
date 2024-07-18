function checkButton() {  
    var getSelectedValue = document.querySelector( 
        'input[name="level"]:checked'); 
      
    if(getSelectedValue != null) { 
        document.getElementById("fixed__text").innerHTML 
            = "Leetcode " + getSelectedValue.value; 
    } 
    else { 
        document.getElementById("error").innerHTML 
            = "*You have not selected level"; 
    } 
}  

function checkImage() {
    const btn = document.querySelector('#btn');
    const sb = document.querySelector('#framework')
    btn.onclick = (event) => {
        event.preventDefault();
        // show the selected index
        if (sb.selectedIndex === 0) {
            document.getElementById("myImg").src = "images/img/aws.png";
        } else if (sb.selectedIndex === 1) {
            document.getElementById("myImg").src = "images/img/google.png";
        } else if (sb.selectedIndex === 2) {
            document.getElementById("myImg").src = "images/img/f.jpg";
        } else if (sb.selectedIndex === 3) {
            document.getElementById("myImg").src = "images/img/tictok2.png";
        } else if (sb.selectedIndex === 4) {
            document.getElementById("myImg").src = "images/img/microsoft.png";
        } else {
            document.getElementById("myImg").src = "images/img/python.webp";
        }
    };
}

function generate() {
    document.getElementById("render").innerHTML = "";
    html2canvas(document.querySelector("#capture")).then(canvas => {
        document.getElementById("render").appendChild(canvas);
    });
}

function download() {
    const download = document.getElementById("download");
    let image = document.querySelector("canvas").toDataURL("image/png")
                        .replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
}

document.querySelector("textarea").addEventListener('keyup', function(){
    const quoteText = document.getElementById("quote__text");

    if(this.value != ""){
        quoteText.innerHTML = this.value;
        renderCanvas();
    }
    else {
        quoteText.innerHTML = "Leetcode"
    }
    
});