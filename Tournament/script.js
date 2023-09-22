document.addEventListener("DOMContentLoaded", () => {
    const buttons = [
        { id: "back", url: "../Server/" },
        { id: "jointournament", url: "https://docs.google.com/forms/d/e/1FAIpQLSfryGqwfEjCUhTqdG4iZ0nVh9vcVwg2VGXgPaGDqY-qrjgDUw/viewform?ontab=true" }
    ];

    buttons.forEach(button => {
        const element = document.getElementById(button.id);
        if (element) {
            element.addEventListener("click", () => {
                if(button.url.endsWith("?ontab=true")){
                  const herfTo = button.url.split("?onTab=true")[0] ?? button.url
                  window.location.href = herfTo;
                  return
                }
                if (button.url.startsWith("http")) window.open(button.url, "_blank");
                else window.location.href = button.url;
                
            });
        } else {
            console.error(`Element with ID '${button.id}' not found.`);
        }
    });
});