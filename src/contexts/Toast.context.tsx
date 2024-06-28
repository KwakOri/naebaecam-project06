import { PropsWithChildren, createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Toast } from "../components/Toast/Toast";
import { TToast } from "../types/toast";

interface TToastContext {
  add: (toast: TToast) => void;
  delete: (id: TToast["id"]) => void;
}

const initialValue: TToastContext = {
  add: () => {},
  delete: () => {},
};

const ToastContext = createContext<TToastContext>(initialValue);

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const [toasts, setToasts] = useState<TToast[]>([]);
  const value: TToastContext = {
    add: ({ title, content, time }) => {
      setToasts((prev) => [...prev, { title, content, time, id: uuidv4() }]);
    },
    delete: (id) => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    },
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed bottom-10 right-10">
        {toasts &&
          toasts.map((toast) => (
            <Toast
              id={toast.id}
              key={toast.id}
              title={toast.title}
              content={toast.content}
              time={toast.time}
            />
          ))}
      </div>
    </ToastContext.Provider>
  );
};
