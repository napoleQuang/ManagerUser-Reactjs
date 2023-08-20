import ReactPaginate from 'react-paginate';

function Paginate(props) {
    return (
        <ReactPaginate
            previousLabel="previous"
            nextLabel="next"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            pageCount={props.pageCount}
            pageRangeDisplayed={1}
            marginPagesDisplayed={1}

            containerClassName="pagination justify-content-center"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            activeClassName="active"

            onPageChange={props.onPageChange}
        />
    );
}

export default Paginate;