import { paginationInterface } from "../../models/paginationModels";

const Pagination = ({ page, totalResults, setPage }: paginationInterface) => {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div className="  font-bold ">
          <p className="text-sm text-gray-700">
            {/* to show the current page number */}
            Page : {page}
            <br />
            {/* to show total searched results */}
            Total Results : {totalResults}
            <br />
            {/* to show the number of total pages */}
            Total Page : {Math.ceil(totalResults / 30)}
          </p>
        </div>
        {page! === 1 && page === totalResults ? (
          " "
        ) : (
          <div>
            {page !== 1 && (
              <button
                onClick={() => setPage(page - 1)}
                className="border p-2 m-2"
              >
                Previous Page
              </button>
            )}
            <button
              onClick={() => setPage(page + 1)}
              className="border p-2 m-2"
            >
              Next Page
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pagination;
