import { useState } from "react";

const useNavState = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return { nav, openNav, closeNav };
};

export default useNavState;