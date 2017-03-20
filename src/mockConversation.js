// every bot message can invoke another message and declare the next set of responseses
// A response specifies which bot message to fire

export default [
    {
        id: 'welcome',
        user: 'bot',
        value: "Ugh... Hi, welcome to Nir's website. Nir built me because he's obviously sooo busy, and can't talk to you himself...",
        replies: [
            {
                value: 'Who?',
                next: 'who'
            }
        ]
    },
    {
        id: 'who',
        user: 'bot',
        value: 'I am so happy you asked 😒... Nir Benita is a product designer at Wix.com, currently focused on improving the Developer Experience inside the company',
        replies: [
            {
                value: "📐 designer?",
                next: "designer"
            },
            {
                value: "🔨 developer?",
                next: "developer"
            }
        ]
    },
    {
        id: 'designer',
        users: 'bot',
        value: 'Nir spends way too much time doing UX/UI design at Wix. He worked on the Wix editor, shoutout, currently working on...',
        replies: [
            {
                value: "So, he makes things pretty?",
                next: "makePretty"
            },
            {
                value: "👍",
                next: "developer"
            }
        ]

    },
    {
        id: 'developer',
        users: 'bot',
        value: 'Regarding web development, he writes Javascript (React JS, specifically). He will also write some Arduino code on special occasions.',
        replies: [
            {
                value: "What did he build",
                next: "devWork"
            },
            {
                value: "👍",
                next: "designer"
            }
        ]

    },
    {
        id: 'makePretty',
        users: 'bot',
        value: 'wow, you obviously know so much about design... If you have a few minutes, checkout one of his articles on [Medium]()',
        replies: [
            {
                value: "👍",
                next: "developer"
            }
        ]

    },
    {
        id: 'devWork',
        users: 'bot',
        value: 'Most of the code he wrote is used internally at Wix, but here are some Github repos:',
        replies: [
            {
                value: "👍",
                next: "done"
            }
        ]

    },
    {
        id: 'done',
        users: 'bot',
        value: "it's a good thing Nir isn't interesting, because that means we're done 🙌. I you'd like to talk to him directly, I would suggest reaching out on (Twitter)[]",
        replies: [
            {
                value: "",
                next: ""
            },
            {
                value: "",
                next: ""
            }
        ]
    },
    {
        id: 'toPin',
        users: 'benita',
        value: 'Hi! This is Nir, welcome to my website! I’m sorry I couldn’t be here to greet you myself, but I left my bot to answer your questions. I’m still working out some kinks with his attitude, but I’m sure you’ll get a long 💜',
    }
]

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