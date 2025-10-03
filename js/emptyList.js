function emptyList() {
    const emptyMessage = document.getElementById("empty-message");
    const list = document.querySelectorAll("#shopping-list li");
    if (list.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }
}

export default emptyList;