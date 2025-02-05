import "./style.css";
import { LinkTo } from "../Link/Link";

type Props = {
  arr: Array<arrBreadcrumbs>;
};

type arrBreadcrumbs = {
  namePage: string;
  linkPage?: string;
};

export function Breadcrumbs({ arr }: Props) {
  return (
    <div className="breadcrumbs">
      <LinkTo href="" cls="link-white" text="Главная" /> &nbsp; / &nbsp;
      {arr.map((item, num) =>
        item.linkPage ? (
          <LinkTo
            href={item.linkPage}
            cls="link-white"
            text={item.namePage}
            key={num}
          />
        ) : (
          <p key={num}>{item.namePage}</p>
        )
      )}
    </div>
  );
}
