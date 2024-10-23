export default async function signIn(studentId: string, password: string) {
    const response = await fetch("http://localhost:8000/api/signin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            student_id: studentId,
            password: password
        })
    });

    if (!response.ok) {
        throw new Error("Cannot add Signin");
    }

    return await response.json();
}
