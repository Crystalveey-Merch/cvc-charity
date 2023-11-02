import BannerImg from "../../assets/Images/banner.jpg";

export const Banner = () => {
    return (
        <div className="relative w-full">
            <img src={BannerImg} alt="banner" className="w-full h-[calc(89vh)] object-cover object-top" />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
            <div className="absolute top-0 left-0 mt-32 w-max h-full flex flex-col justify-center px-24 text-left z-10">
                <h1 className="text-white uppercase font-extrabold text-2xl p-3 bg-orange-700">
                   CVC Charity chilldren in need
                </h1>
                <p className="text-black bg-white w-max p-3 font-extrabold text-5xl uppercase">
                    Be a part of the change
                </p>
            </div>
        </div>
    )
}