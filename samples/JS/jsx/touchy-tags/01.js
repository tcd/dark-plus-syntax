import React from 'react';
import { AutoSizer, List, InfiniteLoader, Table, Column } from "react-virtualized";
import { Modal } from 'react-bootstrap';


export default ({ products, setSelectedProduct }) => {

    const rowRenderer = ({ key, index, style }) => {
        let product = products[index];
        return (
            <Product key={key} style={style} {...product} />
        );
    };


    return (
        <AutoSizer disableHeight>
            {({ width }) => (
                <Table>
                    <Column
                        label='Edit'
                        className="col-sm-1"
                        cellDataGetter={({ rowData: { id } }) => id}
                        cellRenderer={({ cellData, rowData }) => <button onClick={() => setSelectedProduct(rowData)} className="btn btn-xs btn-danger">Edit</button>}
                        width={10}
                    />
                </Table>
            )}
        </AutoSizer>
    );
}
