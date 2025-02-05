import { RadioButton } from "shared/ui";
import { setCategory } from "shared/lib/redux/reducer/filtrSlice";
import { useAppDispatch } from "shared/lib/redux/store";

export function FiltrCategory() {
  const dispatch = useAppDispatch();
  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = event.target;
    dispatch(setCategory(id));
  };

  return (
    <div>
      <h3 className="text-mint title-three">Категория</h3>
      <div className="filtrCategory" onChange={handleCategoryChange}>
        <RadioButton id="new" name="category" value="new" text="Новинка" />
        <RadioButton id="hit" name="category" value="hit" text="Популярное" />
        <RadioButton id="sale" name="category" value="sale" text="Распродажа" />
      </div>
    </div>
  );
}
