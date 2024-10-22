import { auth } from "@/services/auth"
import { UserInfo } from "./_components/userInfo";

export default async  function Dashboard() {
    const session = await auth();

    return (
        <main className="flex items-center justify-center h-screen">
            <UserInfo user={session?.user} />
        </main>
    )
}