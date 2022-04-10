import React from 'react';

const NestedCheckbox: React.FC<Props> = () => {

    return (
        <React.Fragment>
            <h1>Nested Checkbox</h1>
            <div style={{ textAlign: 'left' }}>
                {<CheckTree files={inputFiles} />}
            </div>
        </React.Fragment>
    );
}

const CheckTree: React.FC<IFileIterationProps> = ({ files, tab = 1, onChange, parentIndex = -1 }) => {

    const [fileNodes, setFileNodes] = React.useState<IFileNode[]>(files || []);

    if (!files) return null;
    const pad = tab * 15;

    function onCheckChange(e: any, index: number, level: number = 0) {
        const checkedValue = e.target.checked;
        const temp = [...fileNodes];
        const node = temp[index];
        node.state = checkedValue;

        if (level === 0) {
            setChildren(node.fileNodes);
        } else {
            const allStates = node.fileNodes.map(fn => fn.state);
            if (allStates.includes(true) && allStates.includes(false)) node.state = null;
            else if (allStates.includes(null)) node.state = null;
            else if (allStates.includes(true)) node.state = true;
            else node.state = false;
        }

        setFileNodes(temp);
        onChange && onChange(e, parentIndex, level + 1);

        function setChildren(states: IFileNode[]) {
            states.forEach(state => {
                state.state = checkedValue;
                setChildren(state.fileNodes);
            });
        }
    }

    return (
        <React.Fragment>
            {
                fileNodes.map((fn, index) => {
                    return (
                        <div key={fn.name} style={{ paddingLeft: `${pad}px`, textAlign: 'left' }}>
                            <input type={'checkbox'} checked={fileNodes[index].state || false} onChange={(e) => onCheckChange(e, index, 0)} /> {fn.name} {fn.state == null ? ' - (Partial)' : ''}
                            {(fn.fileNodes || []).length ? <CheckTree onChange={onCheckChange} files={fn.fileNodes} tab={tab + 1} parentIndex={index} /> : null}
                        </div>
                    );
                })
            }
        </React.Fragment>
    );
}

export default NestedCheckbox;

const inputFiles: IFileNode[] = [
    { name: 'Folder 1', state: false, fileNodes: [] },
    {
        name: 'Folder 2',
        state: false,
        fileNodes: [{
            name: '2_File 1',
            state: false,
            fileNodes: [{ name: '2File1_File 1', state: false, fileNodes: [] }]
        },
        {
            name: '2_File 2',
            state: false,
            fileNodes: [
                { name: '2File2_File 1', state: false, fileNodes: [] },
                { name: '2File2_File 2', state: false, fileNodes: [] }
            ]
        }]
    },
    {
        name: 'Folder 3',
        state: false,
        fileNodes: [{
            name: '3_File 1',
            state: false,
            fileNodes: [{ name: '3File1_File 1', state: false, fileNodes: [] }]
        }]
    }
];

interface Props {

}

interface IFileNode {
    name: string,
    state: boolean | null,
    fileNodes: IFileNode[]
}

interface IFileIterationProps {
    files?: IFileNode[]
    tab?: number,
    onChange?: (e: any, index: number, level: number) => void,
    parentIndex?: number
}
