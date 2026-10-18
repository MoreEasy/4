import { Spark } from "./icons";

export default function Ticker({
  items,
  variant = "dark",
  className = "",
}: {
  items: string[];
  variant?: "dark" | "fire";
  className?: string;
}) {
  const row = (ariaHidden: boolean) => (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex w-max shrink-0 items-center"
    >
      {items.map((item, i) => (
        <li key={i} className="flex items-center">
          <span
            className={`px-5 md:px-7 py-3 md:py-4 font-display text-xl md:text-2xl tracking-wider whitespace-nowrap ${
              variant === "fire" ? "text-carbon" : "text-crema"
            }`}
          >
            {item}
          </span>
          <Spark
            className={`h-4 w-4 md:h-5 md:w-5 ${variant === "fire" ? "text-carbon/70" : "text-fuego"}`}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={`marquee-hover overflow-hidden border-y ${
        variant === "fire"
          ? "bg-fuego border-fuego"
          : "bg-coal border-crema/10"
      } ${className}`}
    >
      <div className="flex w-max animate-marquee">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
