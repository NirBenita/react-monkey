// every bot message can invoke another message and declare the next set of responseses
// A response specifies which bot message to fire

export default [
    {
        id: 'welcome',
        user: 'bot',
        value: "Hi, welcome to Nir's website. Nir built me because he's obviously sooo busy, and can't talk to you himself...",
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
        value: 'I am so happy you asked 😒... Nir Benita is a Product Designer at Wix.com, currently working on improving the Developer Experience inside the company',
        replies: [
            {
                value: "📐 A Product Designer?",
                next: "designer"
            },
            {
                value: "👍",
                next: "developer"
            }
        ]
    },
    {
        id: 'designer',
        users: 'bot',
        value: 'He`s no Dieter Rams... But he did get to work on some interesting projects like the Wix Editor, as well as some open source projects',
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
        value: 'Besides design, Nir is learning front-end developement, which is how he got to his current position, working on Developer Experience. Such a NERD 🤓',
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
        value: 'Ugh, you obviously know so much about design... Less Pretty, more Useful, or Usable. If you have a few minutes, checkout one of his articles on [Medium]()',
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
        value: 'First of all, he built me, and I am kind of amazing... If want to see anny of his other projects, here are some Github repos',
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
        value: "it's a good thing Nir isn't interesting, because that means we're done 🙌. If you'd like to talk to him directly, I would suggest reaching out on (Twitter)[]",
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