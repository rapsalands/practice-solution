import React from 'react';

const MultiImageCarousal: React.FC<Props> = ({ timeLag = 1000, sources, imageCount = 3, ...props }) => {

    const [counter, setCounter] = React.useState<number>(0);
    const [pause, setPause] = React.useState<boolean>(false);
    const [intIns, setIntIns] = React.useState<any>();

    React.useEffect(() => {

        if(pause) {
            clearInterval(intIns);
            return;
        }

        const interval = setInterval(() => {
            changeImage(null, 1);
        }, timeLag);

        if(!intIns) {
            setIntIns(interval);
        }

        return () => {
            clearInterval(interval);
        }
    }, [pause]);

    const range: number[] = Array(imageCount).fill(null).map((_, i) => i);

    function changeImage(e: any, dir: number) {
        setCounter(prevCounter => {
            const sum = prevCounter + dir;
            if (sum < 0) return imageCount;
            if (sum > imageCount) return 0;
            return sum;
        });
    }

    function calculateSource(index: number) {
        return sources[(index + sources.length) % sources.length];
    }

    const pauseClick = (e: any) => setPause(!pause);

    return (
        <React.Fragment>
            Multi Image Corousal
            <br />
            <button onClick={pauseClick}>{pause ? 'Start' : 'Pause'}</button>
            <br />
            <button onClick={(e) => changeImage(e, -1)}>Previous</button>
            {
                range.map(n => {
                    return (
                        <div key={n}>{calculateSource(counter + n)}</div>
                    );
                })
            }
            <button onClick={(e) => changeImage(e, 1)}>Next</button>

        </React.Fragment>
    );
}

export default MultiImageCarousal;

interface Props {
    sources: string[],
    timeLag?: number,
    imageCount?: number
}
