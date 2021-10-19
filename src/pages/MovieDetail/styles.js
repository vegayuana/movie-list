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
    marginTop: 30,
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
        margin: 0
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
          paddingBottom: 15
        },
        '& td':{
          paddingLeft: 25
        }
      }
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
        display: 'grid',
        gridTemplateColumns: 'auto auto auto'
      },
      '& .card':{
        borderRadius: 8,
        textAlign: 'center',
        margin: 20,
        padding: 20,
        border: `1px solid ${theme.colors.secondary}`,
        '& svg':{
          fontSize: '2rem',
          color: theme.colors.primary
        }
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
