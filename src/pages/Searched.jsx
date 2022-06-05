
import {useEffect, useState} from 'react'
import{useParams} from 'react-router-dom';
import styled from 'styled-components';
import{Link} from 'react-router-dom';
function Searched() {
    let params = useParams();
    const [searchedRecipes, setSearchedRecipes] = useState([])
    const getSearched = async (name) =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=7a206e94c48e4a7f9f9c5e857062e66c&number=12&query=${name}`);
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
    };

    useEffect(()=>{
        getSearched(params.search);
    },[params.search]);
  return (
    <Flex>
        {searchedRecipes.map((item)=>{
            return(
                <Card key={item.id}>
                    <Link to={'/recipe/' + item.id}>
                   <img src={item.image} alt={item.title}/>
                   <h4>{item.title}</h4>
                   </Link> 
                </Card>
            )
        })}
    </Flex>
  )
}
const Flex = styled.div`
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
export default Searched