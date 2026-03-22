document.getElementById("btn").addEventListener("click", async () => {
  const text = document.getElementById("input").value;
  
  const res = await fetch("/xml2json", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: text })
  });
  
  const json = await res.json();
  document.getElementById("output").value = json.result;
});

document.getElementById("btnxml").addEventListener("click", async () => {
  const text = document.getElementById("input").value;
  
  const res = await fetch("/json2xmllib", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: text })
  });
  
  const json = await res.json();
  document.getElementById("output").value = json.result;
});
