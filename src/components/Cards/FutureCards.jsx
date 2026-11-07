function FutureCards({ imgSrc, logo, logoTitle, logoHeader, btn }) {
  return (
    <div>
      <div className="bg-[#ffffff] shadow-Card rounded-xl border border-[#EAEAEA] p-4 flex-col justify-between hover:shadow-xl transition-shadow duration-300">
        <div className="rounded-xl overflow-hidden mb-4">
          <img
            src={imgSrc}
            alt="Palm Hills"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="mb-4 px-2 flex justify-start gap-2">
          <img src={logo} alt="logo" className=" h-auto object-contain" />
          {logoTitle && logoHeader && (
            <div className="flex-col justify-center items-center mb-2 mt-2">
              <h3 className="text-[20px] font-lato font-bold">{logoHeader}</h3>
              <p className="text-[12px] font-lato font-bold text-[#847D7D]">
                {logoTitle}
              </p>
            </div>
          )}
        </div>
        <div className="m-5">{btn}</div>
      </div>
    </div>
  );
}

export default FutureCards;
