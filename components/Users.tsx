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
  const { data, loading, loadMore, loadingMore } = useInfiniteScroll((d: any) =>
    getLoadMoreList(d?.nextId)
  );

  return (
    <div id="evalan">
      <div className="wrapper">
        <div className="evanlan-task-info">
          {loading ? (
            <p className="">Loading...</p>
          ) : (
            <>
              <div className="evanlan-task-headers">
                <p className="user-profile-item">ID</p>
                <p className="user-profile-item">User</p>
                <p className="user-profile-item">Email</p>
              </div>
              <div className="evanlan-task-users">
                {data?.list?.map((item: UserDataItem) => (
                  <Card user={item} key={item.id} />
                ))}
              </div>
            </>
          )}

          <div>
            <Loadmore
              loadMore={loadMore}
              loadingMore={loadingMore}
              noMore={data?.nextId === undefined}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
