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
        <p>Copyright Some Person 1900-3000.</p>
      </Footer>
    </Frame>
  );
}
