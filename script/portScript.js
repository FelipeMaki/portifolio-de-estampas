function openModal(img) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var caption = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = img.src;
    caption.innerHTML = img.alt;
}

function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}