import imageReact from "./assets/react-core-concepts.png"

const userData = {
    firstName: "Ivan",
    lastName: "Amoruso",
    role: "Software Developer",
};

function User() {
    return (
        <div id="user" data-testid="user">
            <h2>
                {userData.firstName} {userData.lastName}
            </h2>
            <p>
                {userData.role}
            </p>
        </div>
    );
}

function App2() {
    return (
        <div id="app">
            <img src={imageReact}/>
            <h1>Time to practice!</h1>
            <p>Welcome on board on this course. You got this!</p>
            <User></User>
        </div>
    );
}

export default App2;