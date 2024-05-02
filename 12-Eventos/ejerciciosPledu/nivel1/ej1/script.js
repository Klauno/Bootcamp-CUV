const magiaDiv = document.getElementById('magia');

magiaDiv.addEventListener('mouseover', function() {
    magiaDiv.querySelector('img').style.display = 'none';
});

magiaDiv.addEventListener('mouseout', function() {
    magiaDiv.querySelector('img').style.display = 'block';
});


