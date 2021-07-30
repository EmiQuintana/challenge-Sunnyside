scrollTo = (element) => {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: element.offsetTop
    });
    console;
  };

  document.getElementById("toMiddle").addEventListener("click", () => {
    scrollTo(document.getElementById("5"));
  });