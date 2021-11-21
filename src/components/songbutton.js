export default function SongButton ({link}) {
    const openPopup = () => {
        window.open(link, "_blank")
    }

    return (
        <>
            <a href="#" className="restart" onClick={openPopup}>Открыть песню</a>
        </>
    )
}