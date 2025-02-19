import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="bg-gradient-to-b from-m_gray_900 to-m_gray_700 text-white py-12">
        <div className="container mx-auto px-8">
          <div className="flex flex-col items-center justify-center">
            {/* Logo and Description */}
            <div className="flex items-center gap-2">
              <Image
                src="/logo_light.svg"
                alt="Logo"
                width={150}
                height={40}
                className="rounded"
              />
            </div>

            {/* Links Section */}
            <div>
              <ul className="text-gray-200 text-base flex items-center gap-4 mt-4">
                <li>
                  <Link href="/terms-of-service">Terms of Service</Link>
                </li>
                |
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-m_gray_700">
        <hr className="w-[80%] md:w-[70%] mx-auto border-gray-400" />
        <p className="text-gray-300 text-base font-normal text-center p-4">
          © 2024 Meetmemo AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
