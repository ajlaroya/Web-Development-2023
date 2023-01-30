const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 p-5 md:px-10">
      <div className="relative flex items-center cursor-pointer my-auto text-white">
        <span className=" font-[500]">Arthur Laroya ✪</span>
      </div>
      <div className="flex items-center justify-center text-2xl text-white">〄</div>
      <div className="flex items-center justify-end text-white">Menu</div>
    </header>
  );
};

export default Header;
