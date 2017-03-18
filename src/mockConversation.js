// every bot message can invoke another message and declare the next set of responseses
// A response specifies which bot message to fire

export default [
    {
        id: 'welcome',
        user: 'bot',
        value: "Welcome. I'm Nir Benita's passive agressive bot, he built me because he's obviously sooo busy, and can't talk to you himself...",
        replies: [
            {
                value: 'Who?',
                next: 'who'
            }
        ]
    },
    {
        id: 'who',
        user:'bot',
        value:'I am so happy you asked... Nir Benita is a product designer and front end developer at Wix.com.',
        replies: [
            {
                value: "designer?",
                next: "designer"
            },
            {
                value: "developer?",
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
        id: 'developer',
        users: 'bot',
        value:'Nir is no developer, but he did build this app :)',
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