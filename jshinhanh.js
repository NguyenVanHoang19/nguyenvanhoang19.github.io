let hinhanh = document.querySelector("#hinhanhnuiba");

function addHinhAnh() {
    // var str = "";
    // var listHinh = [];

    for (var i = 1; i <= 70; i++) {
        hinhanh.innerHTML += `<div class="hinh col-sm-6 col-md-4">
        <a class="lightbox" href="./images/${i}.jpg">
            <img src="./images/${i}.jpg" alt="Park">
        </a>
    </div>`;
        // listHinh.push(str);
    }
    // document.getElementById("hinhanhnuiba").innerHTML = listHinh.join('');
}
window.onload = addHinhAnh;
// window.onload = function() {
//     addHinhAnh();

//     let h = document.querySelector(".hinh");
//     h.addEventListener("click", function() {
//         console.log("log");
//         baguetteBox.run(".tz-gallery");
//     });
// };