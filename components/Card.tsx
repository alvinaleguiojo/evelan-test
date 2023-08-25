import React from "react";
import { UserDataItem } from "../types/type";
import Image from "next/image";

function Card({ user }: { user: UserDataItem }) {
  return (
    <section className="user-profile">
      <p className="user-profile-item">{user.id}</p>
      <div className="user-profile-info">
        <Image
          priority
          src={user.avatar}
          height={100}
          width={100}
          alt="avatar"
          className="rounded-full"
        />
        <h2>
          {user.first_name} {user.last_name}
        </h2>
      </div>
      <p className="user-profile-item">{user.email}</p>
    </section>
  );
}

export default Card;
