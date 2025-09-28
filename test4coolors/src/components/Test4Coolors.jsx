import { useEffect, useState } from "react";

function randomHexColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * 16);
        color += letters[randomIndex];
    }
    return color
}


export default function Test4Coolors() {
    const [paleta, setPaleta] = useState([]);
    useEffect(() => {
        setPaleta([
            { hex: randomHexColor() },
            { hex: randomHexColor() },
            { hex: randomHexColor() },
            { hex: randomHexColor() },
            { hex: randomHexColor() },
        ]);
    }, []);

    function GerarNovaPaleta() {
        const novaPaleta = [];
        for (let i = 0; i < 5; i++) {
            novaPaleta.push({ hex: randomHexColor() });
        }
        setPaleta(novaPaleta);
    }
    return (
        <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
            {paleta.map((cor) => (
                <div style={{
                    backgroundColor: cor.hex,
                    flex: 1,
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <p>{cor.hex.toUpperCase()}</p>
                </div>
            ))}
            <button onClick={GerarNovaPaleta}
                style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                }}>Gerar Nova Paleta</button>
        </div>
    )
}

