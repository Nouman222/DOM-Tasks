let headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    
    let content = header.nextElementSibling;

    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }

  });
});
