import { Tab, initTE } from "tw-elements";

initTE({ Tab });

function App() {
    return (
        <>
            <div className="min-h-[400px] w-[600px] bg-[#262626] text-white">
                <div className="m-4 flex flex-col gap-4">
                    <p className="text-2xl font-semibold">Database Viewer</p>
                    <ul
                        className="mr-4 flex list-none flex-col flex-wrap pl-0"
                        role="tablist"
                        data-te-nav-ref
                    >
                        <li
                            role="presentation"
                            className="flex-grow text-center"
                        >
                            <a
                                href="#tabs-profile01"
                                className="focus:border-transparen my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                                data-te-toggle="pill"
                                data-te-target="#tabs-profile01"
                                role="tab"
                                aria-controls="tabs-profile01"
                                aria-selected="false"
                            >
                                Profile
                            </a>
                        </li>
                        <li
                            role="presentation"
                            className="flex-grow text-center"
                        >
                            <a
                                href="#tabs-profile02"
                                className="focus:border-transparen my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                                data-te-toggle="pill"
                                data-te-target="#tabs-profile02"
                                role="tab"
                                aria-controls="tabs-profile02"
                                aria-selected="false"
                            >
                                Profile
                            </a>
                        </li>
                        <li
                            role="presentation"
                            className="flex-grow text-center"
                        >
                            <a
                                href="#tabs-profile03"
                                className="focus:border-transparen my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                                data-te-toggle="pill"
                                data-te-target="#tabs-profile03"
                                role="tab"
                                aria-controls="tabs-profile03"
                                aria-selected="false"
                            >
                                Profile
                            </a>
                        </li>
                    </ul>

                    <div className="my-2">
                        <div
                            className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                            id="tabs-profile01"
                            role="tabpanel"
                            aria-labelledby="tabs-home-tab01"
                            data-te-tab-active
                        >
                            Tab 1 content
                        </div>
                        <div
                            className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                            id="tabs-profile03"
                            role="tabpanel"
                            aria-labelledby="tabs-profile-tab03"
                        >
                            Tab 2 content
                        </div>
                        <div
                            className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                            id="tabs-messages03"
                            role="tabpanel"
                            aria-labelledby="tabs-profile-tab03"
                        >
                            Tab 3 content
                        </div>
                        <div
                            className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                            id="tabs-contact03"
                            role="tabpanel"
                            aria-labelledby="tabs-contact-tab03"
                        >
                            Tab 4 content
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
