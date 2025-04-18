const magicBox = document.getElementById("magicBox");

    function changeText() {
      magicBox.textContent = "Text changed dynamically! 🎉";
    }

    function changeStyle() {
      magicBox.style.backgroundColor = "hotpink";
      magicBox.style.color = "white";
      magicBox.style.fontWeight = "bold";
      magicBox.style.transform = "scale(1.1)";
    }

    function toggleElement() {
      magicBox.classList.toggle("hidden");
    }