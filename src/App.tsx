import {
  Counter,
  LocalVsGlobal,
  Frame,
  Header,
  Main,
  Footer,
} from "./components";
import type { HeaderProps } from "./components";
import "./styles/global/app.css";
import "./styles/global/keyframes.css";

export function App() {
  const navigation: NonNullable<HeaderProps["navItems"]> = [
    "Home",
    "About us",
    "Contact",
    "Goodbye",
  ];

  return (
    <Frame>
      <Header navItems={navigation} animateLogo />

      <Main>
        <Counter initialCount={1} min={-10} max={10} />
        <LocalVsGlobal>
          <p>Some children that have been passed in.</p>
        </LocalVsGlobal>
      </Main>

      <Footer socialLinks>
        <p>&copy; Tari Labs&trade; &mdash; 2020&ndash;2022</p>
      </Footer>
    </Frame>
  );
}
