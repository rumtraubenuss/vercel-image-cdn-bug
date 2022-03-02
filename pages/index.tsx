import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link href="/cats">
        <a style={{ textDecoration: "underline" }}>
          Click here to see example images.
        </a>
      </Link>
    </div>
  );
};

export default Home;
