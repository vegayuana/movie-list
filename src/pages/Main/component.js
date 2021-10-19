import { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './actions';
import { AutoComplete, List, Modal, Spinner } from '../../components';
import { GiFilmProjector } from 'react-icons/gi';
import { ROUTES } from '../../configs';

export const Main = (props) => {
  const { classes, history } = props;
  const dispatch = useDispatch();
  const { movies, loading, search, totalResults, error } = useSelector(state => state.list);
  const [list, setList] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState(1);
  const [didMount, setDidMount] = useState(true);
  const [modal, setModal] = useState(null);

  const observer = useRef();
  const lastBookElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && list.length < totalResults) {
        setPage(prevPage => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, list]);

  useEffect(()=>{
    if (didMount) setDidMount(false);
    else if (!didMount) dispatch(actions.getMovies(keyword, page));
  }, [page]);

  useEffect(() => {
    setList(prevList => {
      return [...new Set([...prevList, ...movies])];
    });
  }, [movies]);

  const handleKeyword = (keyword) => setKeyword(keyword);

  useEffect(() => {
    if (didMount) setDidMount(false);
    else if (!didMount) {
      const delayDebounceFn = setTimeout(() => {
        dispatch(actions.getSearchList(keyword));
      }, 1000);
      return () => clearTimeout(delayDebounceFn);
    }
  }, [keyword]);

  const handleEnter = () => {
    setList([]);
    setPage(1);
    dispatch(actions.getMovies(keyword, 1));
  };

  const handleSelect = (id) => history.push(ROUTES.MOVIE_DETAIL(id));

  const handleDetail = (id) => history.push(ROUTES.MOVIE_DETAIL(id));
  const openModal = (data) => setModal(data);
  const closeModal = () => setModal(null);
  const renderList = (item, i) => <List key={i} data={item} onDetail={handleDetail} onClickImg={openModal}/>;

  const renderModal = () =>(
    <Modal
      visible={Boolean(modal)}
      data={modal}
      onCloseModal={closeModal}
    />
  );
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
        <GiFilmProjector/><h1>Movie List</h1>
      </div>
      <AutoComplete
        options={search}
        value={keyword}
        onSearch={handleKeyword}
        onSelect={handleSelect}
        onEnter={handleEnter}
      />
      <div className={classes.content}>
        {list.map((item, i)=>{
          if (list.length === i + 1) {
            return (
              <div ref={lastBookElementRef} key={i}>
                {renderList(item, i)}
              </div>
            );
          } else {
            return renderList(item, i);
          }
        })}
        {loading && (<Spinner/>)}
        {(!!list.length && list.length==totalResults) ? (
          <div className={classes.footnote}>
            The end of page. Total results: {totalResults}
          </div>
        ) : (
        <div className={classes.note}>
          {error && 'Movie is not found'}
          {(!list.length && !error) && (
            <ul>
              <li>Search movie by typing the movie title</li>
              <li>Enter more than 3 characters to show search option</li>
              <li>Click search button on the right to show results on page</li>
            </ul>
          )}
        </div>
        )}
      </div>
      {renderModal()}
    </div>
  );
};

Main.defaultProps = {
  classes: {},
  match: {},
  history: {},
};

Main.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object,
  history: PropTypes.object,
};

export default Main;
