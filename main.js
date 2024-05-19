function discord() {
    navigator.clipboard.writeText("czwx.");
    let discord = document.getElementById("discord");
    discord.innerHTML = '<i class="bi bi-check2"></i>';
    discord.style.backgroundColor = "#27DD1D";

    setTimeout(function() {
        discord.innerHTML = '<i class="bi bi-discord"></i>';
        discord.style.backgroundColor = "#7289DA";
    }, 2000)
}

function steam() {
    window.open("https://steamcommunity.com/id/czwx/");
}