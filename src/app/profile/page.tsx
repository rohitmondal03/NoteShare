import { Session } from "next-auth";

import { getAuthSession } from "@/lib/nextauth"


export default async function ProfilePage() {
  const session: Session | null = await getAuthSession();

  // get user details
  const userDetails = session?.user;

  return (
    <section>
      Name: {userDetails?.name}
      <img src={userDetails?.image as string} />
      Email: {userDetails?.email}
    </section>
  )
}