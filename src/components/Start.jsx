import React from "react";
import glenn from "../components/assets/glenn.png";
import miniGlenn from "../components/assets/mini-glenn.png";
import banner1 from "../components/assets/banner1.svg";
import banner2 from "../components/assets/banner2.svg";
import bannerMedia from "../components/assets/bannerMedia.svg";
import bannerMediaInfo from "../components/assets/bannerInfo.svg";
import snake from "../components/assets/snake.svg";
import GOG from "../components/assets/GOG-Banner.svg";

const Start = () => (
  <div className="App-start">
    <div className="Map-Box">
      <div className="Map"></div>
    </div>
    <main className="Main-Start">
      <div className="GOG-Banner">
        <img src={GOG} className="gog-banner" alt="snake" />
      </div>
      <aside>
        <div className="First-Aside">
          <div className="Banner">
            <img src={banner1} alt="" />
          </div>
          <div className="BannerMediaInfo">
            <img src={bannerMedia} alt="" />
          </div>
          <p className="Text">
          En spännande värld som är uppdelad i fyra olika världar där alla olika världar har unik historia och unika karaktärer. 
          En start för er att bygga vidare ER story, ER karaktärs story och ER världs story. 
          Låt fantasin flöda och låt spelet börja!
          </p>
          <div className="Glenn">
            <img src={glenn} className="glenn" alt="glenn" />
            <img src={miniGlenn} className="Mini-Glenn" alt="mini-glenn" />
          </div>
        </div>
        <div className="Second-Aside">
          <div className="Banner">
            <img src={banner2} alt="" />
          </div>
          <div className="BannerMediaInfo">
            <img src={bannerMediaInfo} alt="" />
          </div>
          <p className="Text">
          De fyra världarna, Hvfudstaden där Glenn den 10:e bor och som är ett centrum för världen, 
          Slottsskogen där visdomen gömmer sig bakom tallar och snår, Donsö där allt är ett med havet, 
          Hisingen där kriminalitet och mörker är täcke över ön.
          </p>
          <img src={snake} className="Snake" alt="snake" />
        </div>
      </aside>
    </main>
  </div>
);

export default Start;
