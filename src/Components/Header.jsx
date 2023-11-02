import  { useEffect } from "react";
import { BrandButton } from ".";

export const Header = (isFixed, setIsFixed) => {


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [setIsFixed]);

    return (
        <div className={`z-20 bg-white w-full px-12 py-6 flex justify-between items-center shadow-md ${isFixed ? 'fixed top-0 left-0 transition-all duration-300 ease-in-out' : ''}`}>
            <div>
                <h3 className="font-bold text-3xl text-orange-800">
                    CVC Charity
                </h3>
            </div>
            <ul className="flex gap-6">
                <li className="text-orange-900 font-semibold text-base capitalize">
                    Our work and impact
                </li>
                <li className="text-orange-900 font-semibold text-base capitalize">
                    How we can help
                </li>
                <li className="text-orange-900 font-semibold text-base capitalize">
                    Support us
                </li>
                <li className="text-orange-900 font-semibold text-base capitalize">
                    about us
                </li>
            </ul>
            <div>
                <BrandButton
                    className="w-52 py-3"
                    onClick={undefined}
                    label="Donate Now"
                />
            </div>
        </div>
    );
};
