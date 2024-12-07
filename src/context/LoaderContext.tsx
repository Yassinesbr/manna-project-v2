import { createContext, useState, FC } from "react";

interface LoaderContextProps {
  isLoading: boolean;
  showLoader: () => void;
  hideLoader: () => void;
}

export const LoaderContext = createContext<LoaderContextProps>({
  isLoading: false,
  showLoader: () => {},
  hideLoader: () => {},
});

interface LoaderProviderProps {
  children: React.ReactNode;
}

export const LoaderProvider: FC<LoaderProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const showLoader = () => setIsLoading(true);
  const hideLoader = () => setIsLoading(false);

  return (
    <LoaderContext.Provider value={{ isLoading, showLoader, hideLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};
