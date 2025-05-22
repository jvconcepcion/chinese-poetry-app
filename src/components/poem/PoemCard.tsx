import { Poem } from '@/interfaces/poem.interface';

interface PoemCardProps {
  poem: Poem;
  locale?: string;
}

const PoemCard = ({ poem }: PoemCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            {poem.title}
            <span className="block text-sm text-gray-500 mt-1">
              {poem.titlePinyin} · {poem.titleEnglish}
            </span>
          </h2>
          <p className="text-gray-600 mt-2">
            {poem.author} ({poem.authorPinyin})
            <span className="block text-sm text-gray-500">
              {poem.authorEnglish}
            </span>
          </p>
        </div>
        <span className="text-sm bg-red-50 text-red-600 px-3 py-1 rounded-full">
          {poem.dynasty} ({poem.dynastyPinyin})
        </span>
      </div>
      
      <pre className="mt-3 font-serif text-gray-700 whitespace-pre-wrap">
        {poem.content}
      </pre>
      
      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-600 mb-2">
          Translation
        </h3>
        <p className="text-gray-600 whitespace-pre-wrap">
          {poem.translation}
        </p>
      </div>
    </div>
  );
};

export default PoemCard;