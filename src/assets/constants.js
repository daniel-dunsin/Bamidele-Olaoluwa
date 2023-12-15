import canva from "./images/canva.png";
import blender from "./images/Blender.png";
import hitfilm from "./images/hitfilm.png";
import { BiBulb, BiFullscreen, BiVideo, BiPhotoAlbum } from "react-icons/bi";
import cakeshop1 from "./images/projects/cakeshop1.png";
import cakeshop2 from "./images/projects/cakeshop2.png";
import cakeshop3 from "./images/projects/cakeshop3.png";
import cakeshop4 from "./images/projects/cakeshop4.png";
import carChase1 from "./images/projects/car chase1.png";
import carChase2 from "./images/projects/car chase2.png";
import carChase3 from "./images/projects/car chase3.png";
import carChase4 from "./images/projects/car chase4.png";
import carChase5 from "./images/projects/car chase5.png";
import carChase6 from "./images/projects/car chase6.png";
import pepsi1 from "./images/projects/pepsi1.png";
import pepsi2 from "./images/projects/pepsi2.png";
import pepsi3 from "./images/projects/pepsi3.png";
import pepsi4 from "./images/projects/pepsi4.png";
import pepsi5 from "./images/projects/pepsi5.png";
import pepsi6 from "./images/projects/pepsi6.png";
import pepsi7 from "./images/projects/pepsi7.png";
import pepsi8 from "./images/projects/pepsi8.png";
import swatPatrol1 from "./images/projects/swat patrol1.png";
import swatPatrol2 from "./images/projects/swat patrol2.png";
import swatPatrol3 from "./images/projects/swat patrol3.png";
import swatPatrol4 from "./images/projects/swat patrol4.png";
import swatPatrol5 from "./images/projects/swat patrol5.png";

const links = [
  {
    id: 1,
    text: "Home",
    link: "home",
  },
  {
    id: 2,
    text: "Skills",
    link: "skills",
  },
  {
    id: 3,
    text: "Services",
    link: "services",
  },
  {
    id: 4,
    text: "Portfolio",
    link: "portfolio",
  },
  {
    id: 5,
    text: "Contact",
    link: "contact",
  },
];

const skills = [
  {
    id: 1,
    skill: "Canva",
    img: canva,
  },
  {
    id: 2,
    skill: "Hitfilm Express video editing",
    img: hitfilm,
  },
  {
    id: 3,
    skill: "Blender 3d",
    img: blender,
  },
];

const services = [
  {
    id: 1,
    icon: <BiBulb />,
    text: "Innovative Ideas",
    color: "lightPink",
  },
  {
    id: 2,
    icon: <BiPhotoAlbum />,
    text: "Graphics Design",
    color: "lightYellow",
  },
  {
    id: 3,
    icon: <BiFullscreen />,
    text: "3d Graphics",
    color: "lightBlue",
  },
  {
    id: 4,
    icon: <BiVideo />,
    text: "Video Editing",
    color: "lightPurple",
  },
];

const projects = [
  {
    id: 1,
    text: "Pepsi Product",
    images: [pepsi1, pepsi2, pepsi3, pepsi4, pepsi5, pepsi6, pepsi7, pepsi8],
    description:
      "A pepsi product launch / showcase project made with Blender 3D",
    toolsUsed: [
      {
        name: "Blender 3D",
        img: blender,
      },
      {
        name: "HitFilm Express",
        img: hitfilm,
      },
    ],
    link: "https://drive.google.com/drive/folders/1bWBjJhKjHfUqTP77meKg3WRQFNoLZD8U",
  },
  {
    id: 2,
    text: "Motor chase",
    images: [carChase1, carChase2, carChase3, carChase4, carChase5, carChase6],
    description: "A police car chase 3d video made with Blender 3D",
    toolsUsed: [
      {
        name: "Blender 3D",
        img: blender,
      },
      {
        name: "HitFilm Express",
        img: hitfilm,
      },
    ],
    link: "https://drive.google.com/file/d/1bhey3mfw-N9eT_y_M2V_LkkjtqeMFWbH/view?usp=sharing",
  },
  {
    id: 3,
    text: "Cake resturant",
    images: [cakeshop1, cakeshop2, cakeshop3, cakeshop4],
    description: "A cake resturant interior made with Blender 3D",
    toolsUsed: [
      {
        name: "Blender 3D",
        img: blender,
      },
      {
        name: "HitFilm Express",
        img: hitfilm,
      },
    ],
    link: "https://drive.google.com/drive/folders/1bWBjJhKjHfUqTP77meKg3WRQFNoLZD8U",
  },
  {
    id: 4,
    text: "Swat Patrol",
    images: [swatPatrol1, swatPatrol2, swatPatrol3, swatPatrol4, swatPatrol5],
    description: "A call of duty gameplay session clone made with Blender 3D",
    toolsUsed: [
      {
        name: "Blender 3D",
        img: blender,
      },
      {
        name: "HitFilm Express",
        img: hitfilm,
      },
    ],
    link: "https://drive.google.com/drive/folders/1bWBjJhKjHfUqTP77meKg3WRQFNoLZD8U",
  },
];

export { skills, services, links, projects };
