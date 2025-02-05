import "./style.css";
import { Forma } from "features/Forma";

export function MainPageForma() {
    return ( 
        <section className="main-forma">
        <Forma />
        <img
          src={require("../../../assets/images/bg-img/main-leaf.png")}
          className="main-forma__flower"
        />
        <div className="main-forma__pink pink blur"></div>
        <div className="main-forma__green green blur"></div>
      </section>
     );
}
