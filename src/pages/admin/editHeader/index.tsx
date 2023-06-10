import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const EditHeader: React.FC = () => {
  return (
    <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }: any) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-500 hover:bg-gray-400 focus:outline-none focus-visible:ring">
                <span>Edit Header</span>
                <ChevronDownIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <form>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="header"
                    >
                      Name Logo
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                      id="header"
                      type="text"
                      placeholder="Header"
                    />
                  </div>
                </form>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default EditHeader;
