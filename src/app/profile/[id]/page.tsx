export default function UserProfile({ params }: any) {
    return (
        <div className="font-mono flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile {params.id} </h1>
            <hr />
            <p>Profile Page</p>
        </div>
    );
}
