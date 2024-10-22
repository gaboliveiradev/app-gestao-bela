import { PageLayout, PageLayoutHeader, PageLayoutHeaderTitle, PageLayoutMain } from "@/components/layout/Page";
import { ArrowDownRightIcon } from "@heroicons/react/24/outline";

export default function Products() {

    return (
        <PageLayout>
            <PageLayoutHeader>
                <PageLayoutHeaderTitle className="flex flex-row items-center">
                    <ArrowDownRightIcon className="w-4 h-4 mr-1" />
                    Produtos
                </PageLayoutHeaderTitle>
            </PageLayoutHeader>
            <PageLayoutMain>
                <h1>Produtos</h1>
            </PageLayoutMain>
        </PageLayout>
    )
}