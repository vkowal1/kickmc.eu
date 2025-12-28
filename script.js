// Symulacja liczby graczy online w stylu Minecraft
function updatePlayerCount() {
    // tu ustaw aktualną liczbę graczy, np. z bazy danych serwera
    const min = 150;
    const max = 250;
    const count = Math.floor(Math.random() * (max - min + 1)) + min;

    const element = document.getElementById("mc-online");
    if(element) element.textContent = count;
}

// Aktualizuj co 5 sekund
setInterval(updatePlayerCount, 5000);
updatePlayerCount();
