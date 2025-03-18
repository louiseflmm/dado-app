import React from "react";
 
const imagens = {
    1:"https://w7.pngwing.com/pngs/425/86/png-transparent-dice-game-kismet-four-sided-die-dice-1-angle-face-rectangle-thumbnail.png", 
    2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTchq1ScyfJXqiI3qXMg_XBqPpbFCOEM-bSHA&s", 
    3: "https://static.vecteezy.com/system/resources/previews/027/388/526/non_2x/white-face-cube-dot-of-game-dice-png.png",
    4:"https://static.vecteezy.com/system/resources/previews/027/388/525/non_2x/white-face-cube-dot-of-game-dice-png.png",
    5:"https://static.vecteezy.com/system/resources/previews/027/388/528/non_2x/white-face-cube-dot-of-game-dice-png.png",
    6:"https://static.vecteezy.com/system/resources/previews/027/388/522/non_2x/white-face-cube-dot-of-game-dice-png.png"};
 
const Dado =({valor}) => {
    return <img src={imagens[valor]} alt={`Dado mostrando ${valor}`} style={{width: "100px"}}/>;
};
 
export default Dado;