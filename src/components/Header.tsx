type HeaderProps = {
  showTitle?: boolean;
};

const Header = ({ showTitle }: HeaderProps) => {
  return (
    <header className="mb-12 sticky top-0 text-sm">
      <div className="flex gap-2 items-center">
        <img src="/sonny.jpeg" alt="logo" className="rounded-full w-10 h-10" />
        <div className="font-semibold">Alycia and Sean's WNRS?</div>
      </div>
      {showTitle && <h1>Authenticated</h1>}
    </header>
  );
};

export default Header;
