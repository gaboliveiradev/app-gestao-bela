import { PageLayout, PageLayoutHeader, PageLayoutHeaderTitle, PageLayoutMain } from "@/components/layout/Page";
import { ArrowDownRightIcon } from "@heroicons/react/24/outline";

export default function Settings() {

    return (
        <PageLayout>
            <PageLayoutHeader>
                <PageLayoutHeaderTitle className="flex flex-row items-center">
                    <ArrowDownRightIcon className="w-4 h-4 mr-1" />
                    Configurações
                </PageLayoutHeaderTitle>
            </PageLayoutHeader>
            <PageLayoutMain>
                <h1>Configurações</h1>
            </PageLayoutMain>
        </PageLayout>
    )
}