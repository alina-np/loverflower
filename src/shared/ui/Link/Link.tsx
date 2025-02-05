import  "./style.css"
import { Link } from "react-router-dom";

type Props = {
  href: string;
  text: string;
  cls: string;
};

export function LinkTo({ href, text, cls }: Props) {
  return <Link to={`/${href}`} className={cls}>{text}</Link>;
}
