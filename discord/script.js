document.addEventListener("DOMContentLoaded", () => {
    const buttons = [
        { id: "cmgmmodis", url: "https://discord.com/invite/JjchmEtqXp" },
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