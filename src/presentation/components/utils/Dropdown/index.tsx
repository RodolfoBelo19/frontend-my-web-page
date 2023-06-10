import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

type DropDownProps = {
  id?: string;
  title_dropdown: string;
  title_input?: string;
  placeholder_input?: string;
  is_image?: boolean;
  is_multiple_image?: boolean;
  is_text_input?: boolean;
};

export const DropDown = (props: DropDownProps) => {
  return (
    <div className="w-full px-4 my-5">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }: any) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-500 hover:bg-gray-400 focus:outline-none focus-visible:ring">
                <span>{`${product?.id ? "Edit" : "Create"} ${
                  props.title_dropdown
                }`}</span>
                <ChevronDownIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <form>
                  {props.is_text_input && (
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="header"
                      >
                        {props.title_input}
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                        id="header"
                        type="text"
                        placeholder={props.placeholder_input}
                      />
                    </div>
                  )}
                  {props.is_image && (
                    <div className="my-2">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="header"
                      >
                        Upload image
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                        id="header"
                        type="file"
                        accept="image/*"
                        placeholder="Upload image"
                      />
                    </div>
                  )}
                  {props.is_multiple_image && (
                    <div className="my-2">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="header"
                      >
                        Upload images
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                        id="header"
                        type="file"
                        accept="image/*"
                        placeholder="Upload image"
                        multiple
                      />
                    </div>
                  )}
                </form>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

type Product = {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
  link_redirect?: string;
  cover_image?: string;
  multiple_image?: string[];
};

type DropdownProductProps = {
  title_dropdown: string;
  is_cover_image?: boolean;
  is_multiple_image?: boolean;
  name?: string;
  description?: string;
  price?: number;
  link_redirect?: string;
};

const product: Product = [
  {
    id: "1",
    name: "Product 1",
    description: "Description 1",
    price: 100,
    link_redirect: "https://google.com",
    cover_image: "https://picsum.photos/200/300",
    multiple_image: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
  },
  {
    id: "2",
    name: "Product 2",
    description: "Description 2",
    price: 200,
    link_redirect: "https://google.com",
    cover_image: "https://picsum.photos/200/300",
    multiple_image: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
  },
];

export const DropdownProduct = (props: DropdownProductProps) => {
  return (
    <div className="w-full px-4 my-5">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }: any) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-500 hover:bg-gray-400 focus:outline-none focus-visible:ring">
                <span>{`${product.id ? "Edit" : "Create"} ${
                  props.title_dropdown
                }`}</span>
                <ChevronDownIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {!product?.id && (
                  <form>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="header"
                      >
                        Name
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                        id="header"
                        type="text"
                        placeholder="Name"
                        defaultValue={props.name}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="header"
                      >
                        Description
                      </label>
                      <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                        id="header"
                        placeholder="Description"
                        defaultValue={props.description}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="header"
                      >
                        Price
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                        id="header"
                        type="number"
                        placeholder="R$ 0,00"
                        defaultValue={props.price}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="header"
                      >
                        Link redirect
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                        id="header"
                        type="text"
                        placeholder="example: https://wa.me/5511999999999"
                        defaultValue={props.link_redirect}
                      />
                    </div>
                    {props.is_cover_image && (
                      <div className="my-2">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="header"
                        >
                          Upload image
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                          id="header"
                          type="file"
                          accept="image/*"
                          placeholder="Upload image"
                        />
                      </div>
                    )}
                    {props.is_multiple_image && (
                      <div className="my-2">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="header"
                        >
                          Upload images
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                          id="header"
                          type="file"
                          accept="image/*"
                          placeholder="Upload image"
                          multiple
                        />
                      </div>
                    )}
                  </form>
                )}
                {!product?.id && (
                  <div>
                    Products created:
                    {product?.map(() => (
                      <>
                        <div className="flex flex-wrap">
                          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                            <div className="bg-gray-300 rounded-xl p-4">
                              <div className="flex justify-between">
                                <div className="flex flex-col">
                                  <span className="font-bold text-gray-700">
                                    Name
                                  </span>
                                  <span className="text-gray-500">Price</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                )}
                {product?.id && (
                  <Disclosure>
                    {({ open }: any) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-500 hover:bg-gray-400 focus:outline-none focus-visible:ring">
                          <span>{`${product?.id ? "Edit" : "Create"} ${
                            props.title_dropdown
                          }`}</span>
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
                                Name
                              </label>
                              <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                                id="header"
                                type="text"
                                placeholder="Name"
                                defaultValue={props.name}
                              />
                            </div>
                            <div className="mb-4">
                              <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="header"
                              >
                                Description
                              </label>
                              <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                                id="header"
                                placeholder="Description"
                                defaultValue={props.description}
                              />
                            </div>
                            <div className="mb-4">
                              <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="header"
                              >
                                Price
                              </label>
                              <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                                id="header"
                                type="number"
                                placeholder="R$ 0,00"
                                defaultValue={props.price}
                              />
                            </div>
                            <div className="mb-4">
                              <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="header"
                              >
                                Link redirect
                              </label>
                              <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                                id="header"
                                type="text"
                                placeholder="example: https://wa.me/5511999999999"
                                defaultValue={props.link_redirect}
                              />
                            </div>
                            {props.is_cover_image && (
                              <div className="my-2">
                                <label
                                  className="block text-gray-700 text-sm font-bold mb-2"
                                  htmlFor="header"
                                >
                                  Upload image
                                </label>
                                <input
                                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                                  id="header"
                                  type="file"
                                  accept="image/*"
                                  placeholder="Upload image"
                                />
                              </div>
                            )}
                            {props.is_multiple_image && (
                              <div className="my-2">
                                <label
                                  className="block text-gray-700 text-sm font-bold mb-2"
                                  htmlFor="header"
                                >
                                  Upload images
                                </label>
                                <input
                                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                                  id="header"
                                  type="file"
                                  accept="image/*"
                                  placeholder="Upload image"
                                  multiple
                                />
                              </div>
                            )}
                          </form>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                )}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};
