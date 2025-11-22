import clsx from "clsx";

interface Props {
  title: string;
  align?: "left" | "center" | "right";
  border?: boolean;
}

export const HeaderContent = (props: Props) => {
  const { title, align = "center", border = false } = props;

  return (
    <div>
      <h2
        className={clsx(
          "md:text-3xl text-2xl capitalize font-semibold",
          [align === "center" && "text-center"],
          [align === "left" && "text-start"],
          [align === "right" && "text-right"],
        )}
      >
        {title}
      </h2>
      {border && (
        <span className="block w-[100px] h-1 bg-primary-200 rounded-lg mx-auto my-1"></span>
      )}
    </div>
  );
};
