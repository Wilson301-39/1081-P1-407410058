function change(index) {
  var p = document.getElementById("section");
  console.log(p);
  switch (index) {
    case 1:
      p.innerHTML =
        '<iframe width = 100% height = 100% src = "https://www.youtube.com/embed/RechrtUxfQc">';
      p.style.backgroundColor = "azure";
      break;

    case 2:
      p.innerHTML =
        '<iframe width = 100% height = 100% src = "https://www.youtube.com/embed/MRWX49Furew">';
      p.style.backgroundColor = "azure";
      break;

    case 3:
      p.innerHTML =
        '<iframe width = 100% height = 100% src = "https://www.youtube.com/embed/METhdbL_iMw">';
      p.style.backgroundColor = "azure";
      break;

    case 4:
      p.innerHTML =
        '<iframe width = 100% height = 100% src = "https://www.youtube.com/embed/ZyDbq-lEKTo">';
      p.style.backgroundColor = "azure";
      break;

    case 5:
      p.innerHTML =
        '<iframe width = 100% height = 100% src = "https://www.youtube.com/embed/NlsrJbVvjaA">';
      p.style.backgroundColor = "azure";
      break;
  }
}
