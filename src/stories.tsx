import App from './components/App';

const widgets = [
  {
    title: 'Angler.js',
    Component: App,
    useCase: [
      {
        title: 'First stage',
        description: 'React-based renderer for stage',
        paths: [
          '/',
          'index.html',
          'stories.html',
        ],
      },
      {
        title: 'Second stage',
        description: 'React-based renderer for stage',
      },
    ],
  },
  {
    title: 'Input Manager',
    Component: App,
    useCase: [
      {
        title: 'Keybord',
      },
    ],
  },
];

export default widgets;
