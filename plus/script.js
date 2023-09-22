document.addEventListener("DOMContentLoaded", () => {
    const buttons = [
        { id: "1.2.0", url: "https://github.com/lnwAitJi/CMGMMO-Plus/releases/download/beta1.2.0/CMGMMO-Plus-beta.1.2.0.mcpack" },
        { id: "1.1.0", url: "https://github.com/lnwAitJi/CMGMMO-Plus/releases/download/beta1.1.0/CMGMMO-Plus-beta.1.1.0.mcpack" },
        { id: "1.0.0", url: "https://github.com/lnwAitJi/CMGMMO-Plus/releases/download/beta1.0.0/CMGMMO-Plus-beta.1.0.0.mcpack" },
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