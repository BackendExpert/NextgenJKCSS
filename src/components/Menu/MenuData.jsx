import {
    FaBook, FaDownload, FaCogs, FaColumns, FaArrowsAlt, FaAlignJustify, FaThLarge,
    FaExpandArrowsAlt, FaCompressArrowsAlt, FaTextHeight, FaFont, FaImage, FaFillDrip,
    FaBorderStyle, FaPalette, FaRegSquare, FaRegClone, FaFilter, FaTable, FaMagic,
    FaSyncAlt, FaRandom, FaEye, FaCube, FaHandPointer, FaAdjust
} from "react-icons/fa6"

// Main menus
const mainMenu = [
    { name: "Documentation", icon: <FaBook />, link: "#" },
]

// Get started
const getStarted = [
    { name: "Installation", icon: <FaDownload />, link: "#" },
    { name: "Framework Guide", icon: <FaCogs />, link: "#" },
]

// Layout
const layout = [
    { name: "Columns", icon: <FaColumns />, link: "#" },
    { name: "Position", icon: <FaArrowsAlt />, link: "#" },
]

// Flex & Grid
const flexGrid = [
    { name: "Flex", icon: <FaAlignJustify />, link: "#" },
    { name: "Grid", icon: <FaThLarge />, link: "#" },
]

// Spacing
const spacing = [
    { name: "Padding", icon: <FaExpandArrowsAlt />, link: "#" },
    { name: "Margin", icon: <FaCompressArrowsAlt />, link: "#" },
]

// Sizing
const sizing = [
    { name: "Width", icon: <FaExpandArrowsAlt />, link: "#" },
    { name: "Height", icon: <FaCompressArrowsAlt />, link: "#" },
]

// Typography
const typography = [
    { name: "Font Family", icon: <FaFont />, link: "#" },
    { name: "Font Size", icon: <FaTextHeight />, link: "#" },
]

// Backgrounds
const backgrounds = [
    { name: "Backgrounds Image", icon: <FaImage />, link: "#" },
    { name: "Backgrounds Color", icon: <FaFillDrip />, link: "#" },
]

// Borders
const borders = [
    { name: "Borders Radius", icon: <FaBorderStyle />, link: "#" },
    { name: "Borders Color", icon: <FaPalette />, link: "#" },
]

// Effects
const effects = [
    { name: "Box Shadow", icon: <FaRegSquare />, link: "#" },
    { name: "Text Shadow", icon: <FaRegClone />, link: "#" },
]

// Filters
const filters = [
    { name: "Blur", icon: <FaFilter />, link: "#" },
    { name: "Brightness", icon: <FaAdjust />, link: "#" },
]

// Tables
const tables = [
    { name: "Border Collapse", icon: <FaTable />, link: "#" },
    { name: "Border Spacing", icon: <FaTable />, link: "#" },
]

// Transitions & Animation
const transitions = [
    { name: "Transition Property", icon: <FaMagic />, link: "#" },
    { name: "Transition Behavior", icon: <FaSyncAlt />, link: "#" },
]

// Transforms
const transforms = [
    { name: "Backface Visibility", icon: <FaEye />, link: "#" },
    { name: "Perspective", icon: <FaCube />, link: "#" },
]

// Interactivity
const interactivity = [
    { name: "Accent Color", icon: <FaHandPointer />, link: "#" },
    { name: "Appearance", icon: <FaRandom />, link: "#" },
]

export {
    mainMenu, getStarted, layout, flexGrid, spacing, sizing,
    typography, backgrounds, borders, effects, filters,
    tables, transitions, transforms, interactivity
}
