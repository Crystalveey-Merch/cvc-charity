export const OurImpact = () => {
  const outComes = [
    {
      title: "300+",
      subTitle: "children supported",
    },
    {
      title: "9",
      subTitle: "years of impact",
    },
    {
      title: "5",
      subTitle: "schools supported",
    },
    {
      title: "3",
      subTitle: "countries supported",
    },
    {
      title: "10",
      subTitle: "projects supported",
    },
    {
      title: "100%",
      subTitle: "of your donation goes to the cause",
    },
  ];

  return (
    <div className="py-14 px-36 flex flex-col gap-8 2xl:px-24 xl:px-10 lg:px-5 md:py-11 sm:gap-6">
      <h4 className="text-left text-[2.5rem] font-bold text-black uppercase lg:text-4xl md:text-3xl sm:text-[1.6rem]">
        Our impact in numbers
      </h4>
      <ul className="mt-4 grid grid-cols-3 grid-flow-row gap-9 md:gap-6 sm:grid-cols-2">
        {outComes.map((item, index) => (
          <li
            key={index}
            className="flex flex-col gap-1 items-start text-left text-xl font-normal leading-relaxed text-black xl:text-lg md:text-base"
          >
            <span className="text-5xl font-bold text-orange-700 xl:text-4xl">
              {item.title}
            </span>
            <span>
                {item.subTitle}
                </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
