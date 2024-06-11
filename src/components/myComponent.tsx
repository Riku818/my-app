import React from 'react';
import useFetchGss from './useFetchGss';
import 'tailwindcss/tailwind.css';
import dayjs from 'dayjs';

interface MyComponentProps {
  deckType?: string;
  currentPage: number;
  perPage: number;
  initialData: { id: string; time: string; deckcode: string; decktype: string }[];
}

const MyComponent: React.FC<MyComponentProps> = ({ deckType, currentPage, perPage }) => {
  const { data, error } = useFetchGss('form');

  if (error) {
    return (
      <div>
        <div>Error: {error.message}</div>
      </div>
    );
  }

  if (!data || !data.form.length) {
    return (
      <div>
        <div>Processing...</div>
      </div>
    );
  }

  const filteredData = deckType ? data.form.filter(item => item.decktype === deckType) : data.form;

  const startIndex = (currentPage - 1) * perPage;
  const pageData = filteredData.slice(startIndex, startIndex + perPage);

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {pageData.map((item, index) => (
          <div className="text-center flex flex-col justify-center items-center rounded-lg" key={index}>
            <div className="dark:text-white">{dayjs(item.time).format('YYYY-MM-DD')}</div>
            <div className="font-sans dark:text-white">{item.deckcode}</div>
            <img
              src={`https://lh3.googleusercontent.com/d/${item.id}`}
              alt="デッキ画像"
              width={200}
              height={200}
              className="mt-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyComponent;
