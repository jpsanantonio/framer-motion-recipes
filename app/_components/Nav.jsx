"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const recipes = [
  {
    label: "Multistep Wizard",
    pathname: "/",
  },
  {
    label: "Email Client",
    pathname: "/email-client",
  },
  {
    label: "Fixed Header: Part 1",
    pathname: "/fixed-header-part-1",
  },
  {
    label: "Fixed Header: Part 2",
    pathname: "/fixed-header-part-2",
  },
  {
    label: "Carousel: Part 1",
    pathname: "/carousel-part-1",
  },
  {
    label: "Carousel: Part 2",
    pathname: "/carousel-part-2",
  },
  {
    label: "Resizable Panel",
    pathname: "/resizable-panel",
  },
  {
    label: "Calendar",
    pathname: "/calendar",
  },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <ol className="mt-5 space-y-1">
      {recipes.map((recipe, index) => (
        <li key={index}>
          <Link
            className={`text-slate-50 rounded text-sm flex items-center px-2 py-3 hover:bg-slate-800/50 ${
              pathname == recipe.pathname && "bg-slate-800"
            }`}
            href={recipe.pathname}
          >
            <span className="inline-block mr-2 w-6 text-slate-500">
              {index + 1}
            </span>
            {recipe.label}
          </Link>
        </li>
      ))}
    </ol>
  );
}
