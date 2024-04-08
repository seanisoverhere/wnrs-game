type HeaderProps = {
  isAuthenticated?: boolean;
};

const Header = ({ isAuthenticated }: HeaderProps) => {
  return (
    <header className="mb-12 sticky top-0 text-sm">
      <div className="flex gap-2 items-center">
        <img
          src={`${isAuthenticated ? "/sonny.jpeg" : "sonny-sloth.jpeg"}`}
          alt="logo"
          className="rounded-full w-10 h-10"
        />
        <div className="font-semibold">
          Alycia and Sean's WNRS {isAuthenticated ? "!!!!" : "?"}
        </div>
      </div>
    </header>
  );
};

export default Header;
