import {
  FluentProvider,
  webLightTheme,
} from "@fluentui/react-components";
import AppHeader from "./components/app-header";
import ServicesModule from "./components/services_module/services-module";
import MouseModule from "./components/mouse_module/mouse-module";

function App() {

  return (
    <main
      style={{
        height: "100%",
      }}
    >
      <FluentProvider
        theme={webLightTheme}
        style={{ height: "100%", backgroundColor: "transparent" }}
      >
        <div
          style={{
            height: "100%",
            display: "grid",
            gridTemplateRows: "70px 1fr 1fr 1fr",
            gridTemplateColumns: "1fr 30%",
            rowGap: 16,
            columnGap: 8
          }}
        >
          <AppHeader />
          <ServicesModule />
          <MouseModule />
        </div>
      </FluentProvider>
    </main>
  );
}

export default App;
