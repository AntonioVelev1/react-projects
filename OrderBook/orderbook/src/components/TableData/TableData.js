function TableData({
    list
}) {
    return (
        <>
            {
                list.map(subArr => {
                    <tr>
                        <td>{console.log(subArr[0])}</td>
                        <td>{subArr[1]}</td>
                    </tr>
                })
            }
        </>
    );
}

export default TableData;