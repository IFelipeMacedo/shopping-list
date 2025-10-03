export default function createDate(date = new Date()) {
    const d = new Date(date);
    const dateText = d.toLocaleDateString("en-US", { weekday: "long", day: "2-digit", month: "2-digit", year: "numeric" });
    const timeText = d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });

    const p = document.createElement("p");
    p.className = "shopping-list__date";
    p.innerText = `${dateText} at ${timeText}`;
    return p;
}
