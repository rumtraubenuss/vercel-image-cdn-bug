import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      <Image
        src="https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3280&q=80"
        layout="responsive"
        width={3280}
        height={3280}
        sizes="50vw"
        alt=""
      />
      <Image
        src="/cat.jpeg"
        layout="responsive"
        width={3280}
        height={3280}
        sizes="50vw"
        alt=""
      />
    </div>
  );
};

export default Home;
