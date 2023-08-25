"use client";
import { Button } from "../types/type";

function Loadmore({ loadMore, loadingMore }: Button) {
  return (
    <button
      onClick={loadMore}
      disabled={loadingMore}
      className="load-btn"
    >
      {loadingMore ? "Loading more..." : "Load more"}
    </button>
  );
}

export default Loadmore;
