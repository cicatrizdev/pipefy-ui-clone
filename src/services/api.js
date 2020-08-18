export function loadLists() {
  return [
    { 
      title: 'ToDo', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Study React',
          labels: ['#7159c1'],
          user: 'https://api.adorable.io/avatars/285/user1.png'
        },
        {
          id: 2,
          content: 'Write new post on blog',
          labels: ['#7159c1'],
          user: 'https://api.adorable.io/avatars/285/user2.png'
        },
        {
          id: 3,
          content: 'Save money',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/285/user3.png'
        },
        {
          id: 4,
          content: 'Call my parents',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/285/user1.png'
        },
        {
          id: 5,
          content: 'Buy gift for girlfriend',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/285/user1.png'
        },
      ]
    },
    { 
      title: 'Doing', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Clone Pipefy UI',
          labels: [],
          user: 'https://api.adorable.io/avatars/285/user5.png'
        }
      ]
    },
    { 
      title: 'On Hold', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Play the guitar',
          labels: ['#7159c1'],
          user: 'https://api.adorable.io/avatars/285/user2.png'
        },
        {
          id: 8,
          content: 'Go to gym',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/285/user8.png'
        },
        {
          id: 9,
          content: 'Fix RaspberryPi',
          labels: [],
        }
      ]
    },
    { 
      title: 'Done', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Cook healthy food',
          labels: ['#54e1f7'],
        },
        {
          id: 12,
          content: 'Use the stairs',
          labels: ['#54e1f7'],
        }
      ]
    },
  ];
}