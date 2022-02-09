import React from 'react';

const sampleSource: IFileNode[] = [
    { name: 'File1.txt' },
    { name: 'File2.txt' },
    {
        name: 'System',
        children: [
            { name: 'SystemFile1.txt' },
            { name: 'SystemFile2.txt' },
            {
                name: "Windows",
                children: [
                    { name: 'WindowFile1.txt' },
                    { name: 'WindowFile2.txt' }
                ]
            }
        ]
    },
    { name: 'File3.txt' },
    {
        name: 'Plug-ins Manager',
        children: [
            { name: 'PluginManagerFile1.txt' },
            { name: 'PluginManagerFile2.txt' },
            {
                name: "Plug-in Source",
                children: [
                    { name: 'PluginFile1.txt' },
                    { name: 'PluginFile2.txt' },
                    {
                        name: 'PluginFile3.txt',
                        children: [
                            { name: 'PluginSource1.txt' },
                            { name: 'PluginSource2.txt' },
                        ]
                    }
                ]
            }
        ]
    },
    { name: 'File4.txt' },
];

const defaultTabSpace = 15;

const FileTree: React.FC<Props> = ({ source = sampleSource, ...props }) => {

    return (
        <React.Fragment>
            <div><u><b>FILE TREE</b></u></div>

            <FileTreeIterator source={source} tab={0} />
        </React.Fragment>
    );
}

const FileTreeIterator: React.FC<FileTreeIteratorProps> = ({ source, tab = 1 }) => {

    return (
        <React.Fragment>
            {
                source.map(fn => {
                    return (
                        <div style={{ textAlign: 'left', paddingLeft: `${tab}px` }}>
                            {fn.name}
                            {!!fn.children ? <FileTreeIterator tab={defaultTabSpace} source={fn.children} /> : null}
                        </div>
                    );
                })
            }
        </React.Fragment>
    );
}

interface FileTreeIteratorProps {
    source: IFileNode[],
    tab: number
}

export default FileTree;

interface Props {
    source?: IFileNode[]
}

interface IFileNode {
    name: string,
    children?: IFileNode[]
}