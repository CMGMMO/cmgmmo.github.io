document.addEventListener("DOMContentLoaded", () => {
    try {
        const buttons = [
            { id: "cmgmmodis", url: "../discord/" },
            { id: "cmgmmodiscord", url: "https://discord.com/invite/JjchmEtqXp" },
            { id: "plus", url: "../plus/" },
            { id: "tour", url: "../Tournament/" },
            { id: "github", url: "https://github.com/lnwAitJi/CMGMMO-Plus/" },
            { id: "back", url: "../Server/" },
            { id: "jointournament", url: "https://docs.google.com/forms/d/e/1FAIpQLSfryGqwfEjCUhTqdG4iZ0nVh9vcVwg2VGXgPaGDqY-qrjgDUw/viewform?ontab=true" }
        ];

        buttons.forEach(button => {
            const element = document.getElementById(button.id);
            if (element) {
                element.addEventListener("click", () => {
                    if (button.url.endsWith("?ontab=true")) {
                        const herfTo = button.url.split("?onTab=true")[0] ?? button.url
                        window.location.href = herfTo;
                        return
                    }
                    if (button.url.startsWith("http")) window.open(button.url, "_blank");
                    else window.location.href = button.url;

                });
            }
        });
    } catch (e) { }
});
