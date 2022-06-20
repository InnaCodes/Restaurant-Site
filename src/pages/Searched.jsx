import React from 'react'
import {useEffect, useState} from 'react'
import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom'
import {motion} from 'framer-motion'
function Searched() {
    const [searchedResult, setSearchedResult] = useState([])
    let params = useParams();
    useEffect(()=>{
        getSearched(params.search)
    },[params.search])
    const getSearched = async (name)=>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=7a206e94c48e4a7f9f9c5e857062e66c&query=${name}&number=9`)
        const recipes = await data.json()
        setSearchedResult(recipes.results)
    }
  return (
    <Grid 
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    >
    {searchedResult.map((result)=>{
        return(

           <Card key={result.id}>
                <Link to={`/recipe/${result.id}`}>
                    <img src={result.image} alt={result.title}/>
                    <h4>{result.title}</h4>
                </Link>
            </Card>
        )
        
    })}
    </Grid>
  )
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;
const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem
    }
`
export default Searched