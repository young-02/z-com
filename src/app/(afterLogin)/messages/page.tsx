import style from "./message.module.css";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import Room from "./_componet/Room";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function Home() {
  return (
    <main className={style.main}>
      <div className={style.header}>
        <h2>쪽지</h2>
      </div>
      <Room />
      <Room />
      <Room />
      <Room />
    </main>
  );
}
