import React from 'react';

const ArrayAsTable: React.FC<Props> = ({ colCount = 4, source = [], ...props }) => {

    function getCols(rowIndex: number, colSeed = 0, colLimit = colCount): any[] {
        const result: any[] = [];

        for (let colIndex = colSeed; colIndex < colLimit; colIndex++) {
            const index = (rowIndex * colCount) + colIndex;
            result.push(<td style={{border: 'red solid 1px'}}>{source[index]}</td>);
        }

        return result;
    }

    function getRows(): any[] {
        const result: any[] = [];
        const rowCount = source.length / colCount;

        for (let row = 0; row < rowCount; row++) {
            result.push(<tr>{getCols(row)}</tr>);
        }

        result.push(<tr>{getCols(rowCount, rowCount * colCount, source.length)}</tr>);

        return result;
    }

    function getHeaders(): any[] {
        const result: any[] = [];

        for (let i = 0; i < colCount; i++) {
            result.push(<th style={{border: 'red solid 1px'}}>{`Col ${i + 1}`}</th>);
        }

        return result;
    }

    return (
        <React.Fragment>
            <div><b><u>Array as Table</u></b></div>
            <div>
                <table>
                    {getHeaders()}
                    {getRows()}
                </table>
            </div>
        </React.Fragment>
    );
}

export default ArrayAsTable;

interface Props {
    source?: number[],
    colCount?: number
}