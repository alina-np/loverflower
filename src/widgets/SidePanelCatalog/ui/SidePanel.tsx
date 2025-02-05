import "./style.css";
import { Button } from "shared/ui";
import { SortPrice } from "features/SortPrice";
import { FiltrCategory } from "features/FiltrCategory";
import { FiltrPrice } from "features/FiltrPrice";

interface SidePanelProps {
  resetFilters: any;
}

export function SidePanel({ resetFilters }: SidePanelProps) {
  return (
    <div className="catalogFiltr filter">
      <SortPrice />
      <FiltrCategory />
      <FiltrPrice />
      <Button
        text="Сбросить фильтры"
        className="btn catalogFiltr__btn"
        onClick={resetFilters}
      />
    </div>
  );
}
