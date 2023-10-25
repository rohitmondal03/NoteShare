import Image from "next/image";
import { Session } from "next-auth";

import { getAuthSession } from "@/lib/nextauth"


export default async function ProfilePage() {
  const session: Session | null = await getAuthSession();

  // get user details
  const userDetails = session?.user;

  return (
    <section className="py-16">
      
    </section>
  )
}