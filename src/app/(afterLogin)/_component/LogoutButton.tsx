"use client";
import Image from "next/image";
import style from "./LogoutButton.module.css";

export default function LogoutButton() {
  const me = {
    id: "profile",
    nickname: "gg",
    image: "/person.png",
  };

  const onLogout = () => {};
  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <Image
          src={me.image}
          alt={me.id}
          objectFit="cover"
          width={40}
          height={40}
        />
      </div>
      <div className={style.logOutUserName}>
        <div>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
}
