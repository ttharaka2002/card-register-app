import React, { useState } from "react";
import * as styles from "./App.scss";
import { Header } from "../components/Header/Header";
import { WindowLayout } from "../components/Layout/WindowLayout";
import { MenuScreen } from "../features/menu/MenuScreen";
import { RegisterCardScreen } from "../features/register/RegisterCardScreen";
import { Screen } from "../state/navigation";
import { User } from "../types/user";

const user: User = {
  firstName: "Alex",
};

export const App = () => {

    //Screen state is managed here for simplicity, as we only have two screens and no complex navigation logic.
    //TODO: If the app grows, configuration-driven or reducer-based approach for scalable products.
  const [screen, setScreen] = useState<Screen>("register");

  const handleOpenMenu = () => setScreen("menu");
  const handleBackToRegister = () => setScreen("register");

  return (
    <main className={styles.appShell}>
      <div className={styles.windowFrame}>
        {screen === "menu" ? (
          <WindowLayout
            header={
              <Header
                title="Menu"
                leftAction={{
                  ariaLabel: "Back to register card form",
                  icon: "←",
                  onClick: handleBackToRegister,
                }}
              />
            }
          >
            <MenuScreen />
          </WindowLayout>
        ) : (
          <WindowLayout
            header={
              <Header
                title="Register card form"
                leftAction={{
                  ariaLabel: "Open menu",
                  icon: "☰",
                  onClick: handleOpenMenu,
                }}
              />
            }
          >
            <RegisterCardScreen user={user} onSubmit={() => undefined} />
          </WindowLayout>
        )}
      </div>
    </main>
  );
};
