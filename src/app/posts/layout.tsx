import { ReactNode } from "react";

interface ILayoutPostProps {
  children: ReactNode;
}

export default function LayoutPost({ children }: ILayoutPostProps) {
  return (
    <>
      <header>Vinicius Blog</header>
      <main>{children}</main>
    </>
  );
}
