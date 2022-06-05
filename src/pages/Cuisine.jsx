
import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link, useParams} from 'react-router-dom';


function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();
    const getCuisine = async (name) =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=7a206e94c48e4a7f9f9c5e857062e66c&number=12&cuisine=${name}`);
        const recipes = await data.json();
        setCuisine(recipes.results);
    }
    useEffect(()=>{
        getCuisine(params.type)
    },[params.type]);
  return (
      <Grid animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}>
          
          {cuisine.map((item)=>{
              return(
                  <Card key={item.id}>
                      <Link to={'/recipe/' + item.id}>
                      <img src={item.image} alt=""/>
                      <h4>{item.title}</h4>
                      </Link>
                  </Card>
              )
          })}
      </Grid>
  )
}

const Grid = styled(motion.div)`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;

`
const Card = styled.div`
margin: 20px;
flex-basis: 20rem;

img{
    width: 100%;
    border-radius: 2rem;
}
a{
    text-decoration: none;
}
h4{
    text-align: center;
    padding: 1rem;
}
`
export default Cuisine