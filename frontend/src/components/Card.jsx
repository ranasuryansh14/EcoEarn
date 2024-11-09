

export default function Card({ title }) {
    return (
        <>
            <div>
                <div className="w-[20rem] h-[30rem] bg-blue-400 rounded-lg">
                    {title}
                </div>
            </div>
        </>
    )
}