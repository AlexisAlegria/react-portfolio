import "./testimonials.scss"

export default function Testimonials() {

    const data = [
        {
          id: 1,
          name: "Tom Durden",
          title: "Senior Developer",
          img: "./assets/close-portrait-man.webp",
          icon: "assets/twitter.png",
          url: "",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
        },
        {
          id: 2,
          name: "Mauricio del Rio",
          title: "Tech Lead Patient Service of 1Health",
          img: "./assets/mauricio-del-rio.jpg",
          icon: "assets/linkedin.png",
          url: "https://www.linkedin.com/in/mauricio-del-r%C3%ADo-a4b1a98b/",
          desc:
            "Alexis, fue mi alumno igualmente y se desarrollo de una forma excelente en el curso, tomando como desafío una muy entretenida aplicación. Si estás buscando un Jr con una rápida adaptabilidad y muchísimas ganas de aprender, recomiendo enormemente que hablen con él!",
          featured: true,
        },
        {
          id: 3,
          name: "Martin Harold",
          title: "CEO of ALBI",
          img:
            "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/linkedin.png",
          url: "",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
      ];

    return (
        <div className="testimonials" id="testimonials">
          <h1>Testimonials</h1>
          <div className="container">
            {data.map((d) =>(
              <div className={d.featured ? "card featured" : "card"}>
                <div className="top">
                    <img src="./assets/arrow.png" className="left" alt=""/>
                    <img src={d.img} className="user" alt=""/>
                    <a href={d.url} target="_blank"><img src={d.icon} className="right" alt=""/></a>
                </div>
                <div className="center">
                    {d.desc}
                </div>
                <div className="bottom">
                    <h3>{d.name}</h3>
                    <h4>{d.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
    )
}
