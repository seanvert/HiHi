function showImage() {
    var x = document.getElementById("grade");
    if (x.style.display == "none") {
	x.style.display = "block";
    } else {
	x.style.display = "none";
    }
    console.log('apertei');
}
console.log("asd");
document.getElementById("botao1").addEventListener("click", showImage);
