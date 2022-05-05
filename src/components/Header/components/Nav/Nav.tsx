import { useState } from "react";

import { classNames } from "../../../../utilities";

import * as styles from "./Nav.css";

export interface NavProps {
  items: string[];
}

function EmptyState() {
  return (
    <div className={styles.NavEmptyState}>
      <span role="img" aria-label="Navigation unavailable">
        ☠️
      </span>
    </div>
  );
}

export function Nav({ items = [] }: NavProps) {
  const [menuActive, setMenuActive] = useState(false);

  const handleToggleMenu = () => setMenuActive(!menuActive);

  const menuClassNames = classNames(styles.Menu, {
    [styles.menuActive]: menuActive,
  });

  const itemsMarkup = items.map((item, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <li key={`${item}-${index}`} className={styles.Item}>
      <span className={styles.Link}>{item}</span>
    </li>
  ));

  return (
    <nav>
      <button
        type="button"
        className={styles.Action}
        onClick={handleToggleMenu}
      >
        <span role="img" aria-label="Navigation unavailable">
          {menuActive ? "📖" : "📘"}
        </span>
      </button>

      <ul className={menuClassNames}>{itemsMarkup}</ul>
    </nav>
  );
}

Nav.EmptyState = EmptyState;
