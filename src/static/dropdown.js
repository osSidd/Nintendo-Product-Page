import Parents from "../components/icons/parents";
import Children from "../components/icons/children";
import System from "../components/icons/system";
import Service from "../components/icons/service";
import Switch from "../components/icons/switch";
import Release from "../components/icons/release";
import Calender from "../components/icons/calender";
import Games from "../components/icons/games";

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
}