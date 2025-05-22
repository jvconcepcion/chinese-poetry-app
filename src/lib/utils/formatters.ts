export const formatDynasty = (dynasty: string): string => {
  const dynastyMap: { [key: string]: string } = {
    唐: 'Tang Dynasty',
    宋: 'Song Dynasty',
    元: 'Yuan Dynasty',
    明: 'Ming Dynasty',
    清: 'Qing Dynasty'
  };
  return dynastyMap[dynasty] || dynasty;
};

export const truncateContent = (text: string, maxLength: number): string => {
  return text.length > maxLength 
    ? `${text.substring(0, maxLength)}...` 
    : text;
};