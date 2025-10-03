function checkboxEffect(checkbox) {
    const text = checkbox.nextElementSibling; 
    if (!text) return;
    text.classList.toggle("checked-text", checkbox.checked);
}

export default checkboxEffect;
