"use client";
import { Button } from "../types/type";

function Loadmore({ noMore, loadMore, loadingMore }: Button) {
  return (
    <button
      onClick={loadMore}
      disabled={noMore || loadingMore}
      className={`load-btn`}
    >
      {loadingMore ? "Loading more..." : "Load more"}
    </button>
  );
}

export default Loadmore;
