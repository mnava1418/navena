module.exports = {
    mainMenu: [
        {
            href: '#home',
            innerText: 'Inicio'
        },
        {
            href: '#services',
            innerText: 'Servicios'
        },
        {
            href: '#about',
            innerText: 'Acerca de mi'
        },
    ],
    services : [
        {
            name: 'Presencial',
            img: '/images/onsite.jpg',
            price: '$500',
            items: [
                'Historia clínica',
                'Diagnóstico nutricional',
                '2 Menús personalizados',
                'Lista de alimentos',
                'Asesorías en WhatsApp',
                'Diagnóstico de composición corporal'  
            ],
        },
        {
            name: 'Online',
            img: '/images/online.jpg',
            price: '$450',
            items: [
                'Historia clínica',
                'Diagnóstico nutricional',
                '2 Menús personalizados',
                'Lista de alimentos',
                'Asesorías en WhatsApp',
            ],
        },
    ],
    consultas: [
        {
            name: 'Presencial',
            price: '$500'
        },
        {
            name: 'Online',
            price: '$450'
        }
    ]
}