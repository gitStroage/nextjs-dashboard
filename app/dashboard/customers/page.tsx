import Table from "@/app/ui/customers/table"
import { fetchCustomers, fetchFilteredCustomers } from "@/app/lib/data"

export default async function Page(props: {
    searchParams?: Promise<{
        query?: string,
        page?: string
    }>
}) {
    const searchParams = await props.searchParams
    const query = searchParams?.query || ""
    const customers = await fetchFilteredCustomers(query)
    console.log()
    return (<>
        <div>
            <Table customers={customers} />
        </div>
    </>)
}