export default function Logout() {
    localStorage.clear();
    window.location.href = "/";
    return (
        <>
            <p>Logout ...</p>
        </>
    )
}
