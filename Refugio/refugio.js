function verificarPalavra() {
      const palavra = document.getElementById("palavra").value.trim().toLowerCase(); // pega o valor digitado
      const chave = "solstice";

      if (palavra === chave) {
        window.location.href = "../maquinamundo/maquinamundo.html";
      } else {
        alert("Palavra incorreta! Tente novamente.");
      }
    }