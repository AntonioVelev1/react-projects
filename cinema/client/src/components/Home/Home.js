import All from "../All/All";
import { useAuthContext } from "../../hooks/useAuthContenxt";

function Home() {
    const { user } = useAuthContext();
    return (
        <>
            <div className="welcome">
                <p>Hello {user.username}!</p>
            </div>
            <All />
        </>
    );
}

export default Home;