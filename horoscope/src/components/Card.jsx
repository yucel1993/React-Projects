import CardStyle from "../sass/Card.module.scss";

function Card({data}) {
    console.log(data)
  return (<div className={CardStyle.main}>
        {data.map((item)=>{
            console.log(item)
const {id,date,desc,image,title} =item

return (
<>
<div className={CardStyle.container} key={id} style={{  backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",}}>
<h1>{title}</h1>
<h2>{date}</h2>
<div className={CardStyle.description}>{desc}</div>


</div>
</>
    
)
        })}



    </div>
  )
}

export default Card