const express = require("express");
const convert = require("xml-js");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

// XML del pokemon
app.post("/pokemon2xml", async (req, res) => {
  const { pokemonName } = req.body;
  
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
    const data = response.data;
    
    const info = {
      pokemon: {
        name: data.name,
        height: data.height,
        weight: data.weight
      }
    };
    
    const xml = convert.json2xml(info, { compact: true, spaces: 4 });
    res.json({ result: xml });
  } catch (error) {
    res.status(400).json({ error: "No encontrado" });
  }
});

// Habilidades del pokemon
app.post("/pokemon-abilities", async (req, res) => {
  const { pokemonName } = req.body;
  
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
    const abilities = response.data.abilities.map(a => a.ability.name);
    
    res.json({ abilities });
  } catch (error) {
    res.status(400).json({ error: "No encontrado" });
  }
});

// Imagen del pokemon
app.post("/pokemon-sprite", async (req, res) => {
  const { pokemonName } = req.body;
  
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
    const sprite = response.data.sprites.front_default;
    
    res.json({ sprite });
  } catch (error) {
    res.status(400).json({ error: "No encontrado" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
