// every bot message can invoke another message and declare the next set of responseses
// A response specifies which bot message to fire

export default [
    {
        id: 'welcome',
        user: 'bot',
        value: "👋 Welcome I'm Nir Benita's personal bot. Nir built me because he's obviously soooo busy, and can't talk to you himself...",
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
        value: "So happy you asked 😒... Nir Benita is a self-taught Product Designer and Front End Developer working at Wix.com.",
        replies: [
            {
                value: "📐 what does he design?",
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
        value: "He`s no Dieter Rams... But he is part of a research team that's focused on future versions of Wix's product. Which I guess is kinda cool, whatever...",
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
        value: "While he's rooted in design, Nir has been studying front end development on his spare time, because he thinks [being inter-disciplenary makes him a better designer](https://medium.com/@nirbenita/designing-hybrids-fcec780197bb)... N-E-R-D 🤓",
        replies: [
            {
                value: "What did he build",
                next: "devWork"
            },
            {
                value: "👍",
                next: "done"
            }
        ]

    },
    {
        id: 'makePretty',
        users: 'bot',
        value: "Ugh, you obviously know so much about design... Less **Pretty**, more **Useful** and **Usable**. If you'd like to know more, he sometimes likes to [write about it](https://medium.com/@nirbenita)... Shocking, I know",
        replies: [
            {
                value: "You said something about code?",
                next: "developer"
            }
        ]

    },
    {
        id: 'devWork',
        users: 'bot',
        value: "Great, no more quest... Ah, well he built me, but I'm not sure that's all that impressive... here are some more meh-worthy, [public repos on Github](https://github.com/NirBenita)",
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
        value: "I REALLY enjoyed talking to you, I don't know what I'll do now that you're leaving (🎉🍻)",
        chain: 'contactMe',
        replies: []
    },
    {
        id: 'contactMe',
        users: 'bot',
        value: "For questions, (or complaints about my attitude) reach out [on 🐓 Twitter!](twitter.com/NirBenita)",
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