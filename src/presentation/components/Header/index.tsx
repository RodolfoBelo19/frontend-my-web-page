import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-gray-800">
      <div className="container mx-auto py-4 px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex w-full items-center">
            <Link href="/" className="text-white w-full md:text-left text-center text-lg font-semibold">
              Meu Site
            </Link>
          </div>
          <div className="hidden md:block">
            <nav className="ml-10 flex items-center space-x-4">
              <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Início
              </Link>
              <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Sobre
              </Link>
              <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contato
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
