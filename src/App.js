import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Articles from "./components/Articles";
import Navbar from "./components/Navbar"

let articleData = [
  {
  name: "C Poppo ",
  date: "12-OCT-2017",
  heading: "Girl Power",
  article: "Empowering women to participate fully in economic life across all sectors is essential to build stronger economies, achieve internationally agreed goals for development and sustainability, and improve the quality of life for women, men, families and communities.Empowering women to participate fully in economic life across all sectors is essential to build stronger economies, achieve internationally agreed goals for development and sustainability, and improve the quality of life for women, men, families and communities.",
  imgUrl:"/img/empower222.jpg"
},
{
name: "B Bona ",
date: "12-OCT-2017",
heading: "Women Empowerment",
article: "Women to participate fully in economic life across all sectors is essential to build stronger economies, achieve internationally agreed goals for development and sustainability, and improve the quality of life for women, men, families and communities.Empowering women to participate fully in economic life across all sectors is essential to build stronger economies, achieve internationally agreed goals for development and sustainability, and improve the quality of life for women, men, families and communities.",
imgUrl:"/img/empower1111.jpg"
},
{
name: "G Sparx ",
date: "12-NOV-2017",
heading: "Dear Abena",
article: "Fully in economic life across all sectors is essential to build stronger economies, achieve internationally agreed goals for development and sustainability, and improve the quality of life for women, men, families and communities.Empowering women to participate fully in economic life across all sectors is essential to build stronger economies, achieve internationally agreed goals for development and sustainability, and improve the quality of life for women, men, families and communities and surrounding environs.",
imgUrl:"/img/empower38.jpg"
}
];

let navLinks = [
{
  name: "Home",
  local: "http://www.google.com"
},
{
  name: "Stories",
  local: "http://www.google.com"
},
{
  name: "Contact",
  local: "http://www.google.com"
}
];

let socialLinks = [
  {
    iconName: "university",
    url: "https://www.google.com"
  },
  {
    iconName: "rss",
    url: "https://www.rss.com"
  },
  {
    iconName: "wordpress",
    url: "https://www.wordpress.com"
  },
  {
    iconName: "google-plus",
    url: "https://www.gmail.com"
  }
]

class App extends React.Component {
  render() {
    return (
      <div>
      <Navbar brand="Afi Talks" links={navLinks}/>
      <Header />
      <Articles data={articleData}/>
      <Footer slinks={socialLinks}/>
      </div>
    )
  }
}
export default App;
