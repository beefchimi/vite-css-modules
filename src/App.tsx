import {Frame, Header, Main, Footer} from './components';
import type {HeaderProps} from './components';

export function App() {
  const navigation: NonNullable<HeaderProps['navItems']> = [
    'Home',
    'About us',
    'Contact',
    'Goodbye',
  ];

  return (
    <Frame>
      <Header navItems={navigation} />
      <Main />
      <Footer>
        <p>&copy; Tari Labs&trade; &mdash; 2020&ndash;2022</p>
      </Footer>
    </Frame>
  );
}
