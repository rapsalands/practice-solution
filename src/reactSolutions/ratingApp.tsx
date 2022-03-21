import React from 'react';

const RatingApp: React.FC<Props> = ({ maxRating = 5, ...props }) => {

    const hoverStyle = { "backgroundColor": "yellow" };
    const normalStyle = { "backgroundColor": "transparent" };

    const [currentRating, setCurrentRating] = React.useState<number>(0);
    const [hoverRating, setHoverRating] = React.useState<number>(0);

    const range = [...Array(maxRating)].map((_, i) => i);

    const ratingClick = (value: number) => setCurrentRating(value);
    const mouseOver = (value: number) => setHoverRating(value);
    const mouseLeave = () => setHoverRating(0);
    const visibleRating = (hoverRating == 0) ? currentRating : hoverRating;;

    function getStyle(value: number) {
        return visibleRating >= value ? hoverStyle : normalStyle;
    }

    return (
        <React.Fragment>
            <label><b><u>Rating App</u></b></label>
            <br />
            <label>Current Rating: {visibleRating > 0 ? visibleRating : 'None'}</label>
            <br />
            {
                range.map(rating => {
                    const value = rating + 1;
                    return (
                        <button key={value} style={getStyle(value)} onMouseOver={() => mouseOver(value)} onMouseLeave={mouseLeave} onClick={() => ratingClick(value)}>{value}</button>
                    );
                })
            }
        </React.Fragment>
    );
}

export default RatingApp;

interface Props {
    maxRating?: number
}