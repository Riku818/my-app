import React from 'react';
import 'tailwindcss/tailwind.css';
import Link from 'next/link';

const List = () => {
    return (
        <div className="dark:bg-slate-800">
            <div className="container mx-auto flex justify-center flex-col items-center">
                <h1 className="flex justify-center font-bold text-5xl text-slate-950 pt-32 pb-8 dark:text-white">デッキ一覧</h1>
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
                            <img src="/images/041853_P_KIXYUWAWA.png" alt="キシユワワ" width={500} height={300} className="w-full h-full object-cover hover:opacity-75" />
                        </a>
                    </Link>
                    <Link href="/deck-list/giratina/" legacyBehavior>
                        <a className="flex justify-center items-center border-solid border-2 border-neutral-200 rounded-lg h-5/6 overflow-hidden">
                            <img src="/images/041885_P_GIRATEINAVSTAR.png" alt="ギラティナVSTAR" width={500} height={300} className="w-full h-full object-cover hover:opacity-75" />
                        </a>
                    </Link>
                    <Link href="/deck-list/chien-pao/" legacyBehavior>
                        <a className="flex justify-center items-center border-solid border-2 border-neutral-200 rounded-lg h-5/6 overflow-hidden">
                            <img src="/images/043235_P_PAOJIANEX.png" alt="チエンパオ" width={500} height={300} className="w-full h-full object-cover hover:opacity-75" />
                        </a>
                    </Link>
                    <Link href="/deck-list/gardevoir/" legacyBehavior>
                        <a className="flex justify-center items-center border-solid border-2 border-neutral-200 rounded-lg h-5/6 overflow-hidden">
                            <img src="/images/042574_P_SANAITOEX.png" alt="サーナイトex" width={500} height={300} className="w-full h-full object-cover hover:opacity-75" />
                        </a>
                    </Link>
                </div>
                <Link href="/" legacyBehavior>
                    <a className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-16">トップへ</a>
                </Link>
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLScKtDXlUq3P1c4QUpKU6z05TrF3Bs57Kun8anowvlEpWS0dwQ/viewform" legacyBehavior>
                    <a className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-12">投稿する</a>
                </Link>
            </div>
        </div>
    );
};

export default List;
