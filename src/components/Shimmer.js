const Shimmer = () => {
    return (
        <div className="restaurant-list">
            {/* we will create array and fill with 10 empty space and map it */}
            {Array(10).fill("").map((e, index)  => 
            (<div key={index} className="shimmer-card"></div>))}
            </div>
    );
};
export default Shimmer;