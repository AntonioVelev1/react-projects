import FilmCard from "../FilmCard/FilmCard";

function All() {
    return (
        <div className="box">
            <div className="head">
                <h2>LATEST TRAILERS</h2>
                <p className="text-right"><a href="#">See all</a></p>
            </div>
            <FilmCard />
            <div className="cl">&nbsp;</div>
        </div>
    );
}

export default All;