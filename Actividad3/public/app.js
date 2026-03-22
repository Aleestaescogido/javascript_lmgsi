// Botón XML
document.getElementById("btnXML").addEventListener("click", async () => {
  const name = document.getElementById("pokemonInput").value;
  
  const res = await fetch("/pokemon2xml", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pokemonName: name })
  });
  
  const data = await res.json();
  document.getElementById("xmlOutput").value = data.result || data.error;
});

// Botón Habilidades
document.getElementById("btnAbilities").addEventListener("click", async () => {
  const name = document.getElementById("pokemonInput").value;
  
  const res = await fetch("/pokemon-abilities", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pokemonName: name })
  });
  
  const data = await res.json();
  let html = "";
  if (data.abilities) {
    data.abilities.forEach(a => html += "<p>" + a + "</p>");
  } else {
    html = data.error;
  }
  document.getElementById("abilitiesOutput").innerHTML = html;
});

// Botón Imagen
document.getElementById("btnSprite").addEventListener("click", async () => {
  const name = document.getElementById("pokemonInput").value;
  
  const res = await fetch("/pokemon-sprite", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pokemonName: name })
  });
  
  const data = await res.json();
  if (data.sprite) {
    document.getElementById("spriteOutput").innerHTML = "<img src='" + data.sprite + "'>";
  } else {
    document.getElementById("spriteOutput").innerHTML = data.error;
  }
});
