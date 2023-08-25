"use client";
import React from "react";
import { useInfiniteScroll } from "ahooks";
import { UserDataItem, UserData, Result } from "../types/type";
import Card from "./Card";
import Loadmore from "./LoadMore";

async function getLoadMoreList(nextPage: number | undefined): Promise<Result> {
  // Provide a default value of 1 for nextPage if it's undefined
  const page = nextPage || 1;
  const res = await fetch(`https://reqres.in/api/users?page=${page}`);
  const { data }: UserData = await res.json();

  return {
    list: data || [],
    nextId: data && data.length > 0 ? page + 1 : undefined,
  };
}

function Users() {
  const { data, loading, loadMore, loadingMore } = useInfiniteScroll((d) =>
    getLoadMoreList(d?.nextId)
  );

  return (
    <div className="flex flex-col items-center">
      {loading ? (
        <p className="my-4">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-5">
          {data?.list?.map((item: UserDataItem) => (
            <Card user={item} key={item.id} />
          ))}
        </div>
      )}

      <div className="my-4">
        {data?.nextId !== undefined && (
          <Loadmore loadMore={loadMore} loadingMore={loadingMore} />
        )}

        {data?.nextId === undefined && <span>No more data</span>}
      </div>
    </div>
  );
}

export default Users;
