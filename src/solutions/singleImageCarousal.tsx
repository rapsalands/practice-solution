import React from 'react';

const SingleImageCarousal: React.FC<Props> = ({ sources, lagTime = 1000, ...props }) => {

    const [counter, setCounter] = React.useState<number>(0);
    const [pause, setPause] = React.useState<boolean>(false);
    const [intIns, setIntIns] = React.useState<any>();

    React.useEffect(() => {

        if(pause) {
            clearInterval(intIns);
            return;
        }

        const interval = setInterval(() => {
            setCounter(prevCounter => {
                const sum = prevCounter + 1;
                if (sum == sources.length) return 0;
                return sum;
            });

            setIntIns(interval);

            return () => {
                if(intIns) clearInterval(intIns);
            };

        }, lagTime);
    }, [pause]);

    const pauseClick = (e: any) => setPause(!pause);

    return (
        <React.Fragment>
            Single Image Carousal
            <br />
            <button onClick={pauseClick}>{ pause ? 'Start' : 'Pause' }</button>
            <br />
            {
                sources[counter]
            }
        </React.Fragment>
    );
}

export default SingleImageCarousal;

interface Props {
    sources: string[],
    lagTime?: number
}
