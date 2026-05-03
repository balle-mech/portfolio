import { writeFileSync } from "fs";

const res = await fetch("https://lapras.com/public/KKNCVCX.json");
if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
const data = await res.json();
writeFileSync("public/lapras.json", JSON.stringify(data, null, 2));
console.log("✓ public/lapras.json を更新しました");
