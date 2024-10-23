import { PageLayout, PageLayoutHeader, PageLayoutHeaderTitle, PageLayoutMain } from "@/components/layout/Page";
import { ArrowDownRightIcon } from "@heroicons/react/24/outline";
import { UserDataTable } from "./_components/DataTable";

export default function Professionals() {

    return (
        <PageLayout>
            <PageLayoutHeader>
                <PageLayoutHeaderTitle className="flex flex-row items-center">
                    <ArrowDownRightIcon className="w-4 h-4 mr-1" />
                    Profissionais
                </PageLayoutHeaderTitle>
            </PageLayoutHeader>
            <PageLayoutMain>
                <UserDataTable />
            </PageLayoutMain>
        </PageLayout>
    )
}