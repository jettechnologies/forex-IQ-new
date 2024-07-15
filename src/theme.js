// // theme.js
// import { extendTheme } from '@chakra-ui/react';

// const theme = extendTheme({
//   fonts: {
//     heading: `'Rajdhani', sans-serif`,
//     body: `'Rajdhani', sans-serif`,
//   },
//   styles: {
//     global: {
//       '@import': [
//         "url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap')",
//       ],
//     },
//   },
// });

// export default theme;


// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Rajdhani', sans-serif`,
    body: `'Rajdhani', sans-serif`,
  },
  styles: {
    global: {
      '@import': [
        "url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap')",
      ],
    },
  },
  textStyles: {
    heading: {
      fontWeight: 600,
    },
    subheading: {
      fontWeight: 500,
    },
    paragraph: {
      fontWeight: 400,
    },
    smallText: {
      fontWeight: 300,
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 600,
      },
    },
    Text: {
      baseStyle: {
        fontWeight: 400,
      },
      variants: {
        subheading: {
          fontWeight: 500,
        },
        small: {
          fontWeight: 300,
        },
      },
    },
  },
});

export default theme;
