import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const Home: React.FC = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <>
      <div>this is a protected page</div>
    </>
  );
};

export default Home;
