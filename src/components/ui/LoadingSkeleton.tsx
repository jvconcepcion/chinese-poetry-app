export const LoadingSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-pulse">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="bg-white p-6 rounded-xl border border-gray-100">
        <div className="space-y-3">
          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
          <div className="flex justify-between">
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
);