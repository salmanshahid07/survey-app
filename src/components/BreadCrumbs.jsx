import { useLocation, Link } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();

  let currentLink = "";

  const paths = location.pathname.split("/").filter((crumb) => crumb !== "");

  const crumbs = paths.map((crumb, index) => {
    currentLink += `/${crumb}`;

    return (
      <div
        className={`uppercase flex font-bold flex-row items-center ${
          index !== paths.length - 1 ? "text-green-500" : "text-gray-400"
        } text-xs gap-1`}
        key={index}
      >
        <Link to={currentLink}>{crumb}</Link>
        {index !== paths.length - 1 && <span className="text-gray-400">/</span>}
      </div>
    );
  });

  return <div className="flex flex-row gap-1">{crumbs}</div>;
}
