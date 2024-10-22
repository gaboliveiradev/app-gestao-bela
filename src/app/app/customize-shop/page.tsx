import { PageLayout, PageLayoutHeader, PageLayoutHeaderTitle, PageLayoutMain } from "@/components/layout/Page";
import { ArrowDownRightIcon } from "@heroicons/react/24/outline";

export default function CustomizeShop() {

    return (
        <PageLayout>
            <PageLayoutHeader>
                <PageLayoutHeaderTitle className="flex flex-row items-center">
                    <ArrowDownRightIcon className="w-4 h-4 mr-1" />
                    Loja Virtual
                </PageLayoutHeaderTitle>
            </PageLayoutHeader>
            <PageLayoutMain>
                <h1>Loja Virtual</h1>
            </PageLayoutMain>
        </PageLayout>
    )
}