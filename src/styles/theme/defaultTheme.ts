export const DEFAULT_THEME = {
  type: {
    title: {
      l: `
        font-weight: bold;
        font-size: 1.5rem;
        line-height: 130%;
      `,
      m: `
        font-weight: bold;
        font-size: 1.25rem;
        line-height: 160%;
      `,
      s: `
        font-weight: bold;
        font-size: 1.125rem;
        line-height: 160%;
      `,
    },
    text: {
      m: `
        font-size: 1rem;
        line-height: 160%;
      `,
      s: `
        font-size: 0.875rem;
        line-height: 160%;
      `,
    },
    components: {
      link: `
        font-size: 0.75rem;
        font-weight: bold;
      `,
    },
  },
  colors: {
    base: {
      input: '#040F1A',
      background: '#071422',
      profile: '#0B1B2B',
      post: '#112131',
      border: '#1C2F41',
      label: '#3A536B',
      span: '#7B96B2',
      text: '#AFC2D4',
      subtitle: '#C4D4E3',
      title: '#E7EDF4',
    },
    brand: {
      blue: '#3294F8',
    },
  },
} as const
