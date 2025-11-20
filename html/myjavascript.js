document.getElementById("addImageBtn").addEventListener("click", function () {

    const img = document.createElement("img");

    // FIXED QUOTE ERROR
    img.src = "images/me.jpeg";  // Make sure file exists!

    img.style.width = "300px";
    img.style.display = "block";
    img.style.margin = "20px auto";

    document.getElementById("mydiv100").appendChild(img);
});

