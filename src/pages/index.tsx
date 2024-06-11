/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import 'tailwindcss/tailwind.css';
import MyComponent from '../components/myComponent';
import { Pagination } from '../components/pageNation';
import { GetStaticProps } from 'next';
import fetchGss from '../components/fetchGss';
import Link from 'next/link';

const PER_PAGE = 20;

interface HomeProps {
  totalCount: number;
  initialData: any[];
}

const Home: React.FC<HomeProps> = ({ totalCount, initialData }) => {
  return (
    <div className="dark:bg-slate-800">
      <div className="container mx-auto">
        <div className="flex space-x-16 py-8">
          <h1 className="text-5xl font-extrabold dark:text-white">ポケカデッキ保管庫</h1>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLScKtDXlUq3P1c4QUpKU6z05TrF3Bs57Kun8anowvlEpWS0dwQ/viewform" legacyBehavior>
            <a className="flex justify-center items-center bg-blue-400 hover:bg-blue-300 text-white rounded px-4 py-2">投稿する</a>
          </Link>
          <Link href="/deck-list/decklist/" legacyBehavior>
            <a className="flex justify-center items-center bg-blue-400 hover:bg-blue-300 text-white rounded px-4 py-2">デッキ一覧</a>
          </Link>
        </div>

        <h1 className="text-4xl font-bold my-10 dark:text-white">注目のデッキ</h1>

        <div className="grid-cols-3 grid gap-4">
          <Link href="/deck-list/charizard/" legacyBehavior>
            <a className="flex justify-center items-center border-solid border-2 border-neutral-200 rounded-lg h-5/6 overflow-hidden">
              <img src="/images/043908_P_RIZADONEX.png" alt="リザードンex" width={500} height={300} className="w-full h-full object-cover hover:opacity-75" />
            </a>
          </Link>
          <Link href="/deck-list/lugia/" legacyBehavior>
            <a className="flex justify-center items-center border-solid border-2 border-neutral-200 rounded-lg h-5/6 overflow-hidden">
              <img src="/images/042172_P_RUGIAVSTAR.png" alt="ルギアVSTAR" width={500} height={300} className="w-full h-full object-cover hover:opacity-75" />
            </a>
          </Link>
          <Link href="/deck-list/lostbox/" legacyBehavior>
            <a className="flex justify-center items-center border-solid border-2 border-neutral-200 rounded-lg h-5/6 overflow-hidden">
              <img src="/images/041853_P_KIXYUWAWA.png" alt="キュワワー" width={500} height={300} className="w-full h-full object-cover hover:opacity-75" />
            </a>
          </Link>
          <Link href="/deck-list/giratina/" legacyBehavior>
            <a className="flex justify-center items-center border-solid border-2 border-neutral-200 rounded-lg h-5/6 overflow-hidden">
              <img src="/images/041885_P_GIRATEINAVSTAR.png" alt="ギラティナVSTAR" width={500} height={300} className="w-full h-full object-cover hover:opacity-75" />
            </a>
          </Link>
          <Link href="/deck-list/chien-pao/" legacyBehavior>
            <a className="flex justify-center items-center border-solid border-2 border-neutral-200 rounded-lg h-5/6 overflow-hidden">
              <img src="/images/043235_P_PAOJIANEX.png" alt="パオジアンex" width={500} height={300} className="w-full h-full object-cover hover:opacity-75" />
            </a>
          </Link>
          <Link href="/deck-list/gardevoir/" legacyBehavior>
            <a className="flex justify-center items-center border-solid border-2 border-neutral-200 rounded-lg h-5/6 overflow-hidden">
              <img src="/images/042574_P_SANAITOEX.png" alt="サーナイトex" width={500} height={300} className="w-full h-full object-cover hover:opacity-75" />
            </a>
          </Link>
        </div>

        <h1 className="text-5xl font-extrabold my-10 dark:text-white">投稿デッキ一覧</h1>

        <div className="flex justify-center pb-16">
          <div className="flex flex-col items-center">
            <MyComponent currentPage={1} perPage={PER_PAGE} initialData={initialData} />
            <Pagination
              totalCount={totalCount}
              currentPage={1}
              perPage={PER_PAGE}
              basePath="/deck-list/page"
              onPageChange={() => { }}
              indexPath="/deck-list/page"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchGss('form');
  const totalCount = data.form.length;

  return {
    props: {
      totalCount,
      initialData: data.form.slice(0, PER_PAGE),
    },
  };
};

export default Home;