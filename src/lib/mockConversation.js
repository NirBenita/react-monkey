// every bot message can invoke another message and declare the next set of responseses
// A response specifies which bot message to fire

export default [
    {
        id: 'welcome',
        user: 'bot',
        value: "🤖👋, to **React Monkey**",
        replies: [
            {
                value: 'React what now?',
                next: 'what'
            }
        ]
    },
    {
        id: 'what',
        user: 'bot',
        value: 'React Monkey is a tiny project for building Dialog-Tree chat appliactions.',
        replies: [
            {
                value: "Why would I need that?",
                next: "why"
            },
            {
                value: "Ah, finally!",
                next: "finally"
            }
        ]
    },
    {
        id: 'why',
        users: 'bot',
        value: "Not sure, better go [here to find out](https://github.com/NirBenita/react-monkey)",
        replies: [
            {
                value: "👍",
                next: "finally"
            }
        ]

    },
    {
        id: 'finally',
        users: 'bot',
        value: 'If you have a minute, you can learn a lot more about this project [here](https://www.youtube.com/watch?v=ye6yNLsdUCE)',
        replies: [
            {
                value: "what did I just see?",
                next: "why"
            }
        ]

    }]

// Templates
// {
//     id: '',
//     users: 'bot',
//     value:'',
//     replies: [
//         {
//             value: "",
//             next: ""
//         },
//         {
//             value: "",
//             next: ""
//         }
//     ]

// }