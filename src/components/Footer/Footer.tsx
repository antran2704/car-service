import Link from "next/link";

import { LOGO_IMAGE } from "~/common/image";

export const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container py-8 mx-auto flex items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link href="/">
            <img
              src={LOGO_IMAGE}
              alt="Chau47 Logo"
              title="Chau47 Logo"
              className="min-w-[160px] w-[160px] h-[80px] md:mx-0 mx-auto object-contain object-center"
              width={100}
              height={100}
              loading="lazy"
            />
          </Link>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 md:mt-0 mt-10 md:text-left mx-auto text-center">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="font-medium text-gray-900 text-base mb-3">
              Trang chủ
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  href={"#service"}
                  className="text-gray-600 hover:text-primary-100"
                >
                  Dịch vụ
                </Link>
              </li>
              <li>
                <Link
                  href={"#why"}
                  className="text-gray-600 hover:text-primary-100"
                >
                  Tại sao lựa chọn chúng tôi
                </Link>
              </li>
              <li>
                <Link
                  href={"#feedback"}
                  className="text-gray-600 hover:text-primary-100"
                >
                  Feedback
                </Link>
              </li>
              <li>
                <Link
                  href={"#faq"}
                  className="text-gray-600 hover:text-primary-100"
                >
                  FAQ
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="font-medium text-gray-900 text-base mb-3">
              Về chúng tôi
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  href={"#about"}
                  className="text-gray-600 hover:text-primary-100"
                >
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link
                  href={"#about"}
                  className="text-gray-600 hover:text-primary-100"
                >
                  Tầm nhìn
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="font-medium text-gray-900 text-base mb-3">
              Liên hệ
            </h2>
            <ul className="flex flex-col gap-1">
              <li>
                <span className="text-sm">Số điện thoại: </span>
                <a
                  href="tel:0932585600"
                  className="text-gray-600 hover:text-primary-100 text-sm"
                >
                  0932585600
                </a>
              </li>
              <li>
                <span className="text-sm">Địa chỉ: </span>
                <span className="text-gray-600 text-sm">
                  225/7 Phạm Ngũ Lão, Cư Ê Bua, Buôn Ma Thuột, Tỉnh Đak Lak
                </span>
              </li>
              {/* <li className="flex items-center md:justify-normal justify-center pt-2 gap-3">
                <Link
                  href="https://www.facebook.com/pham.chau.32117"
                  target="_blank"
                  className="text-gray-500">
                  <img
                    src={FACEBOOK_ICON}
                    alt="facebook"
                    title="facebook"
                    className="size-8"
                    loading="lazy"
                  />
                </Link>
                <Link
                  href="https://zalo.me/0932585600"
                  target="_blank"
                  className="text-gray-500">
                  <img
                    src={ZALO_ICON}
                    alt="zalo"
                    title="zalo"
                    className="size-8"
                    loading="lazy"
                  />
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
