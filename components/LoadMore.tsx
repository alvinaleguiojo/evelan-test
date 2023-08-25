"use client";
import { Button } from "../types/type";

function Loadmore({ loadMore, loadingMore }: Button) {
  return (
    <button
      onClick={loadMore}
      disabled={loadingMore}
      className={`bg-lime-500 hover:bg-lime-600 focus:ring focus:ring-lime-200 focus:ring-opacity-50 text-white font-semibold py-2 px-4 rounded ${
        loadingMore ? "cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      {loadingMore ? "Loading more..." : "Load more"}
    </button>
  );
}

export default Loadmore;
