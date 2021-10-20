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
    '& .back':{
      fontSize: '3rem',
      cursor: 'pointer'
    }
  },
  detail:{
    margin: '30px 20px 0',
    ['@media (max-width:767px)']: {
      textAlign: 'center'
    },
    '& .top':{
      marginBottom: 30,
      color: theme.colors.text,
      ['@media (min-width:768px)']: {
        display: 'flex'
      },
      '& h1':{
        fontSize: '2.8rem',
        margin: 0,
        ['@media (max-width:767px)']: {
          fontSize: '2rem',
          lineHeight: '1.8rem',
          margin: '20px 0 10px'
        },
        ['@media (max-width:1299px)']: {
          fontSize: '1.7rem',
        },
      },
      '& .bullet':{
        fontSize: '0.5rem',
        margin: '2px 10px'
      },
      '& .title':{
        textAlign: 'center',
        marginBottom: 20
      },
      '& table':{
        textAlign: 'left',
        '& td, & th':{
          paddingBottom: 15,
          verticalAlign: 'top'
        },
        '& td':{
          paddingLeft: 25
        }
      },
      '& .wide-screen':{
        '& h2':{
          color: theme.colors.text
        },
        textAlign: 'left',
        ['@media (min-width:768px)']: {
          display: 'none',
        },
        ['@media (min-width:1300px)']: {
          display: 'block',
        },
      }
    },
    '& .medium-screen':{
      display: 'none',
      ['@media (min-width:768px)']: {
        display: 'block',
        textAlign: 'center',
        marginBottom: 20,
        '& h2':{
          color: theme.colors.text
        },
      },
      ['@media (min-width:1300px)']: {
        display: 'none',
      },
    },
    '& .img-wrapper':{
      maxWidth: 400,
      width: '100%',
      ['@media (max-width:767px)']: {
        margin: 'auto'
      },
      ['@media (min-width:768px)']: {
        marginRight: 50
      },
      '& img':{
        width: '100%'
      }
    },
    '& .bottom':{
      paddingBottom: 100,
      '& h3':{
        fontSize: '2rem',
        textAlign: 'center',
        color: theme.colors.text,
        margin: 0
      },
      '& h4':{
        fontSize: '1.5rem',
        textAlign: 'center',
        color: theme.colors.text,
      },
      '& .ratings-title':{
        fontSize: '1.8rem'
      },
      '& .ratings':{
        display:'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      },
      '& .card':{
        borderRadius: 8,
        textAlign: 'center',
        margin: '10px 10px',
        padding: 20,
        width: '100%',
        border: `1px solid ${theme.colors.secondary}`,
        '& svg':{
          fontSize: '2rem',
          color: theme.colors.primary
        },
        ['@media (min-width:768px)']: {
          width: 150,
          margin: 20,
        },
        ['@media (min-width:1300px)']: {
          width: 200,
        },
      },
      '& .card:first-child':{
        '& svg':{
          fontSize: '2.2rem',
        }
      },
      '& table':{
        textAlign: 'left',
        '& th':{
          width: 300
        }
      }
    }
  }
});

export default styles;
