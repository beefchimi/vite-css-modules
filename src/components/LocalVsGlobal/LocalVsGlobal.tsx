import type { ReactNode } from "react";

import { Typography } from "../Typography";

// When importing from a `*.css.ts` file, the contents of the file are
// parsed and reconstructed as: {[key: string]: string}.
// This allows us to import a single "default export" of `styles`,
// and reference our desired classnames as `keys` on the `styles` object.
// These `className` values can then be recognized by the CSS Modules
// build tools, mapped back to their corresponding style declarations,
// and obfuscated to always ensure unique classnames.

// We can still import normal `*.css` files, without the `modules` extension.
// These will NOT be recognized by the CSS Modules build tools,
// and therefor will not be importable as an object, nor have their
// classnames transformed to prevent collisions.
// You should only import "global CSS" files within a single "root manifest",
// such as the main entry index of your app.
import "./Global.css";
import { Local, LocalvGlobal } from "./Local.css";

export interface LocalVsGlobalProps {
  children?: ReactNode;
}

export function LocalVsGlobal({ children }: LocalVsGlobalProps) {
  // const childrenMarkup = children ? (
  //   <div className={styles.Children}>{children}</div>
  // ) : null;

  return (
    <div className={LocalvGlobal}>
      {/*
        `styles.GlobalInterior` does not exist and simply returns `undefined`.
        `.GlobalInterior` is defined within `Global.css`, but unless it is
        passed as a string value ("GlobalInterior"), then it will not apply.
      */}
      <div className={"GlobalInterior"}>
        <Typography>
          <div className={Local}>
            <p>This is an example of local styles being applied.</p>
          </div>

          <div className="Global">
            <p>And this is an example of global styles.</p>
          </div>

          {/*{childrenMarkup}*/}
        </Typography>
      </div>
    </div>
  );
}
