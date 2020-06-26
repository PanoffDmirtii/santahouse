import { Spinner } from "@vkontakte/vkui";
import React from "react";
import Logo from "../img/logo.jpg";

export const LoaderApp = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <img src={Logo} />
        <Spinner size="large" />
      </div>
    </div>
  );
};
