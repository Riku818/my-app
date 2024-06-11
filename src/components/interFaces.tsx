export interface BlogPost {
    id: number;
    title: string;
}

export interface BlogData {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    form: any;
    contents: BlogPost[];
    totalCount: number;
}


export interface FormDataItem {
    id: string;
    decktype: string;
    deckcode: string;
    time: string;
}

export interface FormData {
    form: FormDataItem[];
}