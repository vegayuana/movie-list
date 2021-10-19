import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './actions';
import { MdArrowBack } from 'react-icons/md';
import { GiPlainCircle } from 'react-icons/gi';
import { RiAwardFill } from 'react-icons/ri';
import { FaThumbsUp } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { Spinner } from '../../components';
import { get, isEmpty } from 'lodash';
import { ROUTES } from '../../configs';

export const MovieDetail = (props) => {
  const { classes, match: { params: { id } }, history } = props;
  const dispatch = useDispatch();
  const { movie, loading } = useSelector(state => state.detail);
  useEffect(()=>{
    dispatch(actions.getDetailMovie(id));
  }, []);

  const handleBack = () => history.push(ROUTES.MAIN());
  const dataTable = [{
    label: 'Genre',
    data: get(movie, 'Genre')
  },{
    label: 'Director',
    data: get(movie, 'Director')
  },{
    label: 'Writer',
    data: get(movie, 'Writer')
  },{
    label: 'Language',
    data: get(movie, 'Language')
  },{
    label: 'Country',
    data: get(movie, 'Country')
  }];

  const ratings = [{
    label: 'Metascore',
    data: get(movie, 'Metascore'),
    icon: <RiAwardFill/>
  },{
    label: 'imdbRating',
    data: get(movie, 'imdbRating'),
    icon: <FaThumbsUp/>
  },{
    label: 'imdbVotes',
    data: get(movie, 'imdbVotes'),
    icon: <AiFillStar/>
  }];

  const card = (data, i) => (
    <div key={i} className={'card'}>
      {data.icon}
      <p><b>{data.label}</b></p>
      <p>{data.data}</p>
    </div>
  );

  return (
    <div className={classes.wrapper}>
      <MdArrowBack onClick={handleBack} className={'back'}/>
      {loading? <Spinner/> : (
        <div className={classes.detail}>
          <div className={'top'}>
            <div className={'img-wrapper'}>
              <img src={get(movie, 'Poster')} alt={get(movie, 'Title')}/>
            </div>
            <div>
              <div className={'title'}>
                <h1>{get(movie, 'Title')}</h1>
                <div>{get(movie, 'Year')} <GiPlainCircle className={'bullet'}/> {get(movie, 'Rated')} <GiPlainCircle className={'bullet'}/> {get(movie, 'Runtime')}</div>
              </div>
              <table>
                {dataTable.map((item, i)=>(
                  <tr key={i}>
                    <th>{item.label}</th>
                    <td>: {item.data}</td>
                  </tr>
                ))}
              </table>
              <h2>Plot</h2>
              <p>{get(movie, 'Plot')}</p>
            </div>
          </div>
          <div className={'bottom'}>
            <h3>Awards</h3>
            <h4>{get(movie, 'Awards')}</h4>
            <div className={'ratings'}>
              {ratings.map((item, i)=>card(item, i))}
            </div>
            {!isEmpty(movie, 'Ratings') && <p className={'ratings-title'}>Ratings</p>}
            <table>
              {get(movie, 'Ratings') && get(movie, 'Ratings').map((item, i)=>(
                <tr key={i}>
                  <th>{item.Source}</th>
                  <td>: {item.Value}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

MovieDetail.defaultProps = {
  classes: {},
  match: {},
  history: {},
  users: {}
};

MovieDetail.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object,
  history: PropTypes.object,
  users: PropTypes.object
};

export default MovieDetail;