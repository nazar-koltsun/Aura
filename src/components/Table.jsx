import { cn } from '../lib/utils';
import Button from './Button';
import EyeIcon from './icons/EyeIcon';
import DownloadIcon from './icons/DownloadIcon';

const TableCheckBox = ({ onChange }) => {
  return (
    <input
      className="flex items-center justify-center w-4 h-4 border border-[#dedede] rounded-[4px]"
      type="checkbox"
      onChange={onChange}
    />
  );
};

const Table = ({
  topContent = null,
  data,
  className,
  editConversationNumber = false,
  hasActions = false,
  isHistoryTable = false,
  onRowClick = () => {},
}) => {
  const thBasicClasses =
    'py-[18px] px-6 text-left font-medium text-sm text-[#b5b7c0] tracking-tight max-1024:py-[9px] max-1024:px-2 max-1024:text-xs';
  const tdBasicClasses =
    'py-5 px-6 h-[69px] text-left font-medium text-sm text-[var(--granite-gray)] tracking-tight max-1024:py-3 max-1024:px-2 max-1024:text-xs';

  const renderCellContent = (row, key) => {
    const basicBtnClasses =
      'w-8 h-5 flex justify-center items-center rounded-lg transition duration-200 ease-in-out hover:bg-[var(--cultured)]';

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
        <div className="relative -left-3 flex justify-between items-center">
          <button className={cn(basicBtnClasses, 'text-[#EE6663]')}>-</button>
          {row[key]}
          <button className={cn(basicBtnClasses, 'text-[var(--jungle-green)]')}>
            +
          </button>
        </div>
      );
    }

    if (key === 'Podgląd') {
      if (row[key]) {
        return (
          <div className="flex justify-center items-center">
            <EyeIcon />
          </div>
        );
      }
      return null;
    }

    if (key === 'Raport') {
      return (
        <Button variant='flat' className='text-sm max-1024:text-xs'>{row[key]}</Button>
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
            {hasActions && (
              <th className={cn(thBasicClasses, 'w-5 pl-0 pr-0')}></th>
            )}
            {Object.keys(data[0]).map((key, index) => (
              <th
                key={index}
                className={cn(
                  thBasicClasses,
                  key === 'Status' && 'text-center',
                  key === 'Podgląd' && 'text-center'
                )}
              >
                {key}
              </th>
            ))}
            {isHistoryTable && (
              <th className={cn(thBasicClasses, 'w-2/6 text-right')}>
                <div className="flex justify-end">
                  <Button
                    variant="flat"
                    className="text-sm text-[var(--taupe-gray)] max-1024:text-xs max-1024:gap-2"
                  >
                    Pobierz wszystkie <DownloadIcon />
                  </Button>
                </div>
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={cn(
                'border-b border-[var(--bright-gray)] cursor-pointer transition duration-100 ease-in hover:bg-[var(--ghost-white)]',
                (editConversationNumber || isHistoryTable) &&
                  'hover:bg-transparent cursor-auto'
              )}
              onClick={() => onRowClick(row)}
            >
              {hasActions && (
                <td className={cn(tdBasicClasses, 'w-5 px-0 max-1024:px-0')}>
                  <TableCheckBox />
                </td>
              )}
              {Object.keys(row).map((key, index) => (
                <td
                  key={index}
                  className={cn(
                    tdBasicClasses,
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
