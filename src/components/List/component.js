import PropTypes from 'prop-types';

const failedImg = 'https://beoe.gov.pk/uploads/complaints/results/default/sample.jpg';

const List = (props) => {
  const { classes, data, onDetail: handleDetail, onClickImg: handleClickImg } = props;
  return (
    <div className={classes.wrapper}>
      <div
        className={'img-wrapper'}
        onClick={handleClickImg.bind(this, {
          ...data, Poster: data.Poster==='N/A' ? failedImg : data.Poster
        })}
      >
        <img src={data.Poster==='N/A' ? failedImg : data.Poster} alt={data.Title}/>
      </div>
      <div>
        <div className={'title-wrapper'} onClick={handleDetail.bind(this, data.imdbID)}>
          <h2>{data.Title}</h2>
          <div className={'tag'}><i>{data.Type}</i></div>
        </div>
        <p>{data.Year}</p>
      </div>
    </div>
  );
};

List.defaultProps = {
  classes: {},
  data: {},
  onClickImg: ()=>null,
  onDetail: ()=>null
};

List.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
  onClickImg: PropTypes.func,
  onDetail: PropTypes.func,
};

export default List;
