function refresh() {
    var textContent = document.getElementById('editor').value;
    document.getElementById('viewer').srcdoc = textContent;
}