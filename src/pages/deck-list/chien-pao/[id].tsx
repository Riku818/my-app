import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import MyComponent from '../../../components/myComponent';
import { Pagination } from '../../../components/pageNation';
import fetchGss from '../../../components/fetchGss';
import { FormDataItem } from '../../../components/interFaces';
import Link from 'next/link';

const PER_PAGE = 20;
const DECK_TYPE = "パオジアンex";

export default function Page({ data, totalCount, currentPage }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div className="dark:bg-slate-800">
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    <MyComponent deckType="パオジアンex" currentPage={currentPage} perPage={PER_PAGE} initialData={data} />
                    <Pagination
                        totalCount={totalCount}
                        currentPage={currentPage}
                        perPage={PER_PAGE}
                        basePath="/deck-list/chien-pao"
                        onPageChange={() => { }}
                        indexPath="/deck-list/chien-pao"
                    />
                    <Link className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-16" href="/">トップへ</Link>
                </div>
            </div>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const data = await fetchGss('form');
    const filteredData = data.form.filter((item: FormDataItem) => item.decktype === DECK_TYPE);
    const totalCount = filteredData.length;
    const totalPages = Math.ceil(totalCount / PER_PAGE);

    const paths = Array.from({ length: totalPages }, (_, i) => ({
        params: { id: (i + 1).toString() },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    if (!params || !params.id) {
        return {
            notFound: true,
        };
    }

    const id = parseInt(params.id as string, 10);
    if (isNaN(id) || id <= 0) {
        return {
            notFound: true,
        };
    }

    try {
        const data = await fetchGss('form');
        const filteredData = data.form.filter((item: FormDataItem) => item.decktype === DECK_TYPE);
        const totalCount = filteredData.length;

        const startIndex = (id - 1) * PER_PAGE;
        const pageData = data.form.slice(startIndex, startIndex + PER_PAGE);

        return {
            props: {
                data: pageData,
                totalCount,
                currentPage: id,
            },
        };
    } catch (error) {
        console.error('Error fetching static props:', error);
        return {
            notFound: true,
        };
    }
};