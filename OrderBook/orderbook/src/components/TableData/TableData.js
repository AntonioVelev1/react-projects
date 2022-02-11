function TableData({
    list
}) {
    return (
        <>
            {
                list.map(subArr => {
                    <tr>
                        {
                            subArr.map(x => {
                                <td key={x}>{x}</td>
                            })
                        }
                    </tr>
                })
            }
        </>
    );
}

export default TableData;