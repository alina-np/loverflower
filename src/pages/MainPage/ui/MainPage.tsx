import { MainPageSection } from "entities/MainPageSection";
import { MainPageCatalog } from "entities/MainPageCatalog";
import { MainPagePopular } from "entities/MainPagePopular";
import { MainPageOrder } from "entities/MainPageOrder";
import { MainPageSpecial } from "entities/MainPageSpecial";
import { MainPageSocial } from "entities/MainPageSocial";
import { MainPageForma } from "entities/MainPageForma";
import { catalog } from "shared/model/arr";
import { Button, Card } from "shared/ui";
import { useAddInCart } from "shared/lib";
import { Carousel } from "widgets/Carousel";
import { item } from "types/types";

function MainPage() {
  const addInCart = useAddInCart();
  const popular = [];
  for (let item of catalog) if (item.mark === "hit") popular.push(item);

  return (
    <main>
      <MainPageSection />
      <MainPageCatalog />
      <MainPagePopular>
        <Carousel cls="popular">
          {popular.map((item: item, num: number) => (
            <Card
              id={num}
              key={num}
              cls="card"
              image={item.img}
              title={item.title}
            >
              <p className="price card__price">
                <span>{item.price}</span> ₽
              </p>
              <Button className="btn-opacity" onClick={addInCart} text="В корзину" />
            </Card>
          ))}
        </Carousel>
      </MainPagePopular>
      <MainPageOrder />
      <MainPageForma />
      <MainPageSpecial />
      <MainPageSocial />
    </main>
  );
}

export default MainPage;
