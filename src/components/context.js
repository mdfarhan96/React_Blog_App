import { useState, createContext } from "react";

export const MainContext = createContext();

export const DataContext = (props) => {
  const [Data, setData] = useState([
    {
      id: "1",
      title: `Taj Mahal`,
      body: `The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal ...`,
      category: "Tourism",
      date: `Aug 14, 2019`,
      url: "https://th-thumbnailer.cdn-si-edu.com/NaExfGA1op64-UvPUjYE5ZqCefk=/fit-in/1600x0/filters:focal(1471x1061:1472x1062)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg",
    },
    {
      id: "2",
      title: "The Red Fort",
      body: `The Red Fort or Lal Qila is a historic fort in Old Delhi, Delhi in India that served as the main residence of the Mughal Emperors. Emperor Shah Jahan commissioned construction of the Red Fort on 12 May 1638, when he decided to shift his capital from Agra to Delhi. `,
      category: "Tourism",
      date: `Feb 13, 2017`,
      url: "http://bsmedia.business-standard.com/_media/bs/img/article/2018-04/27/full/1524814612-1299.jpg",
    },
    {
      id: "3",
      title: "Qutub Minar",
      body: `The Qutub Minar, also spelled as Qutb Minar and Qutab Minar, is a minaret and "victory tower" that forms part of the Qutb complex, which lies at the site of Delhi’s oldest fortified city, Lal Kot, founded by the Tomar Rajputs. It is a UNESCO World Heritage Site in the Mehrauli area of South Delhi, India.`,
      category: "Tourism",
      date: `Jan 22, 2015`,
      url: "https://www.shalusharma.com/wp-content/uploads/2012/07/qutub-minar-delhi.jpg",
    },
    {
      id: "4",
      title: "India Gate",
      body: `The India Gate is a war memorial located astride the Rajpath, on the eastern edge of the "ceremonial axis" of New Delhi, formerly called Kingsway.  `,
      category: "Tourism",
      date: `July 24, 2020`,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/India_Gate%2C_New_Delhi_at_Night.jpg/300px-India_Gate%2C_New_Delhi_at_Night.jpg",
    },
    {
      id: "5",
      title: "The Hawa Mahal",
      body: `The Hawa Mahal is a palace in the city of Jaipur, India. Built from red and pink sandstone, the palace sits on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers.`,
      category: "Tourism",
      date: `Jan 18, 2012`,
      url: "https://lh3.googleusercontent.com/FqXvailyyIAehQ2Imh_8G1lU8hc-Yy-EQ8iZtNocgLaYD_cmVreNAttCWuxwu8Nm",
    },
    {
      id: "1",
      title: `Royal Challengers Bangalore`,
      body: `Royal Challengers Bangalore are a franchise cricket team based in Bangalore, Karnataka, that plays in the Indian Premier League. It was founded in 2008 by United Spirits and named after the company's liquor brand Royal Challenge. Since its inception, the team has played its home matches at the M. Chinnaswamy Stadium.`,
      category: "IPL Teams",
      date: `Sep 22, 2012`,
      url: "https://www.royalchallengers.com/themes/custom/rcbbase/images/header/aboutus-logonew.jpg",
    },
    {
      id: "2",
      title: `Mumbai Indians
            `,
      body: `Mumbai Indians are a franchise cricket team based in Mumbai, Maharashtra, that competes in the Indian Premier League. Founded in 2008, the team is owned by India's biggest conglomerate, Reliance Industries, through its 100% subsidiary IndiaWin Sports.`,
      category: "IPL Teams",
      date: `Jan 20, 2010`,
      url: "https://yt3.ggpht.com/ytc/AKedOLSUVdCLLVCeY9sPVTwI0TqcCmHMivFtotMR1VyrZg=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      id: "3",
      title: `Chenai Super Kings`,
      body: `Chennai Super Kings are a franchise cricket team based in Chennai, Tamil Nadu, Southern India. They play in the Indian Premier League. Founded in 2008, the team plays its home matches at the M. A. Chidambaram Stadium in Chennai. `,
      category: "IPL Teams",
      date: `Oct 22, 2002`,
      url: "https://exchange4media.gumlet.io/news-photo/95862-big.jpg?format=webp&w=400&dpr=2.6",
    },
    {
      id: "4",
      title: `Kolkata Knight Riders`,
      body: `Kolkata Knight Riders are a franchise cricket team representing the city of Kolkata in the Indian Premier League. The franchise is owned by Bollywood actor Shah Rukh Khan, actress Juhi Chawla and her spouse Jay Mehta. The Knight Riders play at the iconic Eden Gardens stadium`,
      category: "IPL Teams",
      date: `Feb 02, 2011`,
      url: `https://static.toiimg.com/thumb/msid-72902745,width-1200,height-900,resizemode-4/.jpg`,
    },
    {
      id: "5",
      title: `Delhi Capitals
            `,
      body: `Delhi Capitals are a franchise cricket team based out of Delhi in the Indian Premier League., the franchise is jointly owned by the GMR Group and the JSW Group. The team's home ground is Arun Jaitley Stadium, located in New Delhi. The Capitals appeared in their first IPL final in 2020`,
      category: "IPL Teams",
      date: `April 12, 2017`,
      url: `https://staticg.sportskeeda.com/editor/2020/09/753b1-16013638452467-800.jpg`,
    },
    {
      id: "1",
      title: `Robotic Process Automation (RPA)`,
      body: `Like AI and Machine Learning, Robotic Process Automation, or RPA, is another technology that is automating jobs. RPA is the use of software to automate business processes such as interpreting applications, processing transactions, dealing with data, and even replying to emails. RPA automates repetitive tasks that people used to do. `,
      category: `Technology`,
      date: `April 1, 2019`,
      url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZYTrxxjDEsHx86rSWfua1vxgAFoNGy1s0Ekj-6AaYpMbendyO9eeZ9Vc-fbctjHyV6E&usqp=CAU`,
    },
    {
      id: "2",
      title: ` Machine Learning (ML)`,
      body: ` Machine Learning the subset of AI, is also being deployed in all kinds of industries, creating a huge demand for skilled professionals. Forrester predicts AI, machine learning, and automation will create 9 percent of new U.S. jobs by 2025, jobs including robot monitoring professionals, data scientists, automation specialists, and content curators, making it another new technology trend you must keep in mind too!,
            
            `,
      category: `Technology`,
      date: `September 22, 2021`,
      url: `	https://venturebeat.com/wp-content/uploads/2021/12/GettyImages-1202870693.jpg?fit=2113%2C1218&strip=all`,
    },
    {
      id: "3",
      title: `Artificial Intelligence (AI)`,
      body: `Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to natural intelligence displayed by animals including humans. Leading AI textbooks define the field as the study of "intelligent agents": any system that perceives its environment and takes actions that maximize its chance of achieving its goals AI applications include advanced web search engines (e.g., Google), recommendation systems (used by YouTube, Amazon`,
      category: `Technology`,
      date: `October 11, 2020`,
      url: `	https://www.simplilearn.com/ice9/free_resources_article_thumb/simplilearn-artificial-intelligence-interview-questions-article.jpg`,
    },
    {
      id: "4",
      title: `Edge Computing`,
      body: ` Edge computing is designed to help solve some of those problems as a way to bypass the latency caused by cloud computing and getting data to a data center for processing. It can exist “on the edge,” if you will, closer to where computing needs to happen. For this reason, edge computing can be used to process time-sensitive data in remote locations with limited or no connectivity to a centralized location. In those situations, edge computing can act like mini datacenters.
            
           `,
      category: `Technology`,
      date: `Marcgh 29, 2012`,
      url: `https://innovationatwork.ieee.org/wp-content/uploads/2019/06/Real-Life-Use-Cases-for-Edge-Computing_1024X684.png`,
    },
    {
      id: "5",
      title: `Virtual Reality and Augmented Reality`,
      body: `The next exceptional technology trend - Virtual Reality (VR) and Augmented Reality (AR), and Extended Reality (ER). VR immerses the user in an environment while AR enhances their environment. Although this technology trend has primarily been used for gaming thus far, it has also been used for training, as with VirtualShip, a simulation software used to train U.S. Navy, Army and Coast Guard ship captains.`,
      category: `Technology`,
      date: `July 31, 2021`,
      url: `https://blog.laval-virtual.com/wp-content/uploads/2021/04/vr-ar-realite-virtuelle-augmentee-business-technologies-immersives.jpg`,
    },
    {
      id: "1",
      title: "Swimming",
      body: `Swimming is an individual or team racing sport that requires the use of one's entire body to move through water. The sport takes place in pools or open water.`,
      category: "Fitness",
      date: "December 01, 2019",
      url: "https://upload.wikimedia.org/wikipedia/commons/4/43/40._Schwimmzonen-_und_Mastersmeeting_Enns_2017_100m_Butterfly-9318.jpg",
    },
    {
      id: "2",
      title: "Tennis",
      body: `Tennis is a racket sport that can be played individually against a single opponent or between two teams of two players each. Each player uses a tennis racket that is strung with cord to strike a hollow rubber ball covered with felt over or around a net and into the opponent's court..`,
      category: "Fitness",
      date: "May 2, 2018",
      url: "https://media.istockphoto.com/photos/tennis-rackets-and-balls-leaned-against-the-net-picture-id1171084311?k=20&m=1171084311&s=612x612&w=0&h=5gTGOsXlkZkSggxRnxbevqt80mKf12xT6GXUC6MN_Qc=",
    },
    {
      id: "3",
      title: "Cycling",
      body: `Cycling, also called bicycling or biking, is the use of bicycles for transport, recreation, exercise or sport. People engaged in cycling are referred to as "cyclists", "bicyclists", or "bikers"`,
      category: "Fitness",
      date: "June 10, 2021",
      url: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/cycling_3-6652c57.jpg",
    },
    {
      id: "4",
      title: "Running",
      body: `Running is a method of terrestrial locomotion allowing humans and other animals to move rapidly on foot. Running is a type of gait characterized by an aerial phase in which all feet are above the ground (though there are exceptions).[1] This is in contrast to walking, where one foot is always in contact with the ground, the legs are kept mostly straight and the center of gravity vaults over the stance leg `,
      category: "Fitness",
      date: "November 11, 2020",
      url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/female-runner-running-at-summer-park-trail-healthy-royalty-free-image-1591373138.jpg",
    },
    {
      id: "5",
      title: "Yoga",
      body: `Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India and aim to control (yoke) and still the mind, recognizing a detached witness-consciousness untouched by the mind (Chitta) and mundane suffering (Duḥkha). `,
      category: "Fitness",
      date: "April 01, 2015",
      url: "https://static.onecms.io/wp-content/uploads/sites/35/2019/04/16045733/benefits-yoga-fb.jpg",
    },
    {
      id: "1",
      title: `Salads`,
      body: `any of various usually cold dishes: such as. a : raw greens (such as lettuce) often combined with other vegetables and toppings and served especially with dressing. b : small pieces of food (such as pasta, meat, fruit, or vegetables) usually mixed with a dressing (such as mayonnaise) or set in gelatin.`,
      category: "Food",
      date: `June 19, 2021`,
      url: `https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FSeries%2F2021-01-tonight-we-veg-italian-chopped-salad%2FItalianChoppedSaladOption9`,
    },
    {
      id: "2",
      title: `Starters`,
      body: `Well, a small dish of food or a drink taken before a meal or the main course of a meal, these tit-bits of food are known to increase appetite and thus known as Appetizers, which is just English to the French word Apéritif or Hors d'oeuvre or simply a Starter in colloquial.`,
      category: "Food",
      date: `June 19, 2021`,
      url: `https://www.spiceupthecurry.com/wp-content/uploads/2020/09/paneer-tikka-recipe-2.jpg`,
    },
    {
      id: "3",
      title: `Appetizer`,
      body: `An appetizer is part of a meal that's served before the main course. You might serve your dinner guests an appetizer of crab-stuffed mushrooms when they first arrive for dinner. Usually, an appetizer is a small serving of food — just a few bites — meant to be eaten before an entree, and often shared by several people.`,
      category: "Food",
      date: `January 29, 2022`,
      url: `https://www.tasteofhome.com/wp-content/uploads/2018/01/exps73648_THCA163696B11_20_6b.jpg?fit=700,1024`,
    },
    {
      id: "4",
      title: `Main Course`,
      body: ` The main dish is usually the heaviest, heartiest, and most complex or substantive dish on a menu. The main ingredient is usually meat or fish; in vegetarian meals, the main course sometimes attempts to mimic a meat course. It is most often preceded by an appetizer, soup, and/or salad, and followed by a dessert. For those reasons the main course is sometimes referred to as the "meat course". In formal dining, a well-planned main course can function as a sort of gastronomic apex or climax `,
      category: "Food",
      date: `January 20, 2021`,
      url: `https://eatmightymeals.com/wp-content/uploads/2021/10/Nutrient-dense-foods-and-mental-health-blog-1024x1024.jpg`,
    },
    {
      id: "5",
      title: `Deserts`,
      body: `dessert, the last course of a meal. In the United States dessert is likely to consist of pastry, cake, ice cream, pudding, or fresh or cooked fruit. British meals traditionally end with nuts, fruits, and port or other dessert wine, while French practice is to end with fruit, cheese, and wine; in both Britain and France, a more elaborate meal would include a sweet course preceding the dessert offerings.`,
      category: "Food",
      date: `June 9, 2021`,
      url: `https://c.ndtvimg.com/2020-04/chd4rs3g_dessert_625x300_07_April_20.jpg`,
    },
  ]);

  return (
    <>
      <MainContext.Provider value={[Data, setData]}>
        {props.children}
      </MainContext.Provider>
    </>
  );
};
