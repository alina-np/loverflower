import "./style.css";
import { Link } from "react-router-dom";

type Props = {
  id: any;
  image: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler;
  cls: string;
};

export function Card({ image, title, children, onClick, id, cls }: Props) {
  return (
    <div className={cls} onClick={onClick} key={id} id={id}>
      <Link to={`/catalog/${id}`}>
        <img src={image}></img>
      </Link>
      <div className={`${cls}__text`}>
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
}
