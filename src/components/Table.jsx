import { cn } from '../lib/utils';

const Table = ({
  topContent = null,
  data,
  className = '',
  editConversationNumber = false,
  onRowClick = () => {},
}) => {
  const renderCellContent = (row, key) => {
    const basicBtnClasses = 'w-8 h-5 flex justify-center items-center rounded-lg transition duration-200 ease-in-out hover:bg-[var(--cultured)]';

    if (key === 'Status') {
      return (
        <span
          className={cn(
            'inline-block min-w-[80px] py-[5px] px-[5px] text-xs tracking-tight rounded-[30px]',
            row[key] === 'Nieaktywny' &&
              'text-[#EE6663] border border-[#EE6663] bg-[#FFC5C5]',
            row[key] === 'Aktywny' &&
              'text-[#008767] border border-[#00b087] bg-[#A7E7D8]'
          )}
        >
          {row[key]}
        </span>
      );
    }

    if (editConversationNumber && key === 'Ilość rozmów') {
      return (
        <div className='relative -left-3 flex justify-between items-center'>
          <button className={cn(basicBtnClasses, 'text-[#EE6663]')}>-</button>
            {row[key]}
          <button className={cn(basicBtnClasses, 'text-[var(--jungle-green)]')}>+</button>
        </div>
      );
    }

    return row[key];
  };
  return (
    <div
      className={cn(
        `bg-white max-1440:w-[calc(100vw-88px-64px-320px-17px)] max-1024:w-full overflow-x-auto`,
        className
      )}
    >
      {topContent && <div className="sticky left-0 pb-8">{topContent}</div>}
      <table className="w-full whitespace-nowrap relative">
        <thead>
          <tr className="bg-[var(--lotion)] border-b border-[var(--bright-gray)]">
            {Object.keys(data[0]).map((key, index) => (
              <th
                key={index}
                className={cn(
                  'py-[18px] px-6 text-left font-medium text-sm text-[#b5b7c0] tracking-tight max-1024:py-[9px] max-1024:px-2 max-1024:text-xs',
                  key === 'Status' && 'text-center'
                )}
              >
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={cn("border-b border-[var(--bright-gray)] cursor-pointer transition duration-100 ease-in hover:bg-[var(--ghost-white)]", editConversationNumber && 'hover:bg-transparent cursor-auto')}
              onClick={() => onRowClick(row)}
            >
              {Object.keys(row).map((key, index) => (
                <td
                  key={index}
                  className={cn(
                    'py-6 px-6 text-left font-medium text-sm text-[var(--granite-gray)] tracking-tight max-1024:py-3 max-1024:px-2 max-1024:text-xs',
                    key === 'Status' && 'text-center'
                  )}
                >
                  {renderCellContent(row, key)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
