import { makeStyles } from '@material-ui/core/styles';

const sectionMargin = margin => (margin * 15);
export const useSpacing = makeStyles(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
  },
  spaceBottom: {
    marginBottom: sectionMargin(theme.spacing(1)),
    [theme.breakpoints.down('md')]: {
      marginBottom: sectionMargin(6)
    }
  },
  spaceTop: {
    marginTop: sectionMargin(theme.spacing(1)),
    [theme.breakpoints.down('md')]: {
      marginTop: sectionMargin(6)
    }
  },
  spaceBottomShort: {
    marginBottom: sectionMargin(theme.spacing(1) / 2)
  },
  spaceTopShort: {
    marginTop: sectionMargin(theme.spacing(1) / 2)
  },
  containerWrap: {
    '& > section': {
      position: 'relative'
    }
  },
  containerGeneral: {
    position: 'relative',
    paddingTop: 32,
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 32,
      paddingRight: 32
    }
  },
  fullScreenContainer: {
    height: '100vh',
    display: 'flex'
  },
  maintenanceIcon: {
    margin: '10px 20px',
    background: 'rgba(255,255,255,0.6)',
    color: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main,
    width: 100,
    height: 100,
    boxShadow: theme.shadows[4],
    '& svg': {
      fontSize: 64,
    },
  }
}));

export const useTextAlign = makeStyles({
  textCenter: {
    textAlign: 'center'
  },
  textLeft: {
    textAlign: 'left'
  },
  textRight: {
    textAlign: 'right'
  }
});

export const useFloat = makeStyles({
  floatLeft: {
    float: 'left'
  },
  floatRight: {
    float: 'right'
  },
});

export const useText = makeStyles(theme => ({
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 48,
    lineHeight: '72px',
    [theme.breakpoints.down('md')]: {
      fontSize: 38,
      lineHeight: '60px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 28,
      lineHeight: '44px'
    },
  },
  title2: {
    fontSize: 36,
    lineHeight: '56px',
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down('md')]: {
      fontSize: 32,
      lineHeight: '48px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 24,
      lineHeight: '36px',
    }
  },
  subtitle: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: 28,
    lineHeight: '44px',
    [theme.breakpoints.down('md')]: {
      fontSize: 24,
      lineHeight: '36px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 18,
      lineHeight: '28px',
    },
  },
  subtitle2: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 22,
    lineHeight: '32px',
    [theme.breakpoints.down('md')]: {
      fontSize: 20,
      lineHeight: '32px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
      lineHeight: '24px',
    },
  },
  paragraph: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 16,
    lineHeight: '24px'
  },
  caption: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 16,
    lineHeight: '24px',
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
      lineHeight: '22px',
    },
  }
}));

export const useHidden = makeStyles(theme => ({
  lgDown: {
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  mdDown: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  smDown: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  xsDown: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  lgUp: {
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  },
  mdUp: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  smUp: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
}));

export const useFlipRtl = makeStyles(theme => ({
  transform: theme.direction === 'rtl' ? 'scale(-1)' : 'none'
}));
