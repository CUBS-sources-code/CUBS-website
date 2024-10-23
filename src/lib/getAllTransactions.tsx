export default async function getAllTransactions() {
    const response = await fetch("http://localhost:8000/api/transactions", {
        method: "GET",
        cache: 'no-store',
    })

    if (!response.ok) {
        throw new Error("Failed to fetch transactions")
    }
    return await response.json()
}