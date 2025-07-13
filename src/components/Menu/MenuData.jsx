import {
    FaBook, FaDownload, FaCogs, FaColumns, FaArrowsAlt, FaAlignJustify, FaThLarge,
    FaExpand, FaCompress, FaFont, FaImage, FaFillDrip, FaBorderStyle, FaPalette,
    FaRegSquare, FaRegClone, FaFilter, FaTable, FaMagic, FaSync, FaEye, FaCube,
    FaHandPointer, FaRandom
} from "react-icons/fa"
import { MdTextFields, MdOutlineGradient, MdBlurOn, MdBrightness6, MdOutlineInvertColors } from "react-icons/md"
import { HiOutlineColorSwatch } from "react-icons/hi"
import { BsTextareaResize } from "react-icons/bs"
import { RiFontSize2 } from "react-icons/ri"

const mainMenu = [
    { name: "Documentation", icon: <FaBook />, link: "/Docs/Introduction" },
]

const getStarted = [
    { name: "Installation", icon: <FaDownload />, link: "/Docs/Installation" },
    { name: "Framework Guide", icon: <FaCogs />, link: "/Docs/FrameworkGuide" },
    { name: "Colors", icon: <MdOutlineInvertColors />, link: "/Docs/Colors" },
]

const layout = [
    { name: "Columns", icon: <FaColumns />, link: "#" },
    { name: "Position", icon: <FaArrowsAlt />, link: "#" },
]

const flexGrid = [
    { name: "Flex", icon: <FaAlignJustify />, link: "#" },
    { name: "Grid", icon: <FaThLarge />, link: "#" },
]

const spacing = [
    { name: "Padding", icon: <FaExpand />, link: "#" },
    { name: "Margin", icon: <FaCompress />, link: "#" },
]

const sizing = [
    { name: "Width", icon: <FaExpand />, link: "#" },
    { name: "Height", icon: <FaCompress />, link: "#" },
]

const typography = [
    { name: "Font Family", icon: <FaFont />, link: "#" },
    { name: "Font Size", icon: <RiFontSize2 />, link: "#" },
]

const backgrounds = [
    { name: "Backgrounds Image", icon: <FaImage />, link: "#" },
    { name: "Backgrounds Color", icon: <FaFillDrip />, link: "#" },
]

const borders = [
    { name: "Borders Radius", icon: <FaBorderStyle />, link: "#" },
    { name: "Borders Color", icon: <FaPalette />, link: "#" },
]

const effects = [
    { name: "Box Shadow", icon: <FaRegSquare />, link: "#" },
    { name: "Text Shadow", icon: <FaRegClone />, link: "#" },
]

const filters = [
    { name: "Blur", icon: <MdBlurOn />, link: "#" },
    { name: "Brightness", icon: <MdBrightness6 />, link: "#" },
]

const tables = [
    { name: "Border Collapse", icon: <FaTable />, link: "#" },
    { name: "Border Spacing", icon: <FaTable />, link: "#" },
]

const transitions = [
    { name: "Transition Property", icon: <FaMagic />, link: "#" },
    { name: "Transition Behavior", icon: <FaSync />, link: "#" },
]

const transforms = [
    { name: "Backface Visibility", icon: <FaEye />, link: "#" },
    { name: "Perspective", icon: <FaCube />, link: "#" },
]

const interactivity = [
    { name: "Accent Color", icon: <HiOutlineColorSwatch />, link: "#" },
    { name: "Appearance", icon: <FaRandom />, link: "#" },
]

export {
    mainMenu, getStarted, layout, flexGrid, spacing, sizing,
    typography, backgrounds, borders, effects, filters,
    tables, transitions, transforms, interactivity
}
