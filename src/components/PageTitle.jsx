const PageTitle = ({ title }) => {
  return (
    <div className="mx-4 max-1024:mx-0 border-b-2 border-[var(--bright-gray)]">
      <h1 className="inline-block pr-2.5 pb-5 text-lg text-[var(--jungle-green)] border-b-2 border-[var(--jungle-green)]">{title}</h1>
    </div>
  );
}

export default PageTitle