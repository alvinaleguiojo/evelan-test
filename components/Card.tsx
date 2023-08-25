import React from "react";
import { UserDataItem } from "../types/type";
import Image from "next/image";

function Card({ user }: { user: UserDataItem }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col justify-center items-center">
      <Image src={user.avatar} height={100} width={100} alt="avatar" />
      <div className="px-6 py-4 text-center">
        <p className="text-gray-700 text-base">{user.id}</p>
        <p className="text-gray-700 text-base">{user.email}</p>
        <div className="font-bold text-xl mb-2">
          {user.first_name} {user.last_name}
        </div>
      </div>
    </div>
  );
}

export default Card;
