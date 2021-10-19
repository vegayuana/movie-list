const styles = (theme) => ({
  wrapper:{
    fontFamily: 'Montserrat, sans-serif',
    color: theme.colors.text,
    margin: '10px 8px',
    ['@media (min-width:768px)']: {
      margin: 50
    },
    ['@media (min-width:1300px)']: {
      margin: 100,
    },
  },
  title:{
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 20,
    '& svg':{
      fontSize: '2.8rem',
      color: theme.colors.primary,
      marginRight: '8px'
    },
    '& h1':{
      fontSize: '2.2rem'
    }
  },
  note:{
    display: 'flex',
    justifyContent: 'center',
  },
  footnote:{
    textAlign: 'center',
    paddingBottom: 50,
  },
});

export default styles;
