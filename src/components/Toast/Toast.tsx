import { useEffect, useState } from "react";
import { useToast } from "../../contexts/Toast.context";
import { TToast } from "../../types/toast";

export const Toast = ({ id, title, content, time }: TToast) => {
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
      className={`py-4 bg-white mt-4 transition-all duration-500 w-[320px] pl-6 pr-10 flex flex-col justify-center rounded-md border border-solid border-gray-200 shadow-lg relative ${
        show ? "right-0" : "-right-[400px]"
      }`}
    >
      <h3 className="mb-1 font-extrabold text-gray-600 text-overflow">
        {title}
      </h3>
      <p className="text-left">{content}</p>

      <button
        onClick={() => {
          clearInterval(timer);
          deleteToast(0);
        }}
        className="absolute w-6 h-6 font-black text-gray-500 bg-gray-200 top-2 right-2 rounded-xl"
      >
        x
      </button>
    </div>
  );
};
