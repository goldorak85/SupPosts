export default function Logout() {
    localStorage.setItem("user", "{}");
    window.location.href = "/";
    return (
        <>
            <p>Logout ...</p>
        </>
    )
}
