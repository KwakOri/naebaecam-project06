import { cva } from "class-variance-authority";
import { useEffect, useState } from "react";
import { useToast } from "../../contexts/Toast.context";
import { TToast } from "../../types/toast.types";

const ToastStatusVariants = cva("w-4 h-4 rounded-full", {
  variants: {
    type: {
      Add: "bg-green-500",
      Delete: "bg-orange-500",
    },
  },
});

export const Toast = ({ id, title, content, time, type }: TToast) => {
  const TOAST_DURATION = 500;
  const toast = useToast();
  const [show, setShow] = useState(false);
  let timer: ReturnType<typeof setTimeout>;

  const deleteToast = async (time: number): Promise<void> =>
    new Promise<void>((resolve) => {
      timer = setTimeout(() => {
        setShow(false);
        resolve();
      }, +time);
    }).then(() => {
      setTimeout(() => {
        toast.delete(id);
      }, TOAST_DURATION);
    });

  useEffect(() => {
    setShow(true);
    deleteToast(+time);
  }, []);

  return (
    <div
      className={`py-2 px-4 bg-white mt-4 transition-all duration-500 w-[320px] flex flex-col justify-center rounded-md border border-solid border-gray-200 shadow-lg relative ${
        show ? "right-0" : "-right-[400px]"
      }`}
    >
      <div className="flex items-center justify-between pb-4">
        <div className={ToastStatusVariants({ type })}></div>
        <h3 className="mb-1 font-extrabold text-gray-600 text-overflow">
          {title}
        </h3>

        <button
          onClick={() => {
            clearInterval(timer);
            deleteToast(0);
          }}
          className="px-2 py-1 text-[12px] font-semibold text-gray-700 bg-gray-200 rounded-full"
        >
          닫기
        </button>
      </div>
      <p className="text-left">{content}</p>
    </div>
  );
};
