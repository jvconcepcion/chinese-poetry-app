export interface Poem {
  id: number;
  title: string;
  titlePinyin: string;
  titleEnglish: string;
  author: string;
  authorPinyin: string;
  authorEnglish: string;
  dynasty: string;
  dynastyPinyin: string;
  dynastyEnglish: string;
  content: string;
  translation: string;
}

export interface PoemListResponse {
  poems: Poem[];
  total: number;
  hasMore: boolean;
}