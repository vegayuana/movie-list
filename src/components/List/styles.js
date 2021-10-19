const styles = (theme) => ({
  wrapper:{
    display: 'flex',
    padding: '10px 10px 20px 10px',
    borderBottom: `1px solid ${theme.colors.secondary}`,
    marginBottom: 30,
    transition: '0.3s',
    '&:hover':{
      boxShadow: `0px 4px 2px -2px ${theme.colors.secondary}`,
      transition: '0.3s',
    },
    '& > div:last-child':{
      flexGrow: 1,
      cursor: 'pointer'
    },
    '& .img-wrapper':{
      width: 100,
      marginRight: 20,
      '& img':{
        width: '100%',
        cursor: 'pointer',
      }
    },
    '& .title-wrapper':{
      display: 'flex',
      justifyContent: 'space-between',
      '& h2':{
        fontSize: '1rem',
        ['@media (min-width:768px)']: {
          fontSize: '1.5rem',
        },
      },
      '& .tag':{
        backgroundColor: theme.colors.primary,
        borderRadius: 30,
        width: 80,
        minWidth: 80,
        height: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
      }
    }
  }
});

export default styles;
