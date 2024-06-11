import Link from 'next/link';
import React from 'react';

interface PaginationProps {
  totalCount: number;
  currentPage: number;
  perPage: number;
  basePath: string;
  onPageChange: (page: number) => void;
  indexPath: string;
}

export const Pagination: React.FC<PaginationProps> = ({ totalCount, currentPage, perPage, basePath, onPageChange, indexPath }) => {
  if (totalCount < 21) {
    return null; // totalCount または perPage が 0 の場合は何も表示しない
  }

  const totalPages = Math.ceil(totalCount / perPage);

  const range = (start: number, end: number) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <ul className="pagination flex justify-center space-x-2 mt-4">
      {currentPage > 1 && (
        <li>
          <Link href={currentPage === 2 ? indexPath : `${basePath}/${currentPage - 1}`} passHref>
            <button className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400" onClick={() => onPageChange(currentPage - 1)}>
              前へ
            </button>
          </Link>
        </li>
      )}
      {range(1, totalPages).map((number) => (
        <li key={number} className={number === currentPage ? 'active' : ''}>
          <Link href={number === 1 ? indexPath : `${basePath}/${number}`} passHref>
            <button className={`px-3 py-1 ${number === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300'} rounded hover:bg-gray-400`} onClick={() => onPageChange(number)}>
              {number}
            </button>
          </Link>
        </li>
      ))}
      {currentPage < totalPages && (
        <li>
          <Link href={`${basePath}/${currentPage + 1}`} passHref>
            <button className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400" onClick={() => onPageChange(currentPage + 1)}>
              次へ
            </button>
          </Link>
        </li>
      )}
    </ul>
  );
};
