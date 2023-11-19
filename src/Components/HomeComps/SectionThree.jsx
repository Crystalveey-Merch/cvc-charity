import { BrandButton } from "../BrandButton";
import imgOne from "../../assets/Images/SecThree/image-one.jpg";
import imgTwo from "../../assets/Images/SecThree/image-two.jpg";
import imgThree from "../../assets/Images/SecThree/image-three.jpg";
import imgFour from "../../assets/Images/SecThree/image-four.jpg";

export const SectionThree = () => {
    const stories = [
        { id: 1, title: "Andrew's", },
        { id: 2, title: "Leila's", },
        { id: 3, title: "Molly's", },
        { id: 4, title: "Suhail's", },
    ]
    return (
        <div className="w-full min-h-[calc(100vh)] px-36 py-10 flex gap-6 justify-between items-center 2xl:px-24 xl:min-h-max xl:py-16 xl:px-10 xl:justify-center lg:px-5 md:flex-col md:gap-10 md:px-8 sm:px-4">
            <div className="flex flex-col place-self-center gap-11 w-[499px] 2xl:w-[465px] xl:flex-grow xl:w-[400px] lg:w-[150px] md:w-full md:gap-4">
                <h2 className="font-extrabold text-6xl lg:text-5xl md:text-4xl sm:text-3xl">
                    In their own words
                </h2>
                <div className="flex flex-col gap-10 md:gap-4">
                    <div className="text-xl font-normal flex flex-col gap-8 xl:text-lg lg:text-base md:gap-3"
                        style={{ wordSpacing: "0.18rem", lineHeight: "1.5" }}
                    >
                        <p>
                            When young people want to tell their story, we listen. These young people still believe in a better tomorrow. They know they can break free from those who hurt them, have a happy home life, feel better over time.
                        </p>
                        <p>
                            Often their stories aren&rsquo;t easy to tell, but they tell them. Because they know sharing their story will help them and others like them.
                        </p>
                    </div>
                    <BrandButton
                        className="w-52 py-4 rounded-none bg-black hover:bg-gray-900 border-black hover:border-gray-900 lg:py-2"
                        onClick={undefined}
                        label={
                            <div className="flex items-center gap-2 justify-between">
                                <p className="text-white">
                                    Read their stories
                                </p>
                                <p className="text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </p>
                            </div>
                        }
                    />
                </div>
            </div>
            <ul className="grid grid-cols-2 grid-flow-row md:w-full">
                {stories.map((story) => (
                    <li className="relative w-[330px] h-[46vh] flex justify-center items-end pb-6 group cursor-pointer overflow-hidden 2xl:w-[300px] xl:w-[260px] xl:h-[290px] lg:w-[170px] lg:h-[210px] md:w-full" key={story.id}>
                        <div className="bg-black bg-opacity-50 absolute top-0 left-0 h-full w-full z-10"></div>
                        <button className="flex gap-2 items-center z-10">
                            <p className="text-white font-extrabold text-lg lg:text-base">
                                {story.title} story
                            </p>
                            <p className="text-orange-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </p>
                        </button>
                        <img src={(story.id === 1) ? imgOne : (story.id === 2) ? imgTwo : (story.id === 3) ? imgThree : imgFour} alt={story.title + "image"} className="absolute top-0 left-0 h-full w-full group-hover:scale-110 transition-all transform duration-300 ease-in-out" />
                    </li>
                ))}
            </ul>
        </div>
    )
}