const LeftContainer = ({ imageSrc }) => {
  return (
    <div className="w-full lg:w-1/2 flex justify-center md:justify-start h-[100vh]">
      <img
        src={imageSrc}
        alt="Interior Design"
        className="w-full h-auto max-w-full object-cover md:max-w-[820px]"
      />
    </div>
  );
};

export default LeftContainer;
