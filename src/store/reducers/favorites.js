const INITIAL_STATE = [];

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [
        ...state,
        {
          id: Math.random(),
          name: 'angular/angular',
          description: 'Repositório do Angular',
          url: 'http://github.com/angular/angular',
        },
      ];

    default:
      return state;
  }
}
