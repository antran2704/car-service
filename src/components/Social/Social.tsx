import { Affix } from "@mantine/core";
import Link from "next/link";

import { FACEBOOK_ICON, ZALO_ICON } from "~/common/image";

export const Social = () => {
  return (
    <Affix position={{ bottom: 120, right: 10 }}>
      <div className="flex flex-col gap-3">
        <Link
          href="https://www.facebook.com/pham.chau.32117"
          target="_blank"
          className="text-gray-500"
        >
          <img
            src={FACEBOOK_ICON}
            alt="facebook"
            title="facebook"
            className="size-10"
            loading="lazy"
          />
        </Link>
        <Link
          href="https://zalo.me/0932585600"
          target="_blank"
          className="text-gray-500"
        >
          <img
            src={ZALO_ICON}
            alt="zalo"
            title="zalo"
            className="size-10"
            loading="lazy"
          />
        </Link>
      </div>
    </Affix>
  );
};
