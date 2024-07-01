import { Container } from "@mui/material"

const Navbar = () => {
    return (
        <Container component="header" maxWidth="lg">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h1>Logo.</h1>
                <ul style={{ display: "flex", gap: "1rem" }}>
                    <li>Home</li>
                    <li>Dashboard</li>
                </ul>
            </div>
        </Container>
    )
}

export default Navbar