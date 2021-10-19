const styles = () => ({
  modal:{
    '& .ant-modal-content':{
      marginTop: 30,
      borderRadius: 10
    },
    '& .ant-modal-body':{
      textAlign: 'center'
    },
    '& .img-wrapper':{
      maxWidth: 320,
      width: '100%',
      margin: 'auto',
      '& img':{
        width: '100%',
      }
    },
    '& h4':{
      fontSize: '1.3rem',
      margin: '20px 0 0 0'
    }
  }
});

export default styles;
