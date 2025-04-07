/** @type {import('tailwindcss').Config} */

module.exports = {
  important: true,
  content: [
    "./themes/**/layouts/**/*.html",
    "./layouts/**/*.html"
  ],
  theme: {
    fontFamily: {
      'sans': ['Roundo', 'Noto Sans JP', 'Hiragino Maru Pro', 'sans-serif'],
      'mono': ['SFMono-Regular', 'Menlo'],
    },
    fontWeight: {
      normal: 400,
      bold: 600,
    },
    extend: {
      width: {
        '42': '10.5rem',
        '62': '15.5rem',
        '68': '17rem',
        '70': '17.5rem',
        '74': '18.5rem',
        '76': '19rem',
        '84': '21rem',
        '88': '22rem',
        '96': '24rem',
        '104': '26rem',
        '118': '29.5rem',
        '132': '33rem',
        '140': '35rem',
        '144': '36rem',
        '192': '48rem',
        '216': '54rem',
        '3block': '75rem'
      },
      height: {
        '42': '10.5rem',
        '62': '15.5rem',
        '68': '17rem',
        '70': '17.5rem',
        '74': '18.5rem',
        '76': '19rem',
        '84': '21rem',
        '88': '22rem',
        '96': '24rem',
        '104': '26rem',
        '132': '33rem',
        '144': '36rem',
        '216': '54rem',
      },
      margin: {
        '21': '5.3rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '43': '10.75rem',
        '54': '13.5rem',
        '58': '14.5rem',
        '70': '17.5rem',
        '74': '18.5rem',
        '84': '21rem',
        '96': '24rem',
        '144': '36rem',
        '216': '54rem',
      },
      minWidth: {
        '42': '10.5rem',
        '58': '14.5rem',
        '72': '18rem',
        '96': '24rem',
        '144': '36rem',
        '216': '54rem'
      },
      maxWidth: {
        '42': '10.5rem',
        '84': '21rem',
        '96': '24rem',
        '122': '30.5rem',
        '144': '36rem',
        '192': '48rem',
      },
      minHeight: {
        '42': '10.5rem',
        '16': '4rem',
        '70': '17.5rem',
        '72': '18rem',
        '96': '24rem',
        '104': '26rem',
        '132': '33rem',
        '136': '34rem',
        '144': '36rem',
        '216': '54rem',
      },
      lineHeight: {
        '14': '3.5rem',
      },
      inset: {
        '16': '4rem',
        '32': '8rem',
        '48': '12rem',
      },
      borderWidth: {
        '16': '16px',
      },
      colors: {
        'primary-bg': 'var(--color-primary-bg)',
        'secondary-bg': 'var(--color-secondary-bg)',
        'tertiary-bg': 'var(--color-tertiary-bg)', 
        'quaternary-bg': 'var(--color-quaternary-bg)',
        'primary-text': 'var(--color-primary-text)',
        'secondary-text': 'var(--color-secondary-text)',
        'epierrot': 'var(--color-epierrot)',
        'borders': 'var(--color-borders)',
        transparent: 'transparent',
        current: 'currentColor',
      },
    },
  },
  plugins: [
  ],
}
