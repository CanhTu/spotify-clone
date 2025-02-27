export default function Login() {
    const client_id = "9067c2815d6f415eb624757a146aa1ea";
    const redirect_uri = "http://localhost:5173/callback";
    const api_url = "https://accounts.spotify.com/authorize";
    const scopes = [
        "user-read-private",
        "user-read-email",
        "playlist-read-private",
        "playlist-read-collaborative",
        "playlist-modify-public",
        "playlist-modify-private",
        "user-library-read",
        "user-library-modify",
        "user-read-playback-state",
        "user-modify-playback-state",
        "user-read-currently-playing",
        "user-top-read",
        "user-read-recently-played",
        "user-follow-read",
        "user-follow-modify",
    ];
    const login = () => {
        window.location.href = `${api_url}?client_id=${client_id}&response_type=code&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <button onClick={login} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg">Login with Spotify</button>
        </div>
    )
}