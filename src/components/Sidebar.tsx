import Image from "next/image";
import Link from 'next/link'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export function Sidebar() {
  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Image
                  src="/home.png"
                  alt="roger"
                  width={100}
                  height={100}
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                ></Image>
                <span className="ml-3">Home</span>
              </Link>
            </li>
            <hr />
            <li>
              <Link
                href="/vitormiura"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Image
                  src="/pirula.png"
                  alt="roger"
                  width={100}
                  height={100}
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                ></Image>
                <span className="ml-3">Vitor Miura</span>
              </Link>
            </li>
            <li>
              <Link
                href="/igoroliveira"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Image
                  src="/roger.png"
                  alt="roger"
                  width={100}
                  height={100}
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                ></Image>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Igor Oliveira
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/viktormarinho"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Image
                  src="/kmudo.png"
                  alt="roger"
                  width={100}
                  height={112}
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                ></Image>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Viktor Marinho
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/danielhenrique"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Image
                  src="/dino.png"
                  alt="roger"
                  width={100}
                  height={112}
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                ></Image>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Daniel Henrique
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/viniciusventura"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Image
                  src="/android.png"
                  alt="roger"
                  width={100}
                  height={112}
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                ></Image>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Vinícius Ventura
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/kaiquecosta"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Image
                  src="/20230227_151853 (3).jpg"
                  alt="roger"
                  width={100}
                  height={112}
                  className="rounded-2xl flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                ></Image>
                <span className="flex-1 ml-3 whitespace-nowrap">Kaique Costa</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
