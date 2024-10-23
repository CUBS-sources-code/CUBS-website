export default async function getMyInfo(token: string) {
    const response = await fetch("http://localhost:8000/api/user", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        cache: 'no-store',
    })

    if (!response.ok) {
        throw new Error("Failed to fetch user information")
    }

    return await response.json()
}