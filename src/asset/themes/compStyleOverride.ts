export default function componentStyleOverrides(theme: any) {
  return {
    // MuiTypography: {
    //   styleOverrides: {
    //     root: {
    //       fontSize: '.875rem',
    //       '@media (min-width: 1536px)': {
    //         fontSize: '1rem',
    //       },
    //     },
    //   },
    // },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: '10px',
          padding: '.7rem 6rem',
          boxShadow: 'none',
          minWidth: '7.5rem',
          '&.MuiButton-containedSecondary': {
            backgroundColor: theme.colors.secondaryBtnBgColor,
            color: theme.colors.secondaryBtnColor,
          },
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&-MuiTab-root.Mui-selected': {
            color: '#000',
          },
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        rounded: {
          borderRadius: `${theme?.customization?.borderRadius}px`,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          '.MuiPaper-root.MuiDialog-paper': {
            maxWidth: '790px !important',
          },
          '&.cpt-lookup-dialog .MuiPaper-root.MuiDialog-paper': {
            maxWidth: '90% !important',
          },
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          main: {
            paddingTop: '0px !important',
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&$checked': {
            color: `${theme.buttonColor} !important`,
          },
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          color: theme.colors?.textDark,
          padding: '24px',
        },
        title: {
          fontSize: '1.125rem',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '24px',
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: '24px',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: theme.menuColor,
          paddingTop: '10px',
          paddingBottom: '10px',
          '&.Mui-selected': {
            color: theme.textLight,
            backgroundColor: '#F8F9FA',
            borderRadius: '0',
            '&:hover': {
              color: theme.textLight,
              backgroundColor: '#F8F9FA',
            },
            '& .MuiListItemIcon-root': {
              color: theme.textLight,
            },
          },
          '&:hover': {
            backgroundColor: theme.divider,
          },
          '&.MuiListItemIcon-root': {
            minWidth: '32px',
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: '0px',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.main-menu': {
            color: theme.textSecondary,
            paddingTop: '5px',
            paddingBottom: '5px',
            '& h5': {
              fontSize: '1rem',
              fontWeight: 500,
            },
            '& svg': {
              color: theme.textSecondary,
              fontSize: '25px',
            },
            '&.Mui-selected': {
              color: theme.textLight,
              backgroundColor: theme.backgroundDefault,
              borderBottom: '3px solid #00498F',
              '& h5': {
                color: theme.textLight,
              },
              '&:hover': {
                backgroundColor: theme.default,
              },
              '& .MuiListItemIcon-root': {
                color: theme.textLight,
              },
              '& svg': {
                color: theme.textLight,
              },
            },
            '&:hover': {
              backgroundColor: theme.divider,
            },
          },
          '&.sub-menu': {
            color: theme.backgroundDefault,
            paddingTop: '5px',
            paddingBottom: '5px',
            '& svg': {
              color: theme.backgroundDefault,
              fontSize: '25px',
            },
            '&.Mui-selected': {
              color: theme.backgroundDefault,
              backgroundColor: theme.colors.primaryMain,
              borderRadius: '5px',
              '&:hover': {
                backgroundColor: theme.colors.primaryMain,
              },
              '& .MuiListItemIcon-root': {
                color: theme.backgroundDefault,
              },
              '& svg': {
                color: theme.backgroundDefault,
              },
            },
            '&:hover': {
              '& .MuiListItemIcon-root': {},
            },
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: theme.menuColor,
          minWidth: '36px',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: theme.textDark,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '& MuiInputBase-inputSizeSmall': {
            backgroundColor: 'pink',
          },
        },
        input: {
          border: `1px solid ${theme.colors.borderMain}`,
          borderRadius: theme.customization.borderRadius,
          backgroundColor: '#fff',
          color: 'rgba(16, 24, 40, 1)',
          // color: theme.colors.textSecondary,
          fontSize: '1rem',
          '&::placeholder': {
            color: theme.darkTextSecondary,
            fontSize: '1rem',
          },
          '&.MuiInputBase-inputAdornedEnd': {
            borderRight: '0px',
            borderTopRightRadius: '0px',
            borderBottomRightRadius: '0px',
          },
          '&.MuiAutocomplete-input': {
            borderRight: `1px solid ${theme.colors.borderMain} !important`,
            borderTopRightRadius: theme.customization.borderRadius,
            borderBottomRightRadius: theme.customization.borderRadius,
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          border: 'none',
          backgroundColor: '#fff',
          '&:hover': {
            backgroundColor: '#fff',
          },
          '&.Mui-disabled': {
            backgroundColor: '#fff !important',
          },
          '& .MuiAutocomplete-endAdornment': {
            right: '15px !important',
            top: 'calc(50% - 10px)',
            padding: '0px !important',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: `${theme?.customization?.borderRadius}px`,
          width: '100%',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: `${theme.colors?.borderMain} !important`,
          },
          '&:hover $notchedOutline': {
            borderColor: theme.colors?.primaryLight,
          },
          '&.MuiInputBase-multiline': {
            padding: 1,
          },
        },

        input: {
          fontWeight: 500,
          borderRadius: `${theme?.customization?.borderRadius}px`,
          '&.MuiInputBase-inputSizeSmall': {
            padding: '10px 14px',
            '&.MuiInputBase-inputAdornedStart': {
              paddingLeft: 0,
            },
          },
        },
        inputAdornedStart: {
          paddingLeft: 4,
        },
        notchedOutline: {
          borderRadius: `${theme?.customization?.borderRadius}px`,
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: theme.colors?.grey300,
          },
        },
        mark: {
          backgroundColor: theme.paper,
          width: '4px',
        },
        valueLabel: {
          color: theme?.colors?.primaryLight,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          marginTop: '8px !important',
          borderColor: theme.divider,
          opacity: 1,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          color: theme.colors?.paper,
          background: theme.colors?.primary,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          '&.MuiChip-deletable .MuiChip-deleteIcon': {
            color: 'inherit',
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: theme.paper,
          background: theme.colors?.grey700,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: theme.customization.borderRadius,
          '&.MuiIconButton-edgeEnd': {
            padding: '11px',
            marginRight: '-8px',
          },
          '&.MuiPickersArrowSwitcher-button': {
            border: 'none',
          },
          '&.MuiAutocomplete-clearIndicator svg': {
            height: '.65em',
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          height: '.95em',
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          marginLeft: '0px',
          '&.MuiInputAdornment-positionEnd': {
            button: {
              border: `1px solid ${theme.colors.borderMain}`,
              borderBottomLeftRadius: '0px',
              borderTopLeftRadius: '0px',
              borderLeft: 'none',
              padding: '8px 12px 7px',
              '@media (min-width: 1200px)': {
                paddingTop: '5px',
                paddingBottom: '6px',
              },
              '&:hover': {
                backgroundColor: '#fff',
              },
            },
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          borderTopLeftRadius: theme.customization.borderRadius,
          borderTopRightRadius: theme.customization.borderRadius,
          '& .MuiTabs-flexContainer': {
            padding: '8px',
          },
          '& .MuiTab-root': {
            fontSize: '.875rem',
            fontWeight: 'bold',
            color: theme.colors.textSecondary,
            borderRadius: theme.customization.borderRadius,
            // minHeight: '65px',
            paddingTop: '8px',
            paddingBottom: '8px',
            marginLeft: '12px',
            marginRight: '12px',
            minWidth: '100px',
            minHeight: '36px',
          },
          '& .MuiTab-root.Mui-selected': {
            color: theme.colors.textLight,
            backgroundColor: '#E6EDF4',
          },
          '& .MuiTabs-indicator': {
            display: 'none',
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: '.75rem',
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: '0px !important',
          paddingright: '0px !important',
          paddingBottom: '0px !important',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .table-custom-column > th': {
            background: '#F9FAFB',
            position: 'sticky',
            zIndex: 2,
            color: 'rgba(102, 112, 133, 1)',
            borderRadius: 0,
            top: 0,
            textAlign: 'left',
            fontWeight: 500,
            height: '1rem !important',
            fontSize: 12,
            borderBottom: '1px solid rgba(234, 236, 240, 1)',
            minWidth: '11rem !important',
          },
          '& .table-custom-column > .MuiTableCell-head': {
            padding: '12px 16px !important',
          },
          '& .table-custom-column >  .MuiTableCell-head.table-heading-claim-no':
            {
              paddingLeft: '24px !important',
            },
          '& .table-custom-column > :first-of-type': {
            zIndex: 3,
            left: 0,
            textAlign: 'center',
            top: 0,
            boxShadow: '6px 0px 4px 0px rgba(0, 0, 0, 0.05)',
            '@media (max-width: 720px)': {
              boxShadow: 'none',
              zIndex: 0,
              position: 'sticky',
              left: 'auto',
              top: 0,
            },
          },
          '& .table-custom-column > :last-child': {
            zIndex: 3,
            right: -1,
            top: 0,
            boxShadow: '-6px 0px 4px 0px rgba(0, 0, 0, 0.05)',
            '@media (max-width: 720px)': {
              boxShadow: 'none',
              zIndex: 0,
              position: 'sticky',
              right: 'auto',
              top: 0,
            },
          },

          '& .not-cpt-table  > .MuiTableCell-head.cptTableheading': {
            padding: '8px 5px !important',
          },
          '& .not-cpt-table > .MuiTableCell-head.cptTableheading.table-heading-claim-no':
            {
              padding: '12px 16px 12px 28px !important',
            },

          '& tr > th': {
            background: '#F9FAFB',
            position: 'sticky',
            zIndex: 2,
            color: 'rgba(102, 112, 133, 1)',
            borderRadius: 0,
            top: 0,
            fontWeight: 500,
            height: '1rem !important',
            fontSize: 12,
            borderBottom: '1px solid rgba(234, 236, 240, 1)',
          },
          '& tr > .MuiTableCell-head': {
            padding: '12px 16px !important',
          },
          '& tr > .MuiTableCell-head.cptTableheading': {
            padding: '8px 5px !important',
          },

          '& tr > .MuiTableCell-head.cptTableheading.table-heading-claim-no': {
            padding: '8px 5px 8px 28px !important',
          },
          '& .table-non-sticky > th:first-of-type': {
            paddingLeft: '32px !important',
          },
          '& .table-non-sticky > th': {
            textAlign: 'left !important',
          },
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          minHeight: '300px',
          '& .table-custom-column > :first-of-type': {
            position: 'sticky',
            zIndex: 1,
            left: 0,
            background: '#fff',
            boxShadow: '6px 0px 4px 0px rgba(0, 0, 0, 0.05)',
            '@media (max-width: 720px)': {
              position: 'relative',
              boxShadow: 'none',
              zIndex: 0,
            },
          },
          '& .table-custom-column > :last-child': {
            position: 'sticky',
            background: '#fff',
            zIndex: 1,
            right: -1,
            boxShadow: '-6px 0px 4px 0px rgba(0, 0, 0, 0.05)',
            '@media (max-width: 720px)': {
              position: 'relative',
              boxShadow: 'none',
              zIndex: 0,
            },
          },
          '& .table-custom-column > td': {
            fontSize: 14,
            textAlign: 'left !important',
            height: '4.5rem !important',
            minWidth: '11 rem !important',
          },
          '& .not-cpt-table > td': {
            height: '4.5rem !important',
          },

          '& tr > td': {
            fontSize: 14,
            height: '3.5rem !important',
            //minWidth: '11rem !important',
          },

          '&.last-column-bold > tr:last-child td': {
            fontSize: 16,
            height: '4.5rem !important',
            fontWeight: '600 !important',
            //borderBottom: 'none',
          },
          '&.last-column-bold > tr:last-child .MuiFormControl-root': {
            display: 'none !important',
          },
          '&.last-column-bold > td': {
            paddingLeft: '5px !important',
            paddingRight: '5px !important',
          },
          '&.last-column-bold thead tr th': {
            paddingLeft: '5px',
            paddingRight: '5px',
          },
          '& .table-non-sticky > td:first-of-type': {
            paddingLeft: '32px !important',
          },
          '& .table-non-sticky > td': {
            fontSize: 14,
            textAlign: 'left !important',
            height: '4.5rem !important',
            minWidth: '11 rem !important',
          },
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          color: '#201F24',
          fontSize: '1.125rem',
          borderBottom: '1px solid #A3ABB7',
        },
      },
    },
  }
}
