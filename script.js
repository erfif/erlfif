const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

yesButton.addEventListener('click', function() {
    alert("Thank you, but I'm sorry I don't love you😜🤟");
});

noButton.addEventListener('click', function() {
    // Pindahkan posisi tombol No
    noButton.style.position = 'absolute';
    noButton.style.top = Math.random() * 80 + 'vh'; // Posisi acak
    noButton.style.left = Math.random() * 80 + 'vw'; // Posisi acak
});
