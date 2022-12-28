import person from '../../Assets/img/person.svg'
import securePerson from '../../Assets/img/secure-person.svg'
import check from '../../Assets/img/check.svg'

export const options = [
    {
        id: 1,
        icon: person,
        title: 'Mening Profilim', 
        desc: 'Hisob sozlamalari',
        path: '/my-profile'
    },
    {
        id: 1,
        icon: securePerson,
        title: 'Mening kirish qutim', 
        desc: 'Xabarlar va elektron pochta',
        path: '/my-box'
    },
    {
        id: 1,
        icon: check,
        title: 'Mening vazifalarim', 
        desc: 'Vazifalar va kundalik vazifalar',
        path: '/my-tasks'
    },
]