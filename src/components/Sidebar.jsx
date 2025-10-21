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
            className={`overflow-auto right-0 top-0 w-[250px] h-screen bg-almost-white pt-20 p-8 z-50`}
          >
            <button
              onClick={() => setOpen(false)}
              aria-expanded={open}
              aria-controls="sidebar"
            >
              <img
                className="absolute top-5 right-5"
                src="images/icon-close-menu.svg"
                alt="Close Menu"
              />
            </button>
            <ul className="flex flex-col space-y-3">
              <li>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex items-center text-left">
                        <span className="mr-4 cursor-pointer hover:text-white hover:bg-lime-900">
                          Home
                        </span>
                        <img
                          clasName=""
                          src={`images/icon-arrow-${open ? "up" : "down"}.svg`}
                          alt="Arrow"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        <ul className="flex flex-col space-y-3">
                          <a href="/">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Home
                            </li>
                          </a>
                          <a href="/cancer">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Cancer
                            </li>
                          </a>
                          <a href="/Apricot-Seeds">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Apricot Seeds
                            </li>
                          </a>
                          <a href="./australia4k">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Australia Documentary 4K
                            </li>
                          </a>
                          <a href="./australia#cindy">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Why is Albanese refusing to listen to the voice of
                              the beautiful & proud Cindy Roberts ?
                            </li>
                          </a>

                          <a href="./verve">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              BITTER SWEET SYMPHONY
                            </li>
                          </a>
                          <a href="./enya">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Enya - Aniron (Extended) HD
                            </li>
                          </a>
                          <a href="./gopro">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              GoPro
                            </li>
                          </a>
                          <a href="./carpenter">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              If I Were A Carpenter
                            </li>
                          </a>

                          <a href="./red-centre">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              The Red Centre
                            </li>
                          </a>
                          <a href="./world8k">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              THE BEAUTY OF THE WORLD in 8K ULTRA HD
                            </li>
                          </a>
                          <a
                            href="https://yandex.com/"
                            rel="noopener"
                            target="_blank"
                          >
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              yandex.com
                            </li>
                          </a>
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
                        <span className="mr-4 cursor-pointer hover:text-white hover:bg-lime-900">
                          CDS MMS
                        </span>
                        <img
                          clasName=""
                          src={`images/icon-arrow-${open ? "up" : "down"}.svg`}
                          alt="Arrow"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        <ul className="flex flex-col space-y-3">
                          <a href="/cds-mms">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              CDS MMS
                            </li>
                          </a>
                          <a href="./dmso">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              DMSO
                            </li>
                          </a>
                          <a href="./dmso#cancer">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              DMSO and CANCER
                            </li>
                          </a>
                          <a href="./drberg">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Dr. Eric Berg DC
                            </li>
                          </a>

                          <a href="/hydrogen-peroxide">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              HYDROGEN-PEROXIDE
                            </li>
                          </a>
                          <a href="./ivermectin">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Ivermectin
                            </li>
                          </a>
                          <a href="/thyme">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              The Healing SPICE...Clears Up Phlegm & Mucus in
                              Sinus
                            </li>
                          </a>
                          <a href="/med-bed">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Med-Bed
                            </li>
                          </a>
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
                      <Disclosure.Button className="flex items-center text-left ">
                        <span className="mr-4 cursor-pointer hover:text-white hover:bg-lime-900">
                          NO VIRUS
                        </span>
                        <img
                          clasName=""
                          src={`images/icon-arrow-${open ? "up" : "down"}.svg`}
                          alt="Arrow"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        <ul className="flex flex-col space-y-3">
                          <a href="./no-virus">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              NO VIRUS
                            </li>
                          </a>
                          <a href="./antidote#ardis">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              THE ANTIDOTE
                            </li>
                          </a>
                          <a href="/bioweapon">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Bioweapon
                            </li>
                          </a>
                          <a href="./cancer#lee">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Dr. Lee Merritt ‘Breaking Down Babylonian Word
                              Magic’ June 19, 2023
                            </li>
                          </a>
                          <a href="./pharmakeia">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Pharmakeia Deception
                            </li>
                          </a>
                          <a href="./nuremberg">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Nuremberg 2.0
                            </li>
                          </a>
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
                        <span className="mr-4 cursor-pointer hover:text-white hover:bg-lime-900">
                          GOES DEEP
                        </span>
                        <img
                          clasName=""
                          src={`images/icon-arrow-${open ? "up" : "down"}.svg`}
                          alt="Arrow"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        <ul className="flex flex-col space-y-3">
                          <a href="./arrests">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900 text-transform: uppercase">
                              arrests
                            </li>
                          </a>
                          <a href="./news#intel">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900 text-transform: uppercase">
                              INTEL
                            </li>
                          </a>
                          <a href="./bible">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900 text-transform: uppercase">
                              bible
                            </li>
                          </a>
                          <a href="./turner#turner">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900 text-transform: uppercase">
                              Chris Turner talks about Richard Bruce
                            </li>
                          </a>

                          <a href="./turner">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900 text-transform: uppercase">
                              Don't Mention the Reptilians
                            </li>
                          </a>
                          <a href="./freemasonry">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900 text-transform: uppercase">
                              Freemasonry
                            </li>
                          </a>
                          <a href="./gods">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900 text-transform: uppercase">
                              GODS
                            </li>
                          </a>

                          <a href="/goesdeep">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              GOES DEEP
                            </li>
                          </a>
                          <a href="./alienwars">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Alien.Wars
                            </li>
                          </a>
                          <a href="./australia#shifter">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Amy Sever: Face-To-Face With A 'Shape-Shifter'
                              March 30, 2023
                            </li>
                          </a>
                          <a href="./monsters">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Monsters INC. The Adrenochrome Fear Factory
                              Exposed!
                            </li>
                          </a>
                          <a href="./secret">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Warning! No One Is Allowed to Enter or See These
                              Secret Locations
                            </li>
                          </a>
                          <a href="./matrix">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              The Matrix Reloaded - Highway Chase [HD]
                            </li>
                          </a>
                          <a href="./invisible-war#tenet2">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              TENET Ending scene 4K.
                            </li>
                          </a>
                          <a href="./montauk">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              The Montauk Project: The Truth is Darker Than You
                              Can Possibly Imagine
                            </li>
                          </a>
                          <a href="./cancer#lee">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Dr. Lee Merritt ‘Breaking Down Babylonian Word
                              Magic’ June 19, 2023
                            </li>
                          </a>

                          <a href="/australia">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Australia
                            </li>
                          </a>
                          <a href="/global">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Global Marshall Law
                            </li>
                          </a>
                          <a href="/bluewater">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Bluewater
                            </li>
                          </a>
                          <a href="./bogdanoff">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Bogdanoff
                            </li>
                          </a>
                          <a href="./mcallister">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              McAllister TV
                            </li>
                          </a>
                          <a href="./fritz">
                            <li className="text-green-900 cursor-pointer hover:text-white hover:bg-lime-900 text-transform: uppercase">
                              Secret Space Program SSP - Bavarian Illuminati
                            </li>
                          </a>
                          <a href="./fritz#johan">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              JOHAN FRITZ
                            </li>
                          </a>
                          <a href="./fritz#johan">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Introduction to the Secret Space Program 101 by
                              James Rink, Johan Fritz and FESIG
                            </li>
                          </a>
                          <a href="./willie">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Jim Willie
                            </li>
                          </a>

                          <a href="/braden">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Gregg Braden: NEW EVIDENCE! The Shocking TRUTH
                              About How They Built The Pyramids!!
                            </li>
                          </a>
                          <a href="./invisible-war#corporation">
                            <li className="text-black cursor-pointer text-transform: uppercase hover:text-white hover:bg-lime-900">
                              corporation
                            </li>
                          </a>
                          <a href="./invisible-war#corporation">
                            <li className="text-black cursor-pointer text-transform: uppercase hover:text-white hover:bg-lime-900">
                              Randy Cramer
                            </li>
                          </a>

                          <a href="/justinian-deception">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              Justinian Deception
                            </li>
                          </a>

                          <a href="./jordanmaxwell">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900 text-transform: uppercase">
                              Jordan Maxwell
                            </li>
                          </a>
                          <a href="./tompkins">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900 text-transform: uppercase">
                              William Tompkins
                            </li>
                          </a>
                          <a href="./wilcock">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900 text-transform: uppercase">
                              David Wilcock
                            </li>
                          </a>

                          <a href="/hyphen-glitch">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              The Chicago Manual of Style, 17th ed. (2017)
                            </li>
                          </a>
                          <a href="/hyphen-glitch">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              HYPHEN-GLITCH
                            </li>
                          </a>

                          <a href="/tom-cruise">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900 text-transform: uppercase">
                              We Interviewed Deepfake Tom Cruise
                            </li>
                          </a>
                          <a href="./bible">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900 text-transform: uppercase">
                              Paul Wallis
                            </li>
                          </a>
                          <a href="./pleiadians">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900 text-transform: uppercase">
                              Pleiadians
                            </li>
                          </a>
                          <a href="./bible">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900 text-transform: uppercase">
                              Pleiadians in the Bible
                            </li>
                          </a>
                          <a href="./billwood">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900 text-transform: uppercase">
                              PROJECT LOOKING GLASS
                            </li>
                          </a>
                          <a href="./morton">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900 text-transform: uppercase">
                              DR. SEAN DAVID MORTON
                            </li>
                          </a>

                          <a href="/supersoldiertalk">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900 text-transform: uppercase">
                              Super Soldier Talk
                            </li>
                          </a>
                          <a href="/supersoldiertalk#scam">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900 text-transform: uppercase">
                              Gila and I discuss an elaborate scam
                            </li>
                          </a>
                          <a href="/stargate">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900 text-transform: uppercase">
                              Star Gate
                            </li>
                          </a>
                          <a href="./montauk">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                              The Montauk Project: The Truth is Darker Than You
                              Can Possibly Imagine
                            </li>
                          </a>
                          <a href="/invisible-war">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900 text-transform: uppercase">
                              The Invisible War
                            </li>
                          </a>
                          <a href="/flat-earth">
                            <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900 text-transform: uppercase">
                              Flat Earth
                            </li>
                          </a>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </li>
              <a href="/site-map">
                <li className="text-black cursor-pointer hover:text-white hover:bg-lime-900">
                  INDEX
                </li>
              </a>
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
