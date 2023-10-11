import { PeopleOutline, BorderColorOutlined } from "@mui/icons-material";
import { PieChartOutline, FavoriteBorder } from "@mui/icons-material";
import Education from "../images/education.png";
import Social from "../images/Social.png";
import Vocation from "../images/Vocation.png";
import Welfare from "../images/welfare.png";

const description =
  "Welcome to our official homepage, here are our core areas of attention";

const content =
  "The welfare team, led by the Chairman, Mr Soji, paid Ondo state Ophanage baby home Oba Ile Ondo state a courtesy and reach out visit on the 21st of June, 2019. Among the company was the chairman of SOJITADE foundation and board of trustees among other staffs. The management of the orphanage was happy to receive the team and the gifts, also made known some of their needs too.For more pictures kindly click on the link below";

const newsContent =
  "The welfare team, led by the Chairman, Mr Soji, paid Ondo state Ophanage baby home Oba Ile Ondo state a courtesy and reach out visit on the 21st of June, 2019. Among...";

const newsItem = {
  title: "Sojitade Orphanage Home Oba-Ile",
  newsContent,
  id: null,
  date: "21 June, 2019",
};

export const about_us = [
  {
    title: "Education",
    description,
    image: Education,
    content,
    icon: BorderColorOutlined,
  },
  {
    title: "Social LifeStyle",
    description,
    image: Social,
    content,
    icon: PeopleOutline,
  },
  {
    title: "Vocational Skills",
    description,
    image: Vocation,
    content,
    icon: PieChartOutline,
  },
  {
    title: "Welfare",
    description,
    image: Welfare,
    content,
    icon: FavoriteBorder,
  },
];

export const news = Array(13).fill(newsItem);


