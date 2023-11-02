export const SectionFour = () => {
  const waysToSupport = [
    {
      id: 1,
      title: "Donate",
    },
    {
      id: 2,
      title: "Volunteer",
    },
    {
      id: 3,
      title: "Fundraise",
    },
    {
      id: 4,
      title: "Partnerships",
    },
    {
      id: 5,
      title: "Trusts",
    },
  ];
  return (
    <div className="py-16 h-60 w-full bg-emerald-700 flex gap-16 justify-center items-center">
      <h4 className="text-white text-3xl font-bold font-serif">
        More ways to support us
      </h4>
      <ul className="flex gap-4 items-center">
        {waysToSupport.map((support) => (
          <li key={support.id} className="flex flex-col gap-2 items-center w-[120px] text-center">
            <div className="bg-orange-300 w-20 h-20 rounded-full flex justify-center items-center shadow-xl"></div>
            <p className="text-white text-base font-semibold capitalize">
              {support.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
