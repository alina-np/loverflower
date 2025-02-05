import "./style.css";
import { LinkTo } from "shared/ui";

type Props = {
  children: React.ReactNode;
};

export function MainPagePopular({ children }: Props) {
  return (
    <section className="main-popular container">
      <h2 className="title-two main-popular__title">
        Популярные <span>букеты</span>
      </h2>
      <p className="main-popular__desc">
        Самые любимые композиции наших клиентов
      </p>
      {children}
      <LinkTo
        text="Смотреть весь каталог"
        cls="main-popular__link link-pink"
        href="catalog"
      ></LinkTo>
      <div className="main-popular__green green blur"></div>
      <div className="main-popular__pink pink blur"></div>
    </section>
  );
}
