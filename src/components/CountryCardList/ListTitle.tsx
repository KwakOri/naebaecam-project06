import { PropsWithChildren } from "react";

function ListTitle({ children }: PropsWithChildren) {
  return (
    <h1 className="p-4 bg-[#FCFDFF] rounded-lg shadow-md text-4xl font-bold mt-20 mb-10">
      {children}
    </h1>
  );
}

export default ListTitle;
