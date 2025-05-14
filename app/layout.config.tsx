import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Image } from "fumadocs-core/framework";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <img
          src="/bmd.png"
          alt="Bot Maker For Discord Logo"
          style={{ height: 32, verticalAlign: "middle" }}
        />
        Bot Maker For Discord
      </>
    ),
  },
};
