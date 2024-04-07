window.onload = function() {
    var root = document.getElementById("root");
  
    var h2 = document.createElement("h2");
    h2.textContent = "Modificando el DOM desde js";
    root.appendChild(h2);
  
    var a = document.createElement("a");
    a.href = "https://www.google.com";
    a.textContent = "Enlace a Google";
    root.appendChild(a);
  
    var buyList = [
      "books",
      "bread",
      "eraser",
      "earphones",
      "collection-cards",
      "hdmi",
      "vga",
      "motherboard",
      "university-books",
    ];
  
    var ul = document.createElement("ul");
    buyList.forEach(function(item) {
      var li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
    root.appendChild(ul);
  }
  