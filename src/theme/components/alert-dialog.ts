import { Dimensions } from 'react-native';
import { mode } from '../tools';

const sizes = {
  xs: {
    contentSize: {
      width: '60%',
      maxWidth: '280',
    },
  },
  sm: {
    contentSize: {
      width: '65%',
      maxWidth: '320',
    },
  },
  md: {
    contentSize: {
      width: '75%',
      maxWidth: '380',
    },
  },
  lg: {
    contentSize: {
      width: '80%',
      maxWidth: '520',
    },
  },
  xl: {
    contentSize: {
      width: '90%',
      maxWidth: '580',
    },
  },
  full: {
    contentSize: {
      width: '100%',
    },
  },
};

export const AlertDialog = {
  baseStyle: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sizes,
  defaultProps: {
    size: 'md',
    closeOnOverlayClick: true,
  },
};

export const AlertDialogContent = {
  baseStyle: (props: Record<string, any>) => {
    return {
      bg: mode('coolGray.50', 'gray.700')(props),
      _text: { color: mode('coolGray.800', 'warmGray.50')(props) },
      shadow: 1,
      rounded: 'lg',
      maxHeight: `${Dimensions.get('window').height - 150}px`,
      overflow: 'hidden',
    };
  },
};
export const AlertDialogCloseButton = {
  baseStyle: (props: Record<string, any>) => {
    return {
      position: 'absolute',
      right: '3',
      top: '3',
      zIndex: '1',
      colorScheme: 'coolGray',
      p: '2',
      _icon: {
        size: '3',
        color: mode('coolGray.600', 'coolGray.100')(props),
      },
    };
  },
};
export const AlertDialogHeader = {
  baseStyle: (props: Record<string, any>) => {
    return {
      py: '4',
      px: '3',
      borderBottomWidth: '1',
      borderColor: mode('coolGray.200', 'gray.600')(props),
      _text: {
        fontSize: 'md',
        fontWeight: 'semibold',
        color: mode('coolGray.800', 'warmGray.50')(props),
        lineHeight: 'sm',
      },
    };
  },
};
export const AlertDialogBody = {
  baseStyle: (props: Record<string, any>) => {
    return {
      pt: '2',
      p: '3',
      _text: {
        color: mode('coolGray.600', 'coolGray.300')(props),
      },
    };
  },
};
export const AlertDialogFooter = {
  baseStyle: (props: Record<string, any>) => {
    return {
      p: '3',
      bg: mode('coolGray.100', 'gray.600')(props),
      flexDirection: 'row',
      justifyContent: 'flex-end',
      flexWrap: 'wrap',
    };
  },
};
export const AlertDialogOverlay = {
  baseStyle: {
    position: 'absolute',
    left: '0',
    top: '0',
    opacity: '50',
    right: '0',
    bottom: '0',
  },
};
