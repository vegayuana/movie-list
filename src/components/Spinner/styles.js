const styles = (theme) => ({
  loading:{
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 40,
    '& .ant-spin.ant-spin-spinning > span':{
      color: theme.colors.primary
    }
  },
});

export default styles;
