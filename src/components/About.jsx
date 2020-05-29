import React from "react";
import "../App.css";
import "../popup.css";
import "../form.css";

const About = () => {
  return (
    <div className="border">
    <div className="About-Box">
      <div className="About-GOG"></div>
      <div className="About-GOG-Media"></div>
      <p className="Text">
        Hela idén med Game of Glenn är att vi har byggt ett skal för ett
        Rollspel. Tanken är att enkelt komma igång och slippa skapa en helt ny
        värld från början med karaktärskapande och storyskapande. Vi har byggt
        en värld åt dig som användare att skapa karaktärer och bygga en
        rollspels-story. Tanken är att du enkelt kan skapa en karaktär, placera
        den i något av områdena i världen. Delvis för att det blir enkelt komma
        ihåg i vilken del av världen din karaktär är i när du återupptar spelet.
        Men också för att enkelt lägga till nya karaktärer i din story och om du
        har nya rollspels-kompanjoner som vill vara med. Spela spelet hur ni
        vill och med vilken story ni vill, HÄR är grunden för er att komma igång
        och använda er av genom er rollspelsresa.
      </p>
    </div>
    </div>
  );
};

export default About;
