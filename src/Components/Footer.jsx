import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <div className="flex flex-col gap-10 px-20 pl-48 pt-16 pb-8 bg-orange-800 2xl:pl-20 xl:pl-7 sm:gap-6 sm:pl-4 sm:px-5">
            <div className="flex text-white justify-between pr-40 2xl:pr-16 xl:pr-7 lg:flex lg:flex-wrap lg:gap-16 sm:gap-8 sm:pr-0">
                <div className="flex flex-col gap-4 w-60 lg:w-5/12 lg:order-1 sm:w-full">
                    <h2 className="font-lifesavers font-bold text-2xl text-white">
                        CVC Charity
                    </h2>
                    <p className=" text-white font-semibold text-base">
                        Helping the needy in the society
                    </p>
                </div>
                <div className="flex gap-40  2xl:gap-20 xl:gap-12 lg:w-full lg:order-3 lg:justify-between lg:pr-10 sm:flex-wrap">
                    <ul className="flex flex-col gap-6 ">
                        <li className="middle hover:text-gray-750 cursor-pointer w-max">
                            Company
                        </li>
                        <li className="middle text-white font-medium text-sm cursor-pointer w-max">
                            About Us
                        </li>
                        <li className="middle text-white font-medium text-sm cursor-pointer w-max">
                            FAQs
                        </li>
                        <Link to="/contact-us"
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            <li className="middle text-white font-medium text-sm cursor-pointer w-max">
                                Contact US
                            </li>
                        </Link>
                    </ul>
                    <ul className="flex flex-col gap-6 w-max">
                        <li className="middle  hover:text-gray-750 cursor-pointer">
                            Resources
                        </li>
                        <li className="middle text-white font-medium text-sm cursor-pointer w-max">
                            Blog
                        </li>
                        <li className="middle text-white font-medium text-sm cursor-pointer w-max">
                            {" "}
                            Privacy Policy
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-6 w-max">
                        <li className="middle  hover:text-gray-750 cursor-pointer">
                            Contact
                        </li>
                        <li className=" flex gap-1 items-center text-white font-medium text-sm cursor-pointer w-max">
                            <a
                                href="mailto:office.crystalveey@gmail.com"
                                className="hover:text-gray-750"
                            >
                                office.crystalveey@gmail.com
                            </a>
                        </li>
                        <li className=" flex gap-1 items-center text-white font-medium text-sm cursor-pointer w-max">
                            <a href="tel:+2548126091411" className="hover:text-gray-750">
                                +254 812 609 1411
                            </a>
                        </li>
                    </ul>
                </div>
                {/* <div className="lg:w-5/12 lg:order-2 sm:w-full">
                    <h4 className=" text-white text-base font-semibold ">Follow Us</h4>
                    <p></p>
                </div> */}
            </div>
            <div className=" border-gray-100 pt-6 text-center">
                <p className="text-white font-semibold base">
                    &copy; {new Date().getFullYear()} CVC Charity.
                    <span className="text-gray-400 pl-2"> All Rights Reserved</span>
                </p>
            </div>
        </div>
    );
};
