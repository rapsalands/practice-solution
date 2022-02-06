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
                    { name: 'PluginFile2.txt' }
                ]
            }
        ]
    },
    { name: 'File4.txt' },
];

const FileTree: React.FC<Props> = ({ source = sampleSource, ...props }) => {

    return (
        <React.Fragment>
            <label><u><b>File Tree</b></u></label>
            <br />
            {<FileTreeIterator source={source} />}
        </React.Fragment>
    );
}

const FileTreeIterator: React.FC<IFileTreeIteratorProps> = ({ source = sampleSource, tab = 0, ...props }) => {

    const tabSpace = 20;

    const getIcon = (fileNode: IFileNode) => !!fileNode.children ? '[Folder]' : '[File]';

    return (
        <React.Fragment>
            {
                source.map(fileNode => {
                    return (
                        <React.Fragment key={fileNode.name}>
                            <div style={{ textAlign: 'left', paddingLeft: `${tab * tabSpace}px` }}>
                                {getIcon(fileNode)}{fileNode.name}
                            </div>
                            {fileNode.children ? <FileTreeIterator source={fileNode.children} tab={tab + 1} /> : null}
                        </React.Fragment>
                    );
                })
            }
        </React.Fragment>
    );
}

export default FileTree;

interface Props {
    source?: IFileNode[],
}

interface IFileTreeIteratorProps {
    source: IFileNode[],
    tab?: number
}

interface IFileNode {
    name: string,
    children?: IFileNode[]
}