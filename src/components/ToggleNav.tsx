import React from "react";
import styles from "@/styles/Nav-side-bar.module.css";
import { useGlobalContext } from "@/context/appContext";

const ToggleNav = () => {
  const { state } = useGlobalContext();
  const { navToggle } = state;
  return (
    <div className={`${styles.nav_expand} ${!navToggle && styles.nav_hide}`}>
      ToggleNav
    </div>
  );
};

export default ToggleNav;
