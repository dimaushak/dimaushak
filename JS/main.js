var current = 'page00';
function show(id) {
    document.getElementById(current).style.display = 'none';
    document.getElementById(id).style.display = 'block';
    current = id;
}