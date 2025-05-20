<!DOCTYPE html>
<html>
  <head>
    <title>Registrazione</title>
    <meta charset="UTF-8">
  </head>
  <body>

    <h2>Iscriviti</h2>

    <form id="form">
      <label>Nome: <input type="text" name="nome" required></label><br><br>
      <label>Cognome: <input type="text" name="cognome" required></label><br><br>
      <label>Cellulare: <input type="text" name="cellulare" required></label><br><br>
      <label>Email: <input type="email" name="email" required></label><br><br>

      <button type="submit">Conferma</button>
    </form>

    <p id="messaggio"></p>

    <script>
      const form = document.getElementById("form");
      const messaggio = document.getElementById("messaggio");

      const URL = "INSERISCI_QUI_IL_TUO_LINK_APPS_SCRIPT"; // <-- Inserisci il tuo link qui

      form.addEventListener("submit", function (e) {
        e.preventDefault();

        const dati = new FormData(form);
        const datiObj = {};
        dati.forEach((valore, chiave) => datiObj[chiave] = valore);

        fetch(URL, {
          method: "POST",
          mode: "no-cors", // evita errori CORS
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(datiObj)
        });

        form.reset();
        messaggio.innerText = "Dati inviati con successo!";
      });
    </script>

  </body>
</html>
