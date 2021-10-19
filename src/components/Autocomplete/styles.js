const styles = (theme) => ({
  wrapper:{
    display: 'flex',
    marginBottom: 30,
    '& .ant-select.ant-select-auto-complete':{
      width: '100%',
      '& .ant-select-selector':{
        height: 40,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        '& input':{
          height: 40
        },
      },
      '& .ant-select-selection-placeholder':{
        display: 'flex',
        alignItems: 'center'
      },
      '&.ant-select:not(.ant-select-disabled):hover .ant-select-selector':{
        borderColor: theme.colors.primary
      },
      '&.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector':{
        borderColor: theme.colors.primary
      }
    },
    '& button':{
      backgroundColor: theme.colors.primary,
      color: 'white',
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
      border: 'none',
      padding: '5px 10px',
      height: 40,
      width: 80,
      cursor: 'pointer'
    }
  }
});

export default styles;
