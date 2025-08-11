import { prismaClient } from "db/client";

export default async function Home() {
  const users = await prismaClient.user.findFirst({});
  return (
    <div className="">
      {
          users?.username
      }
    </div>
  );
}
