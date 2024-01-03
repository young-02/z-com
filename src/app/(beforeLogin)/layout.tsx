import { ReactNode } from "react";
import styles from "@/app/page.module.css";

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

// 패럴러 모달 일 경우 레이아웃이 모달 폴더와 같은 라인에있어야한다.
export default function layout({ children, modal }: Props) {
  return (
    <main className={styles.container}>
      {children}
      {modal}
    </main>
  );
}

// 주소가 z.com일 때는 childeren -> page.tsx, modal => @modal/default.tsx
// 주소가 z.com/i/flow/login 때는 children -> i/flow/login/page.tsx , modal -> @modal/i/flow/login/page.tsx
