import { PropsWithChildren } from "react";
import { ToastProvider } from "../../contexts/Toast.context";
import QueryProvider from "../../query/QueryProvider";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative">
      <QueryProvider>
        <ToastProvider>{children}</ToastProvider>
      </QueryProvider>
    </div>
  );
};

export default Providers;
