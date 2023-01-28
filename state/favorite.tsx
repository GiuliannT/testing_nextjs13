import { createContext, useContext, useState } from "react";

interface Context {
  state: {
    favorites: string[];
  };
  actions: {
    toggleFavorite: (image: string) => void;
  };
}

const FavoriteContext = createContext({} as Context);

interface Props {
  children: React.ReactNode;
}

const FavoriteProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useState([] as string[]);

  const toggleFavorite = (image: string) => {
    if (favorites.includes(image)) {
      setFavorites(favorites.filter((favorite) => favorite !== image));
    } else {
      setFavorites([...favorites, image]);
    }
  };

  return <FavoriteContext.Provider value={{ state: { favorites }, actions: { toggleFavorite } }}>{children}</FavoriteContext.Provider>;
};

function useFavorite(): [Context["state"]["favorites"], Context["actions"]["toggleFavorite"]] {
  const { state, actions } = useContext(FavoriteContext);

  return [state.favorites, actions.toggleFavorite];
}

export { FavoriteProvider, useFavorite };
