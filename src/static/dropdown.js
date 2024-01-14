import Parents from "../components/icons/parents";
import Children from "../components/icons/children";
import System from "../components/icons/system";
import Service from "../components/icons/service";
import Switch from "../components/icons/switch";
import Release from "../components/icons/release";
import Calender from "../components/icons/calender";
import Games from "../components/icons/games";
import Hardware from '../components/icons/hardware';
import Merchandise from '../components/icons/merchandise';
import Exclusive from "../components/icons/exclusive";
import Characters from "../components/icons/characters";
import Deals from "../components/icons/deals";

export default {
    play: [
        {
            id: 0,
            label: "For Kids",
            href: "https://play.nintendo.com/?_gl=1*1j1446q*_ga*Njg1ODgwMzAxLjE3MDQwMDU2NDI.*_ga_F6ERC4HMNZ*MTcwNTA3NjE5NS4yOC4xLjE3MDUwNzY2OTguMC4wLjA.",
            icon: Children,
        },
        {
            id: 1,
            label: "For parents",
            href: "https://play.nintendo.com/parents/?_gl=1*1l9un2f*_ga*Njg1ODgwMzAxLjE3MDQwMDU2NDI.*_ga_F6ERC4HMNZ*MTcwNTA3NjE5NS4yOC4xLjE3MDUwNzY0ODkuMC4wLjA.",
            icon: Parents,
        },
    ],
    switch: [
        {
            id: 0,
            label: "Nintendo Switch lineup",
            href: "https://www.nintendo.com/us/switch/",
            icon: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/Dev/Global%20Navigation/lineup.png",
        },
        {
            id: 1,
            label: "Compare systems",
            href: "https://www.nintendo.com/us/switch/compare/",
            icon: System,
        },
        {
            id: 2,
            label: "Online service",
            href: "https://www.nintendo.com/us/switch/online/",
            icon: Service,
        },
        {
            id: 3,
            label: "Accessories",
            href: "https://www.nintendo.com/us/store/hardware/",
            icon: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_200/Dev/Global%20Navigation/procon.png",
        },
        {
            id: 4,
            label: "Shop systems",
            href: "https://www.nintendo.com/us/store/hardware/systems/",
            icon: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_200/Dev/Global%20Navigation/oled.png",
        },
    ],
    games: [
        {
            id: 0,
            label: "Nintendo Switch games",
            href: "https://www.nintendo.com/us/store/games/nintendo-switch-games/",
            icon: Switch,
        },
        {
            id: 1,
            label: "New releases",
            href: "https://www.nintendo.com/us/store/games/new-releases/",
            icon: Release,
        },
        {
            id: 2,
            label: "Coming soon ",
            href: "https://www.nintendo.com/us/store/games/coming-soon/",
            icon: Calender,
        },
        {
            id: 3,
            label: "Shop games",
            href: "https://www.nintendo.com/us/store/games/",
            icon: Games,
        },
    ],
    store:[
        {
            label: 'Games',
            href: 'https://www.nintendo.com/us/store/games/',
            icon: Games,
            links:[
                {
                    label: 'Nintendo Switch games',
                    href: 'https://www.nintendo.com/us/store/games/nintendo-switch-games/'
                },
                {
                    label: 'New releases',
                    href: 'https://www.nintendo.com/us/store/games/new-releases/'
                },
                {
                    label: 'Sales & deals',
                    href: 'https://www.nintendo.com/us/store/sales-and-deals/'
                }
            ]
        },
        {
            label: 'Hardware',
            href: 'https://www.nintendo.com/us/store/hardware/',
            icon: Hardware,
            links: [
                {
                    label: 'Nintendo Switch systems',
                    href: 'https://www.nintendo.com/us/store/hardware/systems/'
                },
                {
                    label: 'Joy-Con & controllers',
                    href: 'https://www.nintendo.com/us/store/hardware/joy-con-and-controllers/'
                },
                {
                    label: 'Cases & more',
                    href: 'https://www.nintendo.com/us/store/hardware/accessories/'
                },
                {
                    label: 'Replacement parts',
                    href: 'https://www.nintendo.com/us/store/hardware/parts/'
                },
            ]
        },
        {
            label: 'Merchandise',
            href: 'https://www.nintendo.com/us/store/merchandise/',
            icon: Merchandise,
            links: [
                {
                    label: 'Apparel & accessories',
                    href: 'https://www.nintendo.com/us/store/merchandise/apparel/'
                },
                {
                    label: 'Home & office',
                    href: 'https://www.nintendo.com/us/store/merchandise/home-and-office/'
                },
                {
                    label: 'Plush',
                    href: 'https://www.nintendo.com/us/store/merchandise/plush/'
                },
                {
                    label: 'Toys',
                    href: 'https://www.nintendo.com/us/store/merchandise/toys/'
                },
            ]
        },
        {
            label: 'Store exclusives',
            href: 'https://www.nintendo.com/us/store/exclusives/',
            icon: Exclusive,
            links: [
                {
                    label: 'Exclusive products',
                    href: 'https://www.nintendo.com/us/store/exclusives/products/'
                },
                {
                    label: 'My Nintendo rewards',
                    href: 'https://www.nintendo.com/us/store/exclusives/rewards/'
                },
                {
                    label: 'Nintendo Switch Online offers',
                    href: 'https://www.nintendo.com/us/store/exclusives/online/'
                },
            ]
        },
        {
            label: 'Characters',
            href: 'https://www.nintendo.com/us/store/characters/',
            icon: Characters,
            links: [
                {
                    label: 'Pikmin',
                    href: 'https://www.nintendo.com/us/store/characters/pikmin/'
                },
                {
                    label: 'Splatoon',
                    href: 'https://www.nintendo.com/us/store/characters/splatoon/'
                },
                {
                    label: 'Super Mario',
                    href: 'https://www.nintendo.com/us/store/characters/mushroom-kingdom/'
                },
                {
                    label: 'The Legend of Zelda',
                    href: 'https://www.nintendo.com/us/store/characters/zelda/'
                },  
            ]
        },
        {
            label: 'Sales & deals',
            href: 'https://www.nintendo.com/us/store/sales-and-deals/',
            icon: Deals,
            links: []
        }
    ]
}