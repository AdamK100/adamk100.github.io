function hidedl(){
    document.getElementById("resumedlwindow").style.display = "none";
}
function showdl(){
    var res = document.getElementById("resumedlwindow")
    if(res.style.display == "none"){
        res.style.display = "block";
    }
    else{
        res.style.display = "none";
    }
}