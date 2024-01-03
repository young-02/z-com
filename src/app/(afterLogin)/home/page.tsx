import Image from "next/image";
import Link from "next/link";
import zLogo from "../../public/zlogo.png";
import styles from "@/app/page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.left}>
        <Image src={zLogo} alt="logo" />
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        {/* a태그를 사용하면 새로고침을 하게 되어 link를 사용하는 것이 더 좋다~ */}
        <Link href="/i/flow/signup" className="styles.signup">
          계정 만들기
        </Link>
        <h3>이미 투위터에 가입하셨나요?</h3>
        <Link href="/login" className={styles.login}>
          로그인
        </Link>
      </div>
    </>
  );
}
