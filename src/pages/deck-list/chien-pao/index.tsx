import React from 'react';
import 'tailwindcss/tailwind.css';
import MyComponent from '../../../components/myComponent';
import { Pagination } from '../../../components/pageNation';
import { GetStaticProps } from 'next';
import fetchGss from '../../../components/fetchGss';
import Link from 'next/link';
import { FormDataItem } from '../../../components/interFaces';

const PER_PAGE = 20;
const DECK_TYPE = "パオジアンex";

interface HomeProps {
  totalCount: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialData: any[];
}

const ChienPao: React.FC<HomeProps> = ({ totalCount, initialData }) => {
  return <>
    <main className="flex flex-col w-full dark:bg-slate-800">
      <h1 className="flex justify-center text-5xl text-slate-950 mt-32 mb-8 font-semibold dark:text-white">パオジアンexデッキ</h1>
      <div className="flex justify-center mt-16 mb-16">
        <div className="flex flex-col items-center">
          <MyComponent deckType="パオジアンex" currentPage={1} perPage={PER_PAGE} initialData={initialData} />
          <Pagination
            totalCount={totalCount}
            currentPage={1}
            perPage={PER_PAGE}
            basePath="/blog/chien-pao"
            onPageChange={() => { }}
            indexPath="/deck-list/chien-pao"
          />
          <Link className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-16" href="/">トップへ</Link>
          <Link className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-12" href="https://docs.google.com/forms/d/e/1FAIpQLScKtDXlUq3P1c4QUpKU6z05TrF3Bs57Kun8anowvlEpWS0dwQ/viewform">投稿する</Link>
        </div>
      </div>
    </main>
  </>;
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchGss('form');
  const filteredData = data.form.filter((item: FormDataItem) => item.decktype === DECK_TYPE);
  const totalCount = filteredData.length;

  return {
    props: {
      totalCount,
      initialData: data.form.slice(0, PER_PAGE),
    },
  };
};

export default ChienPao;