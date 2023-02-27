import Head from "next/head";
import { Sidebar } from "../components/Sidebar";

export default function Miura() {
  return (
    <>
      <Head>
        <title>Vitor Miura</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <div className="w-full h-2 bg-gray-50">
        <img className="h-full w-full object-cover" src="/bosch_faixa.svg" />
      </div>
      <div className="absolute p-4 sm:ml-64 z-50">
        <div className="py-4 px-10 rounded-lg">
          <div className="grid grid-cols-8 mb-8 gap-10">
            <div className="flex items-center justify-start">
              <img
                src="/pirula.png"
                className="max-h-full p-1 bg-blue-200 rounded-full"
              />
            </div>
            <div className="col-span-7 flex flex-col justify-center items-start h-36">
              <a
                href="https://vitormiura.dev/"
                className="text-3xl font-bold"
                target={"_blank"}
              >
                Vitor Miura Higa
              </a>
              <p className="text-2xl">19 years old</p>
              <div className="flex gap-3 mt-6">
                <a href="https://github.com/vitormiura" target="_blank">
                  <img
                    src="/brand-github.svg"
                    className="flex items-center p-2 w-12 bg-blue-50 rounded-full hover:bg-blue-100 transition-all duration-300 hover:shadow cursor-pointer"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/vitormiura/"
                  target="_blank"
                >
                  <img
                    src="/brand-linkedin.svg"
                    className="flex items-center p-2 w-12 bg-blue-50 rounded-full hover:bg-blue-100 transition-all duration-300 hover:shadow cursor-pointer"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="h-48 py-4">
            <h2 className="mb-2 text-2xl font-bold">Education 📚</h2>
            <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>
                Curso Técnico em Informatica para Internet | Senai Roberto Mange
                | 2021 - 2022
              </li>
              <li>
                Curso de Desenvolvimento de Sistemas | Senai Roberto Mange |
                2022 - Atual
              </li>
              <li>Engenharia de Computação | Univesp | 2022 - Atual</li>
            </ul>
          </div>

          <div className="h-48 py-4">
            <h2 className="mb-2 text-2xl font-bold">Hobbies ❤️</h2>
            <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>Sport Fishing</li>
              <li>
                <a
                  href="https://soundcloud.com/vitor-311017151"
                  target={"_blank"}
                  className="hover:text-blue-500"
                >
                  Musical Production
                </a>
              </li>
              <li>Gym</li>
              <li>Programming</li>
            </ul>
          </div>

          <div className="h-48 py-4">
            <h2 className="mb-2 text-2xl font-bold">Projects 💼</h2>
            <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>
                <strong>Compartilhando Sucessos</strong> - A web-platform to run
                the program "Compartilhando Sucessos", an event made by
                GS/OIS-LA and C/FIO-LA.
              </li>
              <li>
                <strong>Bosch Einer</strong> - The ETS Toolkit and Developer
                ecossystem, revamped (Experience using Typescript, ReactJS,
                Microservices and Monorepos).
              </li>
              <li>
                <strong>RPA Avárias WorkON</strong> - Automation made with
                AA360, to automatically checks WorkON's that breakdown exceeds
                the insurance amount.
              </li>
              <li>
                <a
                  href="https://vitormiura.dev/blog"
                  target={"_blank"}
                  className="hover:text-blue-500"
                >
                  <strong>Blog</strong> - My personal website/blog made with Astro Framework.
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img
        className="absolute top-0 w-full h-full z-0 opacity-20"
        src="bg-2.svg"
        alt=""
      />
    </>
  );
}
