import { Disclosure, Transition } from "@headlessui/react";

const Sidebar = ({ open = false, setOpen }) => {
  return (
    <>
      <Transition show={open}>
        {/* Sliding sidebar */}
        <Transition.Child
          className="fixed right-0 top-0 w-[250px] z-30 h-screen"
          enter="transition ease-in-out duration-300 transform"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div
            id="sidebar"
            className={`fixed right-0 top-0 w-[250px] h-screen bg-almost-white pt-20 p-8 z-50`}
          >
            <button
              onClick={() => setOpen(false)}
              aria-expanded={open}
              aria-controls="sidebar"
            >
              <img
                className="absolute top-5 right-5"
                src="/images/icon-close-menu.svg"
                alt="Close Menu"
              />
            </button>
            <ul className="flex flex-col space-y-3">
              <li>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex items-center text-left">
                        <span className="mr-4">Home</span>
                        <img
                          clasName=""
                          src={`images/icon-arrow-${open ? "up" : "down"}.svg`}
                          alt="Arrow"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        <ul className="flex flex-col space-y-3">
                          <a href="/">
                            <li className="cursor-pointer">Home</li>
                          </a>
                          <li className="cursor-pointer">1 History</li>
                          <li className="cursor-pointer">2 Our Team</li>
                          <li className="cursor-pointer">3 Blog</li>
                          <li className="cursor-pointer">4 History</li>
                          <li className="cursor-pointer">5 Our Team</li>
                          <li className="cursor-pointer">6 Blog</li>
                          <li className="cursor-pointer">7 History</li>
                          <li className="cursor-pointer">8 Our Team</li>
                          <li className="cursor-pointer">9 Blog</li>
                          <li className="cursor-pointer">10 Blogs</li>
                          <li className="cursor-pointer">1 History</li>
                          <li className="cursor-pointer">2 Our Team</li>
                          <li className="cursor-pointer">3 Blog</li>
                          <li className="cursor-pointer">4 History</li>
                          <li className="cursor-pointer">5 Our Team</li>
                          <li className="cursor-pointer">6 Blog</li>
                          <li className="cursor-pointer">7 History</li>
                          <li className="cursor-pointer">8 Our Team</li>
                          <li className="cursor-pointer">9 Blog</li>
                          <li className="cursor-pointer">10 Blogs</li>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </li>
              <li>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex items-center text-left">
                        <span className="mr-4">CDS MMS</span>
                        <img
                          clasName=""
                          src={`images/icon-arrow-${open ? "up" : "down"}.svg`}
                          alt="Arrow"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        <ul className="flex flex-col space-y-3">
                          <a href="/">
                            <li className="cursor-pointer">Home</li>
                          </a>
                          <li className="cursor-pointer">1 History</li>
                          <li className="cursor-pointer">2 Our Team</li>
                          <li className="cursor-pointer">3 Blog</li>
                          <li className="cursor-pointer">4 History</li>
                          <li className="cursor-pointer">5 Our Team</li>
                          <li className="cursor-pointer">6 Blog</li>
                          <li className="cursor-pointer">7 History</li>
                          <li className="cursor-pointer">8 Our Team</li>
                          <li className="cursor-pointer">9 Blog</li>
                          <li className="cursor-pointer">10 Blogs</li>
                          <li className="cursor-pointer">1 History</li>
                          <li className="cursor-pointer">2 Our Team</li>
                          <li className="cursor-pointer">3 Blog</li>
                          <li className="cursor-pointer">4 History</li>
                          <li className="cursor-pointer">5 Our Team</li>
                          <li className="cursor-pointer">6 Blog</li>
                          <li className="cursor-pointer">7 History</li>
                          <li className="cursor-pointer">8 Our Team</li>
                          <li className="cursor-pointer">9 Blog</li>
                          <li className="cursor-pointer">10 Blogs</li>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </li>
              <li>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex items-center text-left">
                        <span className="mr-4">NO VIRUS</span>
                        <img
                          clasName=""
                          src={`images/icon-arrow-${open ? "up" : "down"}.svg`}
                          alt="Arrow"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        <ul className="flex flex-col space-y-3">
                          <a href="/">
                            <li className="cursor-pointer">NO VIRUS</li>
                          </a>
                          <li className="cursor-pointer">1 History</li>
                          <li className="cursor-pointer">2 Our Team</li>
                          <li className="cursor-pointer">3 Blog</li>
                          <li className="cursor-pointer">4 History</li>
                          <li className="cursor-pointer">5 Our Team</li>
                          <li className="cursor-pointer">6 Blog</li>
                          <li className="cursor-pointer">7 History</li>
                          <li className="cursor-pointer">8 Our Team</li>
                          <li className="cursor-pointer">9 Blog</li>
                          <li className="cursor-pointer">10 Blogs</li>
                          <li className="cursor-pointer">1 History</li>
                          <li className="cursor-pointer">2 Our Team</li>
                          <li className="cursor-pointer">3 Blog</li>
                          <li className="cursor-pointer">4 History</li>
                          <li className="cursor-pointer">5 Our Team</li>
                          <li className="cursor-pointer">6 Blog</li>
                          <li className="cursor-pointer">7 History</li>
                          <li className="cursor-pointer">8 Our Team</li>
                          <li className="cursor-pointer">9 Blog</li>
                          <li className="cursor-pointer">10 Blogs</li>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </li>
              <li>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex items-center text-left">
                        <span className="mr-4">GODS</span>
                        <img
                          clasName=""
                          src={`images/icon-arrow-${open ? "up" : "down"}.svg`}
                          alt="Arrow"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        <ul className="flex flex-col space-y-3">
                          <a href="/">
                            <li className="cursor-pointer">GODS</li>
                          </a>
                          <li className="cursor-pointer">1 History</li>
                          <li className="cursor-pointer">2 Our Team</li>
                          <li className="cursor-pointer">3 Blog</li>
                          <li className="cursor-pointer">4 History</li>
                          <li className="cursor-pointer">5 Our Team</li>
                          <li className="cursor-pointer">6 Blog</li>
                          <li className="cursor-pointer">7 History</li>
                          <li className="cursor-pointer">8 Our Team</li>
                          <li className="cursor-pointer">9 Blog</li>
                          <li className="cursor-pointer">10 Blogs</li>
                          <li className="cursor-pointer">1 History</li>
                          <li className="cursor-pointer">2 Our Team</li>
                          <li className="cursor-pointer">3 Blog</li>
                          <li className="cursor-pointer">4 History</li>
                          <li className="cursor-pointer">5 Our Team</li>
                          <li className="cursor-pointer">6 Blog</li>
                          <li className="cursor-pointer">7 History</li>
                          <li className="cursor-pointer">8 Our Team</li>
                          <li className="cursor-pointer">9 Blog</li>
                          <li className="cursor-pointer">10 Blogs</li>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </li>
              <li>----</li>
              <li>----</li>
            </ul>

            <div className="flex flex-col space-y-5 items-center justify-items-center pt-8">
              <div className="w-full"></div>
            </div>
          </div>
          {/* ... */}
        </Transition.Child>
        <Transition.Child
          enter="transition-opacity ease-linear duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* ... */}
          <div
            onClick={() => setOpen(false)}
            className={`"w-full h-full fixed bg-black opacity-80 z-10 inset-0`}
          ></div>
        </Transition.Child>
      </Transition>
    </>
  );
};

export default Sidebar;
