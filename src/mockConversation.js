// every bot message can invoke another message and declare the next set of responseses
// A response specifies which bot message to fire

export default [
    {
        id: 'welcome',
        user: 'bot',
        value: 'I am the passive agressive chat bot. Im SOOOO happy to meet you',
        replies: [
            {
                value: '🦄',
                next: 'unicorn'
            },
            {
                value: '🐮',
                next: 'cow'
            }
        ]
    },
    {
        id: 'unicorn',
        user:'bot',
        value:'Ah, I see you went with the unicorn... I am ecstatically happy...'
    },
    {
        id: 'cow',
        user:'bot',
        value:'A cow! How... Indian'
    }
]